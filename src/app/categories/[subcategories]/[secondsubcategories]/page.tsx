"use client";
import { Box, Flex, Container } from '@chakra-ui/react';
import SearchFeature from '../../../components/SearchFeature';
import CategoriesComponent from '../../../components/CategoriesComponent';
import { useState, useEffect } from 'react';
import { supabase } from '../../../../lib/supabaseClient';  // Ensure the path is correct
import { Spinner } from '@chakra-ui/react';
import { useParams } from "next/navigation";

const SecondSubCategories = () => {
  const [secondSubCategories, setSecondSubCategories] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams(); // Using useParams hook

  useEffect(() => {
    // Convert params to string or handle the undefined case
    const subParentId = params.secondSubCategoryId as string; // Use the correct param key here

    if (!subParentId) return; // if subParentId is undefined, don't fetch

 
    fetchSecondSubcategories(subParentId).finally(() => setIsLoading(false));
  }, [params.secondsubcategory]); // Dependency array on the specific param key for second-level subcategories

  async function fetchSecondSubcategories(subParentId: string) {
    const { data, error } = await supabase
      .from('categories') // This might be a different table or query if it's for second-level subcategories
      .select('*')
      .eq('parent_id', subParentId) // Ensure this is the correct column for second-level subcategories
      .order('name', { ascending: true });

    if (error) {
      console.error("Error fetching second level subcategories:", error.message);
    } else {
      setSecondSubCategories(data);
    }
  }

  
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
            <CategoriesComponent categories={secondSubCategories} title={''} />

          )}
        </Box>
      </Container>
    </>
  );
}

export default SecondSubCategories;
