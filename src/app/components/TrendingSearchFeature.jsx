import { Flex, Box, Text, VStack, Image } from "@chakra-ui/react";



export default function TrendingSearchFeature() {
    // Sample array of image URLs. Replace with actual data.
    const trendingImages = [

      // ... add more image paths
    ];
  
    return (
      <Box width="full" px={4}>
        <Text fontSize="md" fontWeight="bold" mb={4} textAlign="center">Trending Pages</Text>
        <Flex 
          overflowX="auto" 
          py={4} 
          px={2} 
          direction="row" 
          spacing={4} 

          justifyContent="flex-start"  // Adjust to flex-start to align items at the start
        >
          {trendingImages.map((imgSrc, index) => (
            <VStack 
              key={index} 
              spacing={2} 
              alignItems="center"
              borderRadius="md"
              boxShadow="0 0 0 0 #755771" // Initial box-shadow value
              transition="box-shadow 0.3s ease-in-out" // Smooth transition
              _hover={{
                boxShadow: "0 0 10px #755771, 0 0 20px #755771, 0 0 30px #755771, 0 0 40px #755771",
                zIndex: 1  // This will ensure the hovered item is on top of the other images
              }}
              minWidth="200px" // Ensure a minimum width for each item
              maxWidth="200px" // Ensure a maximum width for each item
            >
              <Box boxSize="190px" borderRadius="lg">
                <Image src={imgSrc} alt={`Trending Image ${index}`} width="200" height="150" />
              </Box>
              <Text>Image {index + 1}</Text> {/* This is the text box below the image */}
            </VStack>
            
          ))}
        </Flex>
      </Box>
    );
}