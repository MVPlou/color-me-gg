'use client'
import {
  Flex,
  Box,
  Text,
  IconButton,
  Icon,
  Image,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  VStack,
} from "@chakra-ui/react";
import {
  FaThumbsUp,
  FaShare,
  FaEye,
  FaDownload,
  FaPrint,
} from "react-icons/fa";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import SearchFeature from '../../components/SearchFeature'
import SimilarPages from '../../components/SimilarPages'
import { useState, useEffect } from 'react';
import { supabase } from '../../../lib/supabaseClient';
import { usePathname, useSearchParams, useParams } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';


export default function ColoringPage() {
  const searchParams = useSearchParams()
  const [coloringPages, setColoringPages] = useState([])

  useEffect(() => {
    const fetchColoringPages = async () => {
      const { data, error } = await supabase.from('coloringpage').select('*')
      if (error) console.log('Error fetching coloring pages:', error.message)
      else setColoringPages(data)
    }
    fetchColoringPages()
  }, [])



  return (
    <>
      <Flex
        direction="column"
        justify="center"
        align="center"
        w="100%"
        mb={4}
        pt={{ base: "100px", md: "20px" }}
      >
        <Box maxW={{ base: "100%", sm: "80%", md: "1200px" }}>
         <SearchFeature/>
        </Box>
      </Flex>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="center"
        align="center"
        p={4}
        w="100%" // Changed from 100vw to 100%
      >
        {/* Coloring Page Column */}
        <Flex
          direction="column"
          align="center"
          maxW={{ base: "95%", md: "50%", sm: "20%" }}
          mt={{ md: 4 }}
        >
          {/* Title Box */}
          <Box
            mb={4} // Margin bottom to give some space between the title and the image
            textAlign="center" // Center the text
            fontSize="2xl" // Increase font size
            fontWeight="bold" // Make the text bold
          >
            <h1></h1>
          </Box>

          {/* Breadcrumb */}
          <Breadcrumb mb={4} start="left">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Coloring Pages</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">Police Interceptor</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          {/* Coloring Page */}
          <Box
            borderWidth="1px"
            borderRadius="lg"
            flex="1"
            justify="center"
            align="center"
            bg="black"
            className="shadow-lg rounded-xl"
          >
            <Image
              src="https://media.discordapp.net/attachments/1140603554369912932/1158187497348681748/mvplou_police_car_coloring_pages_32dcc634-6567-446f-8f83-4dce680f1a4f.png?ex=651ea169&is=651d4fe9&hm=25f76f61b12c151e83201674238bbf1301edbd9db306c082168a34e5dbd0275b&=&width=1228&height=1228"
              alt="Dan Abramov"
              w={{ base: "100%", md: "500px" }} // Made the width responsive
              borderRadius="md"
            />
            <Flex
              gap="2"
              justifyContent="center"
              alignItems="center"
              width="full"
              p={4}
            >
              <Button
                leftIcon={<ArrowBackIcon />}
                colorScheme="teal"
                variant="solid"
              ></Button>
              <Button colorScheme="blue">Print</Button>
              <Button colorScheme="green">Download</Button>
              <Button
                rightIcon={<ArrowForwardIcon />}
                colorScheme="teal"
                variant="solid"
              ></Button>
            </Flex>
          </Box>
        </Flex>

<VStack >  {/* Wrap the ad box and Metrics Box with VStack */}
  {/* Metrics Box */}
        <Box
        width="300px"
        height="250px"
        borderWidth="1px"
          borderRadius="lg"
          bg="gray.200"
          p={4}
          className="shadow-lg"
          alignItems="center"
    justifyContent="center"
    display="flex"
        >
          <Text>Description / Stats</Text> 
          {/* <Flex align="center" mb={2}>
            <Icon as={FaEye} mr={2} />
            <Text>Views: 123</Text>
          </Flex>
          <Flex align="center" mb={2}>
            <Icon as={FaDownload} mr={2} />
            <Text>Downloads: 45</Text>
          </Flex>
          <Flex align="center" mb={2}>
            <Icon as={FaPrint} mr={2} />
            <Text>Prints: 30</Text>
          </Flex>
          <Flex align="center" mb={2}>
            <Icon as={FaThumbsUp} mr={2} />
            <Text>Likes: 30</Text>
          </Flex>
          <Flex gap="2">
            <IconButton
              aria-label="Like"
              icon={<FaThumbsUp />}
              className="mr-2"
            />
            <IconButton aria-label="Share" icon={<FaShare />} />
          </Flex> */}
        </Box>
         {/* Ad Box */}
  <Box
    width="300px"
    height="250px"
    borderWidth="1px"
    borderRadius="lg"
    m='10px'
    bg="gray.200"  // Assuming a light gray background
      // Optional: add some margin-bottom for spacing
    className="ad-box"  // Optional: for custom styling or identification
    alignItems="center"
    justifyContent="center"
    display="flex"
  >
    <Text>Advertisement</Text>  {/* Placeholder text, replace with your ad content */}
  </Box>
</VStack>



      </Flex>
      <Flex
        direction="column"
        justify="center"
        align="center"
        w="100%"
        mt={6} // Optional: Add some margin-top for spacing
      >
        <SimilarPages />
      </Flex>
    </>
  );
}