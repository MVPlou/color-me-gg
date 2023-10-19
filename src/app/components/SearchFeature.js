import { forwardRef, useState } from 'react';
import { 
  Input, Box, InputGroup, InputLeftElement, InputRightElement, 
  Flex, Button, Kbd, Stack, Popover, PopoverTrigger, PopoverContent,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import TrendingSearchFeature from '../components/TrendingSearchFeature'


const SearchFeature = forwardRef((props, ref) => {

  const inputWidth = { base: '100vw', md: '900px' };
  const popoverDisplay = { base: 'hidden',  md: 'block' };

  return (
    <Box width="full" px={4}>
      <Popover display={popoverDisplay}>
      <PopoverTrigger display={popoverDisplay}>
          <InputGroup size="lg" mb={4}>
            <InputLeftElement children={<SearchIcon color="gray.500" />} />
            <Input 
  ref={ref}
  placeholder="Search for coloring pages..." 
  py={6} 
  fontSize="xl"
  w={inputWidth}
/>
          </InputGroup>
        </PopoverTrigger>
        <PopoverContent w={inputWidth} h='350px' >
        <TrendingSearchFeature />
        <Flex 
        direction="row" 
        overflowX={{ base: "auto", md: "visible" }} 
        py={2} 
        mb={4} 
        maxWidth={{ base: "100%", md: "930px" }}
        justifyContent="center"
          alignItems="center" >
        {["Halloween", "Animals", "Disney", "Kids", "Adults", "Christmas", "Valentines", "Adults", "Christmas", "Valentines"].map((category, index) => (
          <Button 
            key={index} 
            mr={2} 
            variant='solid'
            colorScheme="cyan"
            px={3} // Consistent padding
            fontSize="xs" // Consistent font size
            minWidth="auto" // Button width adjusts to content
            maxWidth="150px" // Prevent buttons from becoming too wide

          >
            {category}
          </Button>
        ))}
          </Flex>
          </PopoverContent>
      </Popover>
      <Flex 
        direction="row" 
        overflowX={{ base: "auto", md: "visible" }} 
        py={2} 
        mb={4} 
        maxWidth={{ base: "100%", md: "930px" }}
        justifyContent="center" // Center the buttons
        css={{
          scrollbarWidth: { base: 'thin', md: 'none' },
          scrollbarColor: 'rgba(155, 155, 155, 0.7) transparent',
          '&::-webkit-scrollbar': {
            width: '6px',
            height: '6px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(155, 155, 155, 0.7)',
          },
        }}
      >
        {["Halloween", "Animals", "Disney", "Kids", "Adults", "Christmas", "Valentines", "Adults", "Christmas", "Valentines"].map((category, index) => (
          <Button 
            key={index} 
            mr={2} 
            px={3} // Consistent padding
            fontSize="xs" // Consistent font size
            minWidth="auto" // Button width adjusts to content
            maxWidth="150px" // Prevent buttons from becoming too wide
            variant='solid'
            colorScheme="cyan"

          >
            {category}
          </Button>
        ))}
      </Flex>
    </Box>
  );
});

export default SearchFeature;
