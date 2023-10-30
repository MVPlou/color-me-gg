"use client";
import { Box, Flex, Container } from '@chakra-ui/react';
import SearchFeature from '../../components/SearchFeature';
import CategoriesComponent from '../../components/CategoriesComponent';
import { useState, useEffect } from 'react';
import { supabase } from '../../../lib/supabaseClient';  // Ensure the path is correct
import { Spinner } from '@chakra-ui/react';
import { usePathname, useSearchParams, useParams } from "next/navigation";


export default function SubCatergories() {
  const [subCategories, setSubCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
    const { slug } = useParams(); 
  
  
    useEffect(() => {
      const fetchSubCategories = async () => {
        if (!slug) return; // Don't fetch if slug is not yet available
    
        setIsLoading(true);
        
        // First, get the ID of the parent category with the given slug
        const { data: parentCategory } = await supabase
          .from('categories')
          .select('id')
          .eq('slug', slug);
    
        if (parentCategory && parentCategory.length > 0) {
          const parentId = parentCategory[0].id;
    
          // Fetch sub-categories using the parent ID
          const { data, error } = await supabase
            .from('categories')
            .select('*')
            .eq('parent_id', parentId)
            .order('name', { ascending: true })
    
          if (error) {
            console.error("Error fetching sub-categories:", error.message);
          } else {
            setSubCategories(data);
          }
        }
        setIsLoading(false);
      };
      
      fetchSubCategories();
    }, [slug]);
    

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
              <Spinner size="xl" />  {/* Spinner shown while loading */}
            </Flex>
          ) : (
            <CategoriesComponent categories={subCategories} title={''} />


          )}
        </Box>
      </Container>
    </>
  );
  }  

