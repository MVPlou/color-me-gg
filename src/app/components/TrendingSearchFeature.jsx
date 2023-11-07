import { Box, Text, SimpleGrid, Image } from "@chakra-ui/react";
import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabaseClient'; // Ensure the path is correct

export default function TrendingSearchFeature() {
    const [trendingPages, setTrendingPages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Fetch trending categories on component mount
    useEffect(() => {
        const fetchTrendingPages = async () => {
            setIsLoading(true); // Start loading
            const { data, error } = await supabase
                .from('categories')
                .select('*')
                .is('parent_id', null) // Only parent categories
                .order('name', { ascending: true })
                .limit(15); // Limit the results to 15
            
            if (error) {
                console.error("Error fetching trending categories:", error.message);
            } else {
                setTrendingPages(data);
            }
            setIsLoading(false); // End loading
        };

        fetchTrendingPages();
    }, []);

    return (
      <Box width="full" px={4}>
        <Text fontSize="md" fontWeight="bold" mb={4} textAlign="center">Trending Coloring Pages</Text>
        {isLoading ? (
            <Text>Loading...</Text>
        ) : (
            <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 5 }} spacing={4}>
                {trendingPages.map((page) => (
                    <Box key={page.id} p={2} boxShadow="sm" borderRadius="md">
                        <Image src={page.thumbnail_imageurl} alt={page.title} boxSize="full" borderRadius="lg" />
                        <Text mt={2} fontSize="sm" textAlign="center">{page.title}</Text>
                    </Box>
                ))}
            </SimpleGrid>
        )}
      </Box>
    );
}
