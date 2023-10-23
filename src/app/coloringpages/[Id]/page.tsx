"use client";
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
  Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton,
} from "@chakra-ui/react";
import {
  FaThumbsUp,
  FaShare,
  FaEye,
  FaDownload,
  FaPrint,
} from "react-icons/fa";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import SearchFeature from "../../components/SearchFeature";
import SimilarPages from "../../components/SimilarPages";
import { useState, useEffect } from "react";
import { supabase } from "../../../lib/supabaseClient";
import StatsCard from "../../components/StatsCard";
import DescriptionBox from "../../components/DescriptionBox";
import ColoringPagesList from "../../components/ColoringPagesList";
import { usePathname, useSearchParams, useParams } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const descriptionText = `
Description of Coloring page will be displayed here.
`; // End of your demo description data.

interface ColoringPage {
  id: string;
  // ... other properties ...
}


export default function ColoringPageComponent() {
  // Renamed to avoid naming conflict with ColoringPage interface
  const searchParams = useSearchParams();
  const [coloringPages, setColoringPages] = useState<ColoringPage[]>([]);

  useEffect(() => {
    const fetchColoringPages = async () => {
      const { data, error } = await supabase.from("coloringpage").select("*");
      if (error) {
        console.log("Error fetching coloring pages:", error.message);
      } else if (data) {
        setColoringPages(data);
      }
    };
    fetchColoringPages();
  }, []);

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
        <Box maxW={{ base: "100%", sm: "80%", md: "1200px" }}>
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
            h='849px'
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
              Police Interceptor
              </h1>
            </Box>

            {/* Breadcrumb */}
            <Breadcrumb mb={1}>
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
                src="https://media.discordapp.net/attachments/1140603554369912932/1158187497348681748/mvplou_police_car_coloring_pages_32dcc634-6567-446f-8f83-4dce680f1a4f.png?ex=651ea169&is=651d4fe9&hm=25f76f61b12c151e83201674238bbf1301edbd9db306c082168a34e5dbd0275b&=&width=1228&height=1228"
                  alt="Police Transporter"
                  w={{ base: "100%", md: "540px" }}
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
              </VStack>
            </Flex>
            <DescriptionBox text={descriptionText} />
          </VStack>
        </Flex>
        {/*Ad and Stats*/}
        <VStack
        bg='cyan.200'
        borderRadius="lg"
        p={2}
        m={2}
        >
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
          <StatsCard />
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
              src="https://media.discordapp.net/attachments/1140603554369912932/1158187497348681748/mvplou_police_car_coloring_pages_32dcc634-6567-446f-8f83-4dce680f1a4f.png?ex=651ea169&is=651d4fe9&hm=25f76f61b12c151e83201674238bbf1301edbd9db306c082168a34e5dbd0275b&=&width=1228&height=1228"
              alt="Police Transporter"
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
        mt={6} // Optional: Add some margin-top for spacing
        
      >
        <SimilarPages />
      </Flex>
    </>
  );
}
