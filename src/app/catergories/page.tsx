"use client"
import { 
  Box, 
  Flex,
  Container,
} from '@chakra-ui/react';
import SearchFeature from '../components/SearchFeature';
import CategoriesComponent from '../components/CatergoriesComponent';



export default function Categories() {
  const mockCategoryList = [
    { id: 1, name: "Animals", count: 57 },
    { id: 2, name: "Cars", count: 34 },
    { id: 3, name: "Superheroes", count: 23 },
    { id: 4, name: "Nature", count: 45 },
    { id: 5, name: "Flowers", count: 89 },
    { id: 6, name: "Buildings", count: 120 },
    { id: 7, name: "Landscapes", count: 213 },
    { id: 8, name: "Dinosaurs", count: 145 },
    { id: 9, name: "Sea Creatures", count: 390 },
    { id: 10, name: "Birds", count: 278 },
    { id: 11, name: "Butterflies", count: 321 },
    { id: 12, name: "Mythical Creatures", count: 156 },
    { id: 13, name: "Fruits", count: 432 },
    { id: 14, name: "Vegetables", count: 289 },
    { id: 15, name: "Farm Animals", count: 375 },
    { id: 16, name: "Space", count: 412 },
    { id: 17, name: "Planets", count: 245 },
    { id: 18, name: "Insects", count: 78 },
    { id: 19, name: "Trees", count: 192 },
    { id: 20, name: "Celebrities", count: 223 },
    { id: 21, name: "Cartoons", count: 332 },
    { id: 22, name: "Anime", count: 418 },
    { id: 23, name: "Mandalas", count: 134 },
    { id: 24, name: "Patterns", count: 489 },
    { id: 25, name: "Abstract", count: 256 },
    { id: 26, name: "Famous Paintings", count: 315 },
    { id: 27, name: "Sports", count: 172 },
    { id: 28, name: "Fairy Tales", count: 394 },
    { id: 29, name: "Toys", count: 358 },
    { id: 30, name: "Trains", count: 99 },
    { id: 31, name: "Airplanes", count: 123 },
    { id: 32, name: "Beaches", count: 298 },
    { id: 33, name: "Mountains", count: 276 },
    { id: 34, name: "Deserts", count: 214 },
    { id: 35, name: "Rivers", count: 302 },
    { id: 36, name: "Lakes", count: 165 },
    { id: 37, name: "Forests", count: 389 },
    { id: 38, name: "Cities", count: 428 },
    { id: 39, name: "Villages", count: 215 },
    { id: 40, name: "Winter", count: 345 },
    { id: 41, name: "Summer", count: 498 },
    { id: 42, name: "Autumn", count: 123 },
    { id: 43, name: "Spring", count: 394 },
    { id: 44, name: "Rain", count: 263 },
    { id: 45, name: "Snow", count: 178 },
    { id: 46, name: "Holidays", count: 189 },
    { id: 47, name: "Festivals", count: 309 },
    { id: 48, name: "Music", count: 479 },
    { id: 49, name: "Dance", count: 138 },
    { id: 50, name: "Robots", count: 224 },
    // ... Add more categories as needed
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
        <CategoriesComponent  categories={mockCategoryList} />
        </Box>
        {/* You can add more sections similar to Home if needed */}
      </Container>
    </>
  );
}
