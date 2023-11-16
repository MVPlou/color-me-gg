import React, { useState, useEffect } from 'react';
import { Box, Text, SimpleGrid, Image, Skeleton, Spinner, Flex } from "@chakra-ui/react";
import { supabase } from '../../lib/supabaseClient';
import Link from 'next/link';

export default function TrendingSearchFeature() {
    const [trendingPages, setTrendingPages] = useState([]);
    const [displayLimit, setDisplayLimit] = useState(6);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Function to adjust the display limit based on screen width
        const updateDisplayLimit = () => {
            const width = window.innerWidth;
            if (width < 768) { // Assuming 768px as a breakpoint for mobile devices
                setDisplayLimit(6);
            } else {
                setDisplayLimit(15); // Default limit for larger screens
            }
        };

        window.addEventListener('resize', updateDisplayLimit);
        updateDisplayLimit(); // Call it initially

        // Fetch trending pages
        const fetchTrendingPages = async () => {
            setIsLoading(true);
            const { data, error } = await supabase
                .from('categories')
                .select('*')
                .is('parent_id', null)
                .order('name', { ascending: true })
                .limit(15);

            if (error) {
                console.error("Error fetching trending categories:", error.message);
            } else {
                setTrendingPages(data);
            }
            setIsLoading(false);
        };

        fetchTrendingPages();

        // Clean up
        return () => window.removeEventListener('resize', updateDisplayLimit);
    }, []);

    return (
        <Box 
            width="full" 
            px={4}
            transition="max-height 0.3s ease-out" // Smooth transition
        >
            <Flex justifyContent="space-between" alignItems="center" mb={4}>
                <Text fontSize="lg" fontWeight="bold" textAlign="center" justifyContent='center'>Trending Coloring Pages</Text>
                <Link href="/trending" color="blue.500"   ><Text fontSize="xs" as='u'> Show More </Text></Link> {/* Add your link here */}
            </Flex>
            {isLoading ? (
                  <Box display="flex" justifyContent="center" alignItems="center" height="200px"> {/* Set a fixed height for vertical alignment */}
                  <Spinner size="xl" />
              </Box>
            ) : (
                <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 5 }} spacing={4}>
                    {trendingPages.slice(0, displayLimit).map((page) => (
                        <Box 
                            key={page.id} 
                            p={2} 
                            boxShadow="sm" 
                            borderRadius="md"
                            height="150px" // Fixed height for image container
                            width="150px" // Fixed width for image container
                        >
                            <Image 
                                src={page.thumbnail_imageurl} 
                                alt={page.title} 
                                loading="lazy" // Lazy loading
                                h='150px'
                                fallback={<Skeleton height="150px" />} // Placeholder
                            />
                            <Text mt={2} fontSize="sm" textAlign="center">{page.title}</Text>
                        </Box>
                    ))}
                </SimpleGrid>
            )}
        </Box>
    );
}
