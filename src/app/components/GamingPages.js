import { Box, Flex, Grid, Text, Button, Image, Skeleton } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabaseClient';
import Link from 'next/link';

export default function PopularColoringPages({ coloringPages }) {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [itemsToShow, setItemsToShow] = useState(10);

  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .is('parent_id', null)
        .order('name', { ascending: true });
      
      if (error) {
        console.error("Error fetching categories:", error.message);
      } else {
        setCategories(data);
      }
      setIsLoading(false);
    };

    fetchCategories();
  }, []);

  const handleShowMore = () => {
    setItemsToShow(itemsToShow + 10);
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
        {Array.from({ length: itemsToShow }).map((_, index) => {
          const category = categories[index];
          return (
            <Link key={category?.id || index} href={`/categories/${category?.slug}`} passHref>
              <Flex
                direction="column"
                alignItems="center"
                justifyContent="center"
                width={{ base: '200px', sm: '200px', md: '170px', lg: '170px' }}
                height={{ base: '230px', sm: '230px', md: '230px', lg: '230px' }}
                bg="gray.100" // Background color for the Flex container
                borderRadius="md" // Optional: Rounded corners for the Flex container
                boxShadow='md' // Optional: Shadow for the Flex container
                className='pt-3' // Class name for styling
              >
                <Skeleton isLoaded={!isLoading && !!category}>
                  <Box 
                    w='full'
                    borderRadius="xl" 
                    boxShadow='lg' 
                    mb={2} 
                    bg="gray.200"
                    overflow="hidden"
                  >
                    {category?.thumbnail_imageurl && (
                      <Image 
                        src={category.thumbnail_imageurl} 
                        alt={category?.name || 'Category'} 
                        h='240px'
                        w='full'
                        
                      />
                    )}
                  </Box>
                </Skeleton>
              </Flex>
              <Text p={2} >
                  {category ? `${category.name} (${category.count})` : 'Loading...'}
                </Text>
            </Link>
          );
        })}
      </Grid>

      {itemsToShow < (coloringPages?.length || 0) && (
        <Button 
          mt={6}
          mb={6}
          colorScheme="cyan"
          size="lg"
          onClick={handleShowMore}
        >
          Show More
        </Button>
      )}
    </Flex>
  );
}


