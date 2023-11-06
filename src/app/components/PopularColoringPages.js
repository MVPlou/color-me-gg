import { Grid, Flex, Text, Button } from '@chakra-ui/react';
import { useState } from 'react'; // Import useState

export default function PopularColoringPages({ coloringPages }) {
 // State to handle the number of items displayed
 const [itemsToShow, setItemsToShow] = useState(20); // Default to show 10 items

 // Handle the Show More click
 const handleShowMore = () => {
   setItemsToShow(itemsToShow + 10); // Show 10 more items each time
 };



  return (
    <Flex direction="column" alignItems="center" width="100%">
      <Text 
        fontSize={{ base: 'xl', sm: '2xl', md: '3xl', lg: '4xl' }}
        fontFamily="monospace"
        fontWeight="bold" 
        textAlign="center" 
        mb={2}
        mt={2}
        p={4}
      >
        <h1>
        Trending Coloring Pages
        </h1>
      </Text>

      <Grid
        templateColumns={{ base: 'repeat(2, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(5, 2fr)' }}
        gap={4}
        width="100%"
        bg="cyan.200" // Added cyan background color
        p={4} // Padding to give some space inside the grid
        borderRadius="md" // Optional: Rounded corners for the grid
        boxShadow='dark-lg'
      >
        {coloringPages.slice(0, itemsToShow).map((page, index) => (
          <Flex className='pt-3'
            key={index}
            width={{ base: '180px', sm: '180px', md: '140px', lg: '160px' }}
            height={{ base: '220px', sm: '220px', md: '180px', lg: '200px' }}
            bg="white"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            borderRadius="xl"
            boxShadow='lg'
  
          >
            {page.name}
          </Flex>
        ))}
      </Grid>

      {itemsToShow < coloringPages.length && (
        <Button 
          mt={6}
          mb={6}
          colorScheme="cyan"
          size="lg"
          onClick={handleShowMore} // Attach the click handler
        >
          Show More
        </Button>
      )}
    </Flex>
  );
}




