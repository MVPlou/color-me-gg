'use client'
import { Grid, Box, Flex } from '@chakra-ui/react';

export default function PopularColoringPages({ coloringPages }) {
  return (
    <Grid
    templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(8, 1fr)' }} // 2 columns on base breakpoints, 5 columns on md breakpoints and above
    gap={4} // Adjust the gap between grid items as needed
  >
    {coloringPages.map((page, index) => (
      <Flex className='pt-3'
        key={index}
        width={{ base: '48px', md: '100px' }} // Adjust the width as needed on different breakpoints
        height={{ base: '68px', md: '140px' }} // Adjust the height as needed on different breakpoints
        bg="gray.200" // Example background color, adjust as needed
        alignItems="center"
        justifyContent="center"
        flexDirection="column" // Stack the children vertically
      >
        {/* Render the content of each grid item here, e.g., an image or a link to the coloring page */}
        {page.name}
      </Flex>
    ))}
  </Grid>
);
}
