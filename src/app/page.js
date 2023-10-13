"use client"
import '../app/globals.css'
import { 
  Input, Box, InputGroup, InputLeftElement, InputRightElement, 
  Flex, Button, Kbd, Stack, Popover, PopoverTrigger, PopoverContent ,

  Container,

} from '@chakra-ui/react';
import SearchFeature from '../components/SearchFeature.js/index.js';
import PopularColoringPages from '../components/PopularColoringPages';
import Sidebar from '../components/Sidebar';
import { useRouter } from "next/navigation";




export default function Home() {
  const popularPages = [
    { name: 'lion.pdf', type: 'animals' },
    { name: 'lion.pdf', type: 'animals' },
    { name: 'lion.pdf', type: 'animals' },
    { name: 'lion.pdf', type: 'animals' },
    { name: 'lion.pdf', type: 'animals' },
    { name: 'lion.pdf', type: 'animals' },
    { name: 'lion.pdf', type: 'animals' },
    { name: 'lion.pdf', type: 'animals' },
    { name: 'lion.pdf', type: 'animals' },
    { name: 'lion.pdf', type: 'animals' },
    { name: 'lion.pdf', type: 'animals' },
    { name: 'lion.pdf', type: 'animals' },
    { name: 'lion.pdf', type: 'animals' },
    { name: 'lion.pdf', type: 'animals' },
    { name: 'lion.pdf', type: 'animals' },
    { name: 'lion.pdf', type: 'animals' },
    // Add more popular pages as needed
  ];

  const recentlyAddedPages = [
    { name: 'car.pdf', type: 'cars' },
    // Add more recently added pages as needed
  ];

  const seasonalPages = [
    { name: 'santa.pdf', type: 'christmas' },
    // Add more seasonal pages as needed
  ];

  return <>
    <Container className='pt-10' width="full" centerContent>

       <Flex
        direction="column"
        justify="center"
        align="center"
        w="100vw"
        mb={4}
        pt='20px'
      >
         <Box maxW={{ base: '90%', sm: '80%', md: '900px' }}>
          <SearchFeature />
        </Box>
      </Flex>
          <PopularColoringPages className='pt-4' coloringPages={popularPages} />
      </Container>
      </>
}


