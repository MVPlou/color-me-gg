import { Box, Text, Button, Link } from "@chakra-ui/react";

const StatsCard = () => {
  return (
    <Box 
      borderWidth="1px" 
      borderRadius="lg" 
      padding="2" 
      maxWidth="400px"
    >
      <Text 
        fontWeight="bold" 
        marginBottom="2" 
        borderBottomWidth="1px"
        pb="2"
      >
        Category: 
        <Text 
          as="span" 
          fontWeight="normal" 
          display="inline-block" 
          ml="2"
          borderBottomWidth="1px"
        >
          Cars
        </Text>
      </Text>

      <Text 
        fontWeight="bold" 
        marginBottom="2" 
        borderBottomWidth="1px"
        pb="2"
      >
        Prints: 
        <Text 
          as="span" 
          fontWeight="normal" 
          display="inline-block" 
          ml="2"
          borderBottomWidth="1px"
        >
          400
        </Text>
      </Text>

      <Text 
        fontWeight="bold" 
        marginBottom="2" 
        borderBottomWidth="1px"
        pb="2"
      >
        Likes: 
        <Text 
          as="span" 
          fontWeight="normal" 
          display="inline-block" 
          ml="2"
          borderBottomWidth="1px"
        >
          323
        </Text>
      </Text>

      <Text 
        fontWeight="bold" 
        marginBottom="2" 
        borderBottomWidth="1px"
        pb="2"
      >
        Added: 
        <Text 
          as="span" 
          fontWeight="normal" 
          display="inline-block" 
          ml="2"
        >
          October 11, 2023
        </Text>
      </Text>

      <Text 
        fontWeight="bold" 
        marginBottom="2" 
        
        pb="2"
      >
        Added by  
        <Text 
          as="span" 
          fontWeight="normal" 
          display="inline-block" 
          ml="2"
          
        >
          ColorMe.GG
        </Text>
      </Text>
    </Box>
  );
}

export default StatsCard;
