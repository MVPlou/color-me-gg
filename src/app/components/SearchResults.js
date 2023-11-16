import { Box, Heading, SimpleGrid, Image, AspectRatio, Flex, VStack } from "@chakra-ui/react";

function SearchResults({ results, query }) {
  return (
    <Box width="full" px={4}>
      <Heading as="h3" textAlign="center" mt={3} size="md" mb={4}>
        Search Results for {query ? `"${query}"` : ""}
      </Heading>

      <Flex
        overflowX="auto"
        py={4}
        px={2}
        direction="row"
        spacing={4}
        justifyContent="flex-start"
        css={{
          '&::-webkit-scrollbar': {
            height: '8px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#888',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: '#f1f1f1',
          },
        }}
      >
        {results.length > 0 ? (
          results.map((coloringItem) => (
            <VStack
              key={coloringItem.id}
              spacing={1}
              alignItems="center"
              borderRadius='12px'
              boxShadow="0 0 0 0 #000000"
              _hover={{
                boxShadow: '0 0 0 1px #000000',
              }}
            >
              <AspectRatio ratio={1} width="210px">
                <Image src={coloringItem.imageurl ? coloringItem.imageurl : "https://via.placeholder.com/100"} alt={coloringItem.title} w="210px" h='210px' objectFit="cover" borderRadius="8px" p={1} />
              </AspectRatio>
              <Box textAlign="center" mt={2}>
                {coloringItem.title}
              </Box>
            </VStack>
          ))
        ) : (
          <Box>No search results found</Box>
        )}
      </Flex>
    </Box>
  );
}

export default SearchResults;

