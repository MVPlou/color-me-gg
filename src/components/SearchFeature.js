import { forwardRef, useState } from 'react';
import { 
  Input, Box, InputGroup, InputLeftElement, InputRightElement, 
  Flex, Button, Kbd, Stack, Popover, PopoverTrigger, PopoverContent ,

 
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const SearchFeature = forwardRef((props, ref) => {

  const inputWidth = {  md: '900px' };
  const popoverDisplay = { 'none', md: 'block' };

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
            <InputRightElement>
              <Stack direction="row" spacing={1} m={5}>
                <Kbd>⌘</Kbd>
                <Kbd>K</Kbd>
              </Stack>
            </InputRightElement>
          </InputGroup>
        </PopoverTrigger>
        <PopoverContent w={inputWidth} h='750px' >
       
          
          </PopoverContent>
      </Popover>
      <Flex 
        direction="row" 
        overflowX={{ base: "auto", md: "visible" }} 
        py={2} 
        mb={4} 
        maxWidth={{ base: "100%", md: "930px" }}
         
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

          >
            {category}
          </Button>
        ))}
      </Flex>
    </Box>
  );
});

export default SearchFeature;
