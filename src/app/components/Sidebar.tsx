'use client'
import React, { ReactText } from 'react'
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
} from '@chakra-ui/react'
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiGrid,
  FiEdit2,
  FiInfo,
} from 'react-icons/fi'
import { IconType } from 'react-icons'
import Link from 'next/link'


interface LinkItemProps {
  name: string
  icon: IconType
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Home', icon: FiHome },
  { name: 'About Us', icon: FiInfo },
  { name: 'Catergories', icon: FiGrid },
  { name: 'ColoringPages/1', icon: FiEdit2 },

 
]

export default function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSidebarOpen, setSidebarOpen] = React.useState(false); // Add this line

  const handleOpen = () => {
    console.log("Opening drawer...");
    onOpen();
    setSidebarOpen(true); // Add this line
  };

  const handleSidebarClose = () => { // Add this function
    onClose();
    setSidebarOpen(false);
  };

  return (
    <Box minH="100vh" className='top-0' 
    // bg={useColorModeValue('gray.100', 'gray.900')}
    position="fixed"
    
    >
      <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent
  
        >
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
       <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={handleOpen} /> {/* Use handleOpen here */}
      <Box ml={{ base: 0, md: 60 }} p="4">
        {/* Content */}
      </Box>
    </Box>
  )
}

interface SidebarProps extends BoxProps {
  onClose: () => void
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
         ColorMe.GG
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  )
}

interface NavItemProps extends FlexProps {
  icon: IconType
  children: ReactText
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  if (typeof children !== 'string') {
    // Handle the case where children is not a string, if necessary
    return null;
  }
  
  const linkPath = children === 'Home' ? '/' : `/${children.toLowerCase()}`;
  return (
    <Link href={linkPath} passHref>
      <Box  style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: 'cyan.400',
            color: 'white',
          }}
          {...rest}
        >
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: 'white',
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      </Box>
    </Link>
  );
}


interface MobileProps extends FlexProps {
  onOpen: () => void
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  console.log("MobileNav rendered"); // Add this line here
  return (
    <Flex
    position="fixed"
     width="full"
      top="0"
      
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        ColorMe.GG
      </Text>
    </Flex>
  )
}