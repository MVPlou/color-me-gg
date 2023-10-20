// DescriptionBox.js
import React from 'react';
import { Box, Text } from '@chakra-ui/react';

interface DescriptionBoxProps {
    text: string; // Now, 'text' is explicitly of type 'string'
  }

  const DescriptionBox: React.FC<DescriptionBoxProps> = ({ text }) => {
    return (
      <Box
        maxW="500px" // maximum width of the box
        h="100px" // height of the box
        borderWidth="1px" // for the box to be visible, optionally add a border
        borderRadius="md" // optional: if you want rounded corners
        padding="4" // optional: for inner padding
        overflowY="auto"
        bg='white'
        boxShadow='dark-lg'
        p='6'
         // to make the content scrollable if it exceeds the box height
      >
        <Text>{text}</Text> 
      </Box>
    );
  };
  
  export default DescriptionBox;
