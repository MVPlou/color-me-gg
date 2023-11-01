import {
  Input,
  Box,
  InputGroup,
  InputLeftElement,
  Flex,
  Button,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import TrendingSearchFeature from '../components/TrendingSearchFeature'
import { useState, forwardRef, useRef, useEffect } from 'react';
import SearchResults from '../components/SearchResults'
import { supabase } from '../../lib/supabaseClient';
import Link from 'next/link';


const SearchFeature = forwardRef((props, ref) => {
  const inputWidth = { base: '100vw', md: '905px' };
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const [inputValue, setInputValue] = useState('');
  const [showTrending, setShowTrending] = useState(true);
  const [searchResults, setSearchResults] = useState([]);

  const fetchSearchResults = async (query) => {
    const { data, error } = await supabase
      .from('coloring_pages')
      .select('*')
      .ilike('title', `%${query}%`);
    
    if (error) {
      console.error("Error fetching search results:", error.message);
      return [];
    }
    return data;
  }
  


  const handleInputChange = async (event) => {
    setInputValue(event.target.value);
    
    if (event.target.value) {
      const results = await fetchSearchResults(event.target.value);
      setSearchResults(results);
      setShowTrending(false);
    } else {
      setSearchResults([]);
      setShowTrending(true);
    }
  };
  

  const handleInputFocus = () => {
    setIsOpen(true);
  };

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  SearchFeature.displayName = 'SearchFeature';  // Add this line

  console.log("searchResults in Parent Component:", searchResults);

  return (
    <Box width="full" px={4} ref={containerRef} position='relative'  zIndex="1000" >
      <InputGroup size="lg" mb={4}>
      <InputLeftElement>
        <SearchIcon color="gray.500" />  {/* Nest SearchIcon between opening and closing tags */}
      </InputLeftElement>
        <Input
          ref={ref}
          placeholder="Search for coloring pages..."
          py={6}
          fontSize="xl"
          w={inputWidth}
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          bg='gray.200'
        />
      </InputGroup>
      {isOpen && (
        <Box
          w={inputWidth}
          h='80vh'
          bg='gray.100'
         
          p={4}
          borderRadius="md"
          position="absolute"  // This will position the box absolutely
          top="60px"  // Adjust this value to position the box below the input field
          zIndex="1000"
          boxShadow='dark-lg'
        >
          {showTrending ? (
    <TrendingSearchFeature />
  ) : (
    <SearchResults results={searchResults} query={inputValue} />
    )}
          <Flex
            direction="row"
            overflowX={{ base: "auto", md: "visible" }}
            py={2}
            mb={4}
            maxWidth={{ base: "100%", md: "930px" }}
            justifyContent="center"
            alignItems="center"
          >
            {["Halloween", "Animals", "Disney", "Kids", "Adults", "Christmas", "Valentines", "Adults", "Christmas", "Valentines"].map((category, index) => (
              <Button
                key={index}
                mt={3}
                mr={2}
                variant='solid'
                colorScheme="cyan"
                px={3}
                fontSize="xs"
                minWidth="auto"
                maxWidth="150px"
                boxShadow='lg'
              >
                {category}
              </Button>
            ))}
          </Flex>
        </Box>
      )}
      <Flex
        direction="row"
        overflowX={{ base: "auto", md: "visible" }}
        py={2}
        mb={4}
        maxWidth={{ base: "100%", md: "930px" }}
        justifyContent="center"
        css={{
          scrollbarWidth: { base: 'thin', md: 'none' },
          scrollbarColor: 'rgba(155, 155, 155, 0.7) transparent',
          '&::-webkit-scrollbar': {
            width: '6px',
            height: '6px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(155, 155, 155, 0.7)',
          },
        }}
      >
       {["Halloween", "Animals", "Disney", "Kids", "Adults", "Christmas", "Valentines" ].map((category, index) => (
  <Link key={index} href={`/categories/${category.toLowerCase()}`} passHref>
    <Button  mr={2} px={3} fontSize="xs" minWidth="auto" maxWidth="150px" variant='solid' colorScheme="cyan" boxShadow='lg'>
      {category}
    </Button>
  </Link>
))}
      </Flex>
    </Box>
  );
});

export default SearchFeature;
