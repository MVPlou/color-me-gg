"use client"

import { 
  Box, 
  Flex,
  Container,

} from '@chakra-ui/react';
import SearchFeature from './components/SearchFeature';
import PopularColoringPages from './components/PopularColoringPages';
import AnimalPages from './components/AnimalPages';
import GamingPages from './components/GamingPages';



export default function Home() {

  const popularPages = [
    { name: 'lion.pdf', type: 'animals' },
    { name: 'lion.pdf', type: 'animals' },
    { name: 'lion.pdf', type: 'animals' },
    { name: 'lion.pdf', type: 'animals' },
    { name: 'lion.pdf', type: 'animals' },
    { name: 'lion.pdf', type: 'animals' },
    { name: 'lion.pdf', type: 'animals' },
    { name: 'lion.pdf', type: 'animals' },
    { name: 'lion.pdf', type: 'animals' },
    { name: 'lion.pdf', type: 'animals' },
    { name: 'lion.pdf', type: 'animals' },
    { name: 'lion.pdf', type: 'animals' },
    { name: 'lion.pdf', type: 'animals' },
    { name: 'lion.pdf', type: 'animals' },
    { name: 'lion.pdf', type: 'animals' },
 
   
    // Add more popular pages as needed
  ];

  const recentlyAddedPages = [
    { name: 'car.pdf', type: 'cars' },
    { name: 'car.pdf', type: 'cars' },
    { name: 'car.pdf', type: 'cars' },
    { name: 'car.pdf', type: 'cars' },
    { name: 'car.pdf', type: 'cars' },
    { name: 'car.pdf', type: 'cars' },
    { name: 'car.pdf', type: 'cars' },
    { name: 'car.pdf', type: 'cars' },
    { name: 'car.pdf', type: 'cars' },
    { name: 'car.pdf', type: 'cars' },
    { name: 'car.pdf', type: 'cars' },
    { name: 'car.pdf', type: 'cars' },
    { name: 'car.pdf', type: 'cars' },
    { name: 'car.pdf', type: 'cars' },
    // Add more recently added pages as needed
  ];

  const seasonalPages = [
    { name: 'santa.pdf', type: 'christmas' },
    { name: 'santa.pdf', type: 'christmas' },
    { name: 'santa.pdf', type: 'christmas' },
    { name: 'santa.pdf', type: 'christmas' },
    { name: 'santa.pdf', type: 'christmas' },
    { name: 'santa.pdf', type: 'christmas' },
    { name: 'santa.pdf', type: 'christmas' },
    { name: 'santa.pdf', type: 'christmas' },
    { name: 'santa.pdf', type: 'christmas' },
    { name: 'santa.pdf', type: 'christmas' },
    { name: 'santa.pdf', type: 'christmas' },
    { name: 'santa.pdf', type: 'christmas' },
    // Add more seasonal pages as needed
  ];
  const animalPages = [
    { name: 'tiger.pdf', type: 'animals' },
    { name: 'tiger.pdf', type: 'animals' },
    { name: 'tiger.pdf', type: 'animals' },
    { name: 'tiger.pdf', type: 'animals' },
    { name: 'tiger.pdf', type: 'animals' },
    { name: 'tiger.pdf', type: 'animals' },
    { name: 'tiger.pdf', type: 'animals' },
    { name: 'tiger.pdf', type: 'animals' },
    { name: 'tiger.pdf', type: 'animals' },
    { name: 'tiger.pdf', type: 'animals' },
    { name: 'tiger.pdf', type: 'animals' },
    { name: 'tiger.pdf', type: 'animals' },
    { name: 'tiger.pdf', type: 'animals' },
    { name: 'tiger.pdf', type: 'animals' },
    { name: 'tiger.pdf', type: 'animals' },


    // Add more animal pages as needed
  ];

  const gamingPages = [
    { name: 'mario.pdf', type: 'gaming' },
    { name: 'mario.pdf', type: 'gaming' },
    { name: 'mario.pdf', type: 'gaming' },
    { name: 'mario.pdf', type: 'gaming' },
    { name: 'mario.pdf', type: 'gaming' },
    { name: 'mario.pdf', type: 'gaming' },
    { name: 'mario.pdf', type: 'gaming' },
    { name: 'mario.pdf', type: 'gaming' },
    { name: 'mario.pdf', type: 'gaming' },
    { name: 'mario.pdf', type: 'gaming' },
    { name: 'mario.pdf', type: 'gaming' },
    { name: 'mario.pdf', type: 'gaming' },
    { name: 'mario.pdf', type: 'gaming' },
    { name: 'mario.pdf', type: 'gaming' },
    { name: 'mario.pdf', type: 'gaming' },
   
    // Add more gaming pages as needed
  ];

  return (
    <>
      <Container pt={3} width="full" centerContent>
        <Flex
          direction="column"
          justify="center"
          align="center"
          w="100vw"
          mb={4}
          pt='20px'
        >
           <Box maxW={{ base: "100%", sm: "80%", md: "1200px" }}
           mt={{ base: '70px', sm: '70px', md: '0px' }}
           >
         <SearchFeature/>
        </Box>
        </Flex>
        <Box >
        <PopularColoringPages className='pt-4' coloringPages={popularPages} />
        </Box>
        <Box>
          <GamingPages coloringPages={gamingPages} />
        </Box>
        <Box>
          <AnimalPages coloringPages={animalPages}  />
        </Box>
      </Container>
    </>
  );
}






