import {
    Skeleton,
    Flex,
    VStack,
    Box,
  } from "@chakra-ui/react";
  
  function ColoringPageSkeleton() {
    return (
      <Flex direction="column" justify="center" align="center" w="100%">
        {/* Search feature skeleton */}
        <Box w="100%" py={5} px={4}>
          <Skeleton height="40px" width="80%" />
        </Box>
  
        {/* Main content */}
        <Flex direction={{ base: "column", md: "row" }} justify="center" align="center" w="100%" p={4}>
          {/* Coloring page column skeleton */}
          <VStack align="center" spacing={5} w={{ base: "95%", md: "50%" }}>
            <Skeleton height="40px" width="80%" />
            <Skeleton height="20px" width="60%" />
            <Skeleton height="540px" width="540px" />
            <Skeleton height="40px" width="80%" />
          </VStack>
  
          {/* Ad and stats skeleton */}
          <VStack spacing={5} w="300px">
            <Skeleton height="600px" width="300px" />
            <Skeleton height="100px" width="300px" />
          </VStack>
        </Flex>
  
        {/* Similar pages skeleton */}
        <Box w="100%" py={5} px={4}>
          <Skeleton height="40px" width="80%" />
          <Skeleton height="40px" width="80%" mt={5} />
        </Box>
      </Flex>
    );
  }
  
  export default ColoringPageSkeleton;
  