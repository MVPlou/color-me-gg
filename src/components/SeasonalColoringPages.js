'use client'
import { Box, Button } from '@chakra-ui/react';
import Link from 'next/link';

export default function SeasonalColoringPages({ coloringPages }) {
  return (
    <Box>
      <h2>Seasonal Coloring Pages</h2>
      {coloringPages.map((page) => (
        <Box key={page.name}>
          <Link href={`/${page.type}/${page.name}`} passHref>
          <Button colorScheme='teal' variant='solid'>
    Button
  </Button>
          </Link>
          <Button
  size='md'
  height='48px'
  width='200px'
  border='2px'
  borderColor='green.500'
>
  Button
</Button>
<Button
  size='md'
  height='48px'
  width='200px'
  border='2px'
  borderColor='green.500'
>
  Button
</Button>
        </Box>
      ))}
    </Box>
  );
}
