"use client";
import {
  Flex,
  Box,
  Text,
  Image,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  VStack,
  Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton,
} from "@chakra-ui/react";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import SearchFeature from "../../components/SearchFeature";
import SimilarPages from "../../components/SimilarPages";
import { useState, useEffect } from "react";
import { supabase } from "../../../lib/supabaseClient";
import StatsCard from "../../components/StatsCard";

import { usePathname, useSearchParams, useParams } from "next/navigation";



interface ColoringPages {
  categoryId: any;
  id: string;
  title: string;
  imageurl: string;
  description: string;
  // ... any other properties you might want to add ...
};




export default function ColoringPageComponent() {
  const [coloringPages, setColoringPages] = useState<ColoringPages[]>([]);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const currentPage = coloringPages[currentPageIndex] || {};
  const { slug } = useParams(); 
  const currentPageCategoryId = currentPage.categoryId;



  useEffect(() => {
    const fetchColoringPages = async () => {
      const { data, error } = await supabase
        .from("coloring_pages")
        .select("*")
        .eq('slug', slug);
      if (error) {
        console.log("Error fetching coloring page:", error.message);
      } else if (data) {
        setColoringPages(data);
      }
    };
    if (slug) { // Ensure 'id' is available before fetching
      fetchColoringPages();
    }
  }, [slug]);

  const goToNextPage = () => {
    if (currentPageIndex < coloringPages.length - 1) {
      setCurrentPageIndex(currentPageIndex + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(currentPageIndex - 1);
    }
  };

  // Renamed to avoid naming conflict with ColoringPage interface
  const searchParams = useSearchParams();

  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Now, you can put your conditional rendering.
  // if (!coloringPages.length) return <ColoringPageSkeleton />;

  // ... Rest of the component logic and JSX ...

  return (
    <>
      <Flex
        direction="column"
        justify="center"
        align="center"
        w="100%"
        mb={2}
        pt={{ base: "100px", md: "20px" }}
      >
        <Box maxW={{ base: "100%", sm: "80%", md: "1200px" }} >
          <SearchFeature />
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
          mt={{ md: 1 }}
        >
          <VStack
            align="center"
            spacing={3} 
            bg='cyan.200'
            borderRadius="lg"
            
            p={4}
            mb={{ base: 4, md: 0 }} // Adds bottom margin on smaller screens
          >
            {/* Title Box */}
            <Box
              mb={1} // Margin bottom to give some space between the title and the image
              
            borderRadius="lg"
              textAlign="center" // Center the text
              fontSize="2xl" // Increase font size
              fontWeight="bold"
               // Make the text bold
            >
             <h1>
             {currentPage.title}
              </h1>
            </Box>

            {/* Breadcrumb */}
            <Breadcrumb mb={1}>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink href="/categories">Coloring Pages</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#">{currentPage.title}</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            {/* Coloring Page */}
            <Flex
              borderWidth="1px"
              borderRadius="lg"
              flex="1"
              justifyContent="center"
              w={{ base: "100%", md: "540px" }} 
              alignItems="center"
              bg="black"
              className="shadow-lg rounded-xl"
            >
              <VStack spacing={1} width="full" alignItems="center">
                {/* Image with onClick event to open the modal */}
                <Image
                 src={currentPage.imageurl}
                 alt={currentPage.title}
                  w={{ base: "100%", md: "540px" }}
                  h='600px'
                  borderRadius="md"
                  boxShadow='dark-lg'
                  onClick={openModal} // Add this line to open the modal when the image is clicked
                />
                <Flex
                  gap="2"
                  justifyContent="center"
                  alignItems="center"
                  width="full"
                  p={4}
                >
                <Button onClick={goToPreviousPage} leftIcon={<ArrowBackIcon />} colorScheme="teal" variant="solid"></Button>
                  <Button colorScheme="blue">Print</Button>
                  <Button colorScheme="green">Download</Button>
                  <Button onClick={goToNextPage} rightIcon={<ArrowForwardIcon />} colorScheme="teal" variant="solid"></Button>
                </Flex>
              </VStack>
            </Flex>
            <Box 
            borderWidth="1px" 
      borderRadius="lg" 
      padding="2" 
      bg='white'
      w={{ base: "100%", md: "540px" }} 
      boxShadow='dark-lg'
        p='2'>
              <h1>
              {currentPage.description}
              </h1>
              </Box>
          </VStack>
        </Flex>
        {/*Ad and Stats*/}
        <VStack
        bg='cyan.200'
        borderRadius="lg"
        p={2}
        m={2}
        >
          <StatsCard pageId={undefined} />
          {/* Ad Box */}
          <Box
            width="300px"
            height="600px"
            borderWidth="1px"
            borderRadius="lg"
            p={4}
            bg="white" // Assuming a light gray background
            // Optional: add some margin-bottom for spacing
            className="ad-box" // Optional: for custom styling or identification
            alignItems="center"
            justifyContent="center"
            display="flex"
            boxShadow='lg'
          >
            <Text>Advertisement</Text>{" "}
            {/* Placeholder text, replace with your ad content */}
          </Box>
        </VStack>
        {/* <ColoringPagesList /> */}
      </Flex>
 {/* Add the Modal component */}
 <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent maxWidth='90vh' maxHeight='90vh' >
          <ModalCloseButton />
          <ModalBody>
            <Image
              src={currentPage.imageurl}
              alt={currentPage.title}
              width="80vh" // set width to auto
              height="80vh"
              
            />
          </ModalBody>
        </ModalContent>
      </Modal>

      {/*similar pages*/}
      <Flex
        direction="column"
        justify="center"
        align="center"
        w="100%"
        mb='200px' // Optional: Add some margin-top for spacing
        
      >
        <SimilarPages categoryId={currentPageCategoryId} />

      </Flex>
    </>
  );
}
