import { Box, Flex, Grid, Text, Button, Container, Spinner, Image } from '@chakra-ui/react';

import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabaseClient'; // Ensure the path is correct
import Link from 'next/link';

export default function PopularColoringPages({ coloringPages }) {
  // State to handle categories
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // State to handle the number of coloring pages displayed
  const [itemsToShow, setItemsToShow] = useState(10); // Default to show 20 items

  // Fetch categories on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoading(true); // Start loading
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .is('parent_id', null) // Only parent categories
        .order('name', { ascending: true });
      
      if (error) {
        console.error("Error fetching categories:", error.message);
      } else {
        setCategories(data);
      }
      setIsLoading(false); // End loading
    };

    fetchCategories();
  }, []);

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
    Trending Coloring Pages
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
        {categories.slice(0, itemsToShow).map((category) => (
  <Link key={category.id} href={`/categories/${category.slug}`} passHref>
    <Flex
     
      className='pt-3'
      direction="column"
      alignItems="center"
      width={{ base: '180px', sm: '180px', md: '140px', lg: '170px' }}
      height={{ base: '220px', sm: '220px', md: '180px', lg: '260px' }}
      
      // ... other Flex props
    >
      {category.thumbnail_imageurl && <Image src={category.thumbnail_imageurl} alt={category.name} h='300px'  borderRadius="xl"
            boxShadow='lg' mb={2} />}
      <Text>
        {category.name} ({category.count})
      </Text>
    </Flex>
  </Link>
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




