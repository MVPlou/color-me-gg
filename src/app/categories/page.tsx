"use client";
import { Box, Flex, Container, Text } from '@chakra-ui/react';
import SearchFeature from '../components/SearchFeature';
import CategoriesComponent from '../components/CategoriesComponent';
import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabaseClient';  // Ensure the path is correct
import { Spinner } from '@chakra-ui/react';
import Head from 'next/head';


export default function Categories() {
  const [categories, setCategories] = useState<any[]>([]); 
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoading(true);  // Start loading
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .is('parent_id', null)  // This will ensure only parent categories (with no parent_id) are fetched
        .order('name', { ascending: true });
        
    
      if (error) {
        console.error("Error fetching categories:", error.message);
      } else {
        setCategories(data);
      }
      setIsLoading(false);  // End loading
    };
    
    fetchCategories();
  }, []);

  return (
    <>
     <Head>
        <title>Categories</title>  {/* Set the page title here */}
      </Head>
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
        <Text 
        fontSize={{ base: 'xl', sm: '2xl', md: '3xl', lg: '4xl' }}
        fontFamily="monospace"
        fontWeight="bold" 
        textAlign="center" 
        mb={1}
        mt={1}
        p={1}
      >
        <h1>
        Categories
        </h1>
      </Text>
          {isLoading ? (
            <Flex justify="center" align="center" height="200px"> 
              <Spinner size="xl" />  {/* Spinner shown while loading */}
            </Flex>
          ) : (
            <CategoriesComponent categories={categories} title={''} />
          )}
        </Box>
      </Container>
    </>
  )
 }  