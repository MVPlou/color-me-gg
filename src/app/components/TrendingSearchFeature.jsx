import { Flex, Box, Text, VStack } from "@chakra-ui/react";



export default function TrendingSearchFeature() {
    // Sample array of image URLs. Replace with actual data.
    const trendingImages = [
      '/path/to/image1.jpg',
      '/path/to/image2.jpg',
      '/path/to/image1.jpg',
      '/path/to/image2.jpg',
      '/path/to/image2.jpg',
      

      // ... add more image paths
    ];
  
    return (
      <Box width="full" px={4}>
        <Text fontSize="2xl" fontWeight="bold" mb={4} textAlign="center">Trending Pages</Text>
        <Flex 
          overflowX="auto" 
          py={4} 
          px={2} 
          direction="row" 
          spacing={4} 
          justifyContent="center" // Horizontally center the boxes
        >
          {trendingImages.map((imgSrc, index) => (
            <VStack key={index} spacing={2} alignItems="center">
              <Box boxSize="170px">
                <img src={imgSrc} alt={`Trending Image ${index}`} width="200" height="150" />
              </Box>
              <Text>Image {index + 1}</Text> {/* This is the text box below the image */}
            </VStack>
            
          ))}
        </Flex>
      </Box>
    );
}