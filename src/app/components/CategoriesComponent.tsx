import { Grid, Flex, Text, Box, Button, Image } from '@chakra-ui/react';
import { useState } from 'react';
import Link from 'next/link';


interface Category {
  slug: any;
  id: number;
  name: string;
  thumbnail_imageurl?: string; // This is the URL of the image
  count: number;
}

interface CategoriesComponentProps {
  categories: Category[];
  title: string; // Add this line
}


const CategoriesComponent: React.FC<CategoriesComponentProps> = ({ categories }) => {
  // State to handle the number of items displayed
  const [itemsToShow, setItemsToShow] = useState(40);
  

  // Handle the Show More click
  const handleShowMore = () => {
    setItemsToShow(itemsToShow + 30);
  };

  return (
    <Flex direction="column" alignItems="center" width="100%" minHeight="80vh">
    <Text 
    fontSize={{ base: 'xl', sm: '2xl', md: '3xl', lg: '4xl' }}
    fontFamily="monospace"
    fontWeight="bold" 
    textAlign="center" 
    mb={2}
    mt={2}
    p={4}
>

</Text>


      <Grid
        templateColumns={{ base: 'repeat(2, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(5, 1fr)' }}
        gap={4}
        width="100%"
        p={4}
        borderRadius="md"
        bg="cyan.200"
        boxShadow='dark-lg'
  
      >
{categories.slice(0, itemsToShow).map((category) => (
  <Link key={category.id} href={`/categories/${category.slug}`} passHref>
    <Flex
     
      className='pt-3'
      direction="column"
      alignItems="center"
      width={{ base: '180px', sm: '180px', md: '140px', lg: '170px' }}
      height={{ base: '220px', sm: '220px', md: '180px', lg: '260px' }}
      
      // ... other Flex props
    >
      {category.thumbnail_imageurl && <Image src={category.thumbnail_imageurl} alt={category.name} h='300px'  borderRadius="xl"
            boxShadow='lg' mb={2} />}
      <Text>
      
      </Text>
    </Flex>
  </Link>
))}

      </Grid>
      {itemsToShow < categories.length && (
        <Button mt={6} colorScheme="cyan" onClick={handleShowMore}>
          Show More
        </Button>
      )}
    </Flex>
  );
}

export default CategoriesComponent;

