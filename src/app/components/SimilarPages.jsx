// components/SimilarPages.js
import { Box, Text, Grid, Image } from "@chakra-ui/react";

function SimilarPages() {
  const similarPagesData = [
    { name: 'Car', image: 'https://media.discordapp.net/attachments/1140603554369912932/1158187497348681748/mvplou_police_car_coloring_pages_32dcc634-6567-446f-8f83-4dce680f1a4f.png?ex=651ea169&is=651d4fe9&hm=25f76f61b12c151e83201674238bbf1301edbd9db306c082168a34e5dbd0275b&=&width=1228&height=1228' },
    { name: 'Truck', image: 'https://media.discordapp.net/attachments/1140603554369912932/1158187497348681748/mvplou_police_car_coloring_pages_32dcc634-6567-446f-8f83-4dce680f1a4f.png?ex=651ea169&is=651d4fe9&hm=25f76f61b12c151e83201674238bbf1301edbd9db306c082168a34e5dbd0275b&=&width=1228&height=1228' },
    { name: 'Car', image: 'https://media.discordapp.net/attachments/1140603554369912932/1158187497348681748/mvplou_police_car_coloring_pages_32dcc634-6567-446f-8f83-4dce680f1a4f.png?ex=651ea169&is=651d4fe9&hm=25f76f61b12c151e83201674238bbf1301edbd9db306c082168a34e5dbd0275b&=&width=1228&height=1228' },
    { name: 'Truck', image: 'https://media.discordapp.net/attachments/1140603554369912932/1158187497348681748/mvplou_police_car_coloring_pages_32dcc634-6567-446f-8f83-4dce680f1a4f.png?ex=651ea169&is=651d4fe9&hm=25f76f61b12c151e83201674238bbf1301edbd9db306c082168a34e5dbd0275b&=&width=1228&height=1228' },
    // ... add more similar pages as needed
  ];

  return (
    <Box mt={6}>
      <Text fontSize={{ base: 'xl', sm: '2xl', md: '3xl', lg: '4xl' }}
        fontFamily="monospace"
        fontWeight="bold" 
        textAlign="center" 
        mb={2}
        mt={2}
        p={4}
      >Similar Pages</Text>
      <Grid
      bg="cyan.200"
      p={4} // Padding to give some space inside the grid
      borderRadius="md" // Optional: Rounded corners for the grid
      maxW='930px'
      justifyContent="center"
          alignItems="center"
        templateColumns={{
          base: 'repeat(1, 1fr)', 
          sm: 'repeat(2, 1fr)',  
          md: 'repeat(3, 1fr)',  
          lg: 'repeat(4, 1fr)'   
        }}
        gap={4}
      >
        {similarPagesData.map((page, index) => (
          <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" maxW="200px"> {/* Adjusted width here */}
            <Image src={page.image} alt={page.name} boxSize={{ base: '100%', md: '200px' }} objectFit="cover" />
            <Box p="2">
              <Text>{page.name}</Text>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}

export default SimilarPages;