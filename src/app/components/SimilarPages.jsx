import { Box, Text, Grid, Image } from "@chakra-ui/react";
import { supabase } from '../../lib/supabaseClient'
import { useState, useEffect } from "react";

function SimilarPages({ categoryId }) {
  const [similarPagesData, setSimilarPagesData] = useState([]);

  useEffect(() => {
    async function fetchSimilarPages() {
      let { data, error } = await supabase
        .from('coloring_pages')  // Replace with your table's name
        .select('*')
        .eq('categoryId', categoryId);
      
      if (error) {
        console.error('Error fetching similar pages: ', error);
      } else if (data) {
        setSimilarPagesData(data);
      }
    }

    fetchSimilarPages();
  }, [categoryId]);

  return (
    <Box mt={6} >
      <Text fontSize={{ base: 'xl', sm: '2xl', md: '3xl', lg: '4xl' }}
        fontFamily="monospace"
        fontWeight="bold" 
        textAlign="center" 
        mb={2}
        mt={2}
        p={4}
      >Similar Pages</Text>
      <Grid
        bg="cyan.200"
        p={4}
        borderRadius="md"
        maxW='930px'
        boxShadow='dark-lg'
        justifyContent="center"
        alignItems="center"
        templateColumns={{
          base: 'repeat(2, 1fr)', 
          sm: 'repeat(2, 1fr)',  
          md: 'repeat(3, 1fr)',  
          lg: 'repeat(4, 1fr)'   
        }}
        gap={4}
      >
        {similarPagesData.map((page, index) => (
          <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" maxW="200px" boxShadow='dark-lg'>
            <Image src={page.image} alt={page.name} boxSize={{ base: '100%', md: '200px' }} objectFit="cover" />
            <Box p="2">
              <Text>{page.name}</Text>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}

export default SimilarPages;
