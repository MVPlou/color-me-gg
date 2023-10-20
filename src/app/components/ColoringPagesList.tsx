// File: components/ColoringPagesList.tsx
'use client';

import { VStack, Box, Text } from "@chakra-ui/react";

export default function ColoringPagesList() {
  return (
    <VStack align="stretch" spacing={4} w="170px" overflowY="auto" maxHeight="calc(100vh - 200px)">
      {['Animals', 'Cars', 'Nature', 'Superheroes', 'Fantasy', 'Sports', 'Holidays', 'Educational', 'Cartoons', 'Others'].map((category, index) => (
        <Box key={index} borderWidth="1px" borderRadius="lg" p={4}>
          <Text fontWeight="bold">{category}</Text>
        </Box>
      ))}
    </VStack>
  );
}
