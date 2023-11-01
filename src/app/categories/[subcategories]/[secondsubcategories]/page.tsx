"use client";
import { Box, Flex, Container } from '@chakra-ui/react';
import SearchFeature from '../../../components/SearchFeature';
import CategoriesComponent from '../../../components/CategoriesComponent';
import { useState, useEffect } from 'react';
import { supabase } from '../../../../lib/supabaseClient';  // Ensure the path is correct
import { Spinner } from '@chakra-ui/react';
import { useParams } from "next/navigation";

export default function SecondSubCategories() {
  const [subSecondCategories, setSecondSubCategories] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { secondsubcategories } = useParams();


  useEffect(() => {
    const fetchSecondSubCategories = async () => {
      // if (!category) return; // Don't fetch if category slug is not yet available

      setIsLoading(true);
      
      // First, get the ID of the parent category with the given slug
      const { data: parentCategory } = await supabase
        .from('categories')
        .select('id')
        .eq('slug', secondsubcategories);
  
      if (parentCategory && parentCategory.length > 0) {
        const parentId = parentCategory[0].id;
  
        // Fetch sub-categories using the parent ID
        const { data, error } = await supabase
          .from('coloring_pages')
          .select('*')
          .eq('parent_id', parentId)
          .order('name', { ascending: true });
  
        if (error) {
          console.error("Error fetching sub-categories:", error.message);
        } else {
          setSecondSubCategories(data);
        }
      }
      setIsLoading(false);
    };
    
    fetchSecondSubCategories();
  }, [secondsubcategories]); 
  
  return (
    <>
      <Container pt={3} width="full" centerContent>
        <Flex
          direction="column"
          justify="center"
          align="center"
          w="100vw"
          mb={4}
          pt='20px'
        >
          <Box 
            maxW={{ base: "100%", sm: "80%", md: "1200px" }}
            mt={{ base: '70px', sm: '70px', md: '0px' }}
          >
            <SearchFeature />
          </Box>
        </Flex>
        <Box>
          {isLoading ? (
            <Flex justify="center" align="center" height="200px"> 
              <Spinner size="xl" />
            </Flex>
          ) : (
            <CategoriesComponent categories={subSecondCategories} title={''} />

          )}
        </Box>
      </Container>
    </>
  );
}
