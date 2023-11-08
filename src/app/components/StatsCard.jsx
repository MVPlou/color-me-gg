import { Box, Text, Button, Link } from "@chakra-ui/react";
import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabaseClient'; 


const StatsCard = ({ pageId }) => {
  const [likes, setLikes] = useState(0);

  // Fetch likes when component mounts
  useEffect(() => {
    const fetchLikes = async () => {
      const { data, error } = await supabase
        .from('likes')
        .select('id')
        .eq('coloringpageid', pageId); // Replace 'page_id' with the actual column name in your 'likes' table

      if (error) {
        console.error('Error fetching likes', error);
      } else {
        setLikes(data.length); // Assuming each row in 'likes' represents a like
      }
    };

    fetchLikes();
  }, [pageId]); 

  return (
    <Box 
      borderWidth="1px" 
      borderRadius="lg" 
      padding="2" 
      bg='white'
      w="300px"
      boxShadow='dark-lg'
        p='2'
    >
      <Text 
        fontWeight="bold" 
        marginBottom="2" 
        borderBottomWidth="1px"
        pb="2"
       
      >
        Category: 
        <Text 
          as="span" 
          fontWeight="normal" 
          display="inline-block" 
          ml="2"
          
          borderBottomWidth="1px"
        >
          Cars
        </Text>
      </Text>

      <Text 
        fontWeight="bold" 
        marginBottom="2" 
        borderBottomWidth="1px"
        pb="2"
      >
        Prints: 
        <Text 
          as="span" 
          fontWeight="normal" 
          display="inline-block" 
          ml="2"
          borderBottomWidth="1px"
        >
          400
        </Text>
      </Text>

      <Text 
        fontWeight="bold" 
        marginBottom="2" 
        borderBottomWidth="1px"
        pb="2"
      >
       Likes: 
        <Text 
          as="span" 
          fontWeight="normal" 
          display="inline-block" 
          ml="2"
          borderBottomWidth="1px"
        >
          {likes} {/* Dynamic likes count */}
        </Text>
      </Text>

      <Text 
        fontWeight="bold" 
        marginBottom="2" 
        borderBottomWidth="1px"
        pb="2"
      >
        Added: 
        <Text 
          as="span" 
          fontWeight="normal" 
          display="inline-block" 
          ml="2"
        >
          October 11, 2023
        </Text>
      </Text>

      <Text 
        fontWeight="bold" 
        marginBottom="2" 
        
        pb="2"
      >
        Added by  
        <Text 
          as="span" 
          fontWeight="normal" 
          display="inline-block" 
          ml="2"
          
        >
          ColorMe.GG
        </Text>
      </Text>
    </Box>
  );
}

export default StatsCard;
