import { Grid, Flex, Text, Box, Button } from '@chakra-ui/react';
import { useState } from 'react';

interface Category {
  id: number;
  name: string;
  count: number; // Added a count property for the number of coloring pages in each category
}

interface CategoriesComponentProps {
  categories: Category[];
}

const CategoriesComponent: React.FC<CategoriesComponentProps> = ({ categories }) => {
  // State to handle the number of items displayed
  const [itemsToShow, setItemsToShow] = useState(40);

  // Handle the Show More click
  const handleShowMore = () => {
    setItemsToShow(itemsToShow + 30);
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
        Categories
      </Text>

      <Grid
        templateColumns={{ base: 'repeat(2, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(5, 1fr)' }}
        gap={4}
        width="100%"
        p={4}
        borderRadius="md"
        bg="cyan.200"
        boxShadow='dark-lg'
      >
        {categories.slice(0, itemsToShow).map((category) => (
          <Flex
            key={category.id}
            direction="column"
            alignItems="center"
            width={{ base: '180px', sm: '180px', md: '140px', lg: '160px' }}
            height={{ base: '220px', sm: '220px', md: '180px', lg: '200px' }}
            bg="white"
            borderRadius="xl"
            boxShadow='lg'
            padding={3} // Added padding to give space between the image and text
          >
            <Box
              width="100%"
              height="80%" // Adjust the height to give space for the text below
              bg="white" // Placeholder background for the image
              mb={2}
            >
              {/* This is a placeholder box for the image. You can replace this with your image component */}
            </Box>
            <Text>
              {category.name} ({category.count})
            </Text>
          </Flex>
        ))}
      </Grid>
      {itemsToShow < categories.length && (
        <Button mt={6} colorScheme="cyan" onClick={handleShowMore}>
          Show More
        </Button>
      )}
    </Flex>
  );
}

export default CategoriesComponent;

