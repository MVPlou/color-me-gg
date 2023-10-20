import { Grid, Flex, Text, Button } from '@chakra-ui/react';

export default function PopularColoringPages({ coloringPages }) {
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
        Trending Coloring Pages
      </Text>

      <Grid
        templateColumns={{ base: 'repeat(2, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(5, 2fr)' }}
        gap={4}
        width="100%"
        bg="cyan.200" // Added cyan background color
        p={4} // Padding to give some space inside the grid
        borderRadius="md" // Optional: Rounded corners for the grid
      >
        {coloringPages.map((page, index) => (
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

      <Button 
        mt={6}
        mb={6} // Margin top for spacing between grid and button
        colorScheme="cyan" // Chakra UI color scheme for the button
        size="lg" // Button size
      >
        Show More
      </Button>
    </Flex>
  );
}




