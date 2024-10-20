import { Box, Heading, Text, Link, Stack, Flex } from '@chakra-ui/react';
import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';

import logo from '../assets/images/pdp.png';

const Contact = () => {
  return (
    <Box p={20} bg="gray.900" color="white">
      <Flex 
        direction={{ base: 'column', md: 'row' }} 
        alignItems={{ base: 'center', md: 'flex-start' }}
        justifyContent="space-between"
        wrap="wrap"
      >
        
        <Box mb={{ base: 8, md: 0 }}> 
          <img 
            src={logo} 
            alt="Logo" 
            style={{ width: '300px', height: 'auto' }} 
          />
        </Box>

      
        <Box ml={{ base: 0, md: 10 }} mb={{ base: 8, md: 0 }}> 
          <Heading as="h2" size="lg" mb={4}>
            Liens Rapides
          </Heading>
          <Stack spacing={3} align={{ base: 'center', md: 'flex-start' }}>
            <Link href="/" display="flex" alignItems="center">
              Accueil
            </Link>
            <Link href="/projet" display="flex" alignItems="center">
              Projet
            </Link>
            <Link href="/formation" display="flex" alignItems="center">
              Formation
            </Link>
            <Link href="/experience" display="flex" alignItems="center">
              Expérience
            </Link>
            <Link href="/skills" display="flex" alignItems="center">
              Compétences
            </Link>
          </Stack>
        </Box>

        
        <Box ml={{ base: 0, md: 10 }}>
          <Heading as="h2" size="lg" mb={4}>
            Contact
          </Heading>
          <Stack spacing={3} align={{ base: 'center', md: 'flex-start' }}>
            <Link href="mailto:darinolee29@gmail.com" display="flex" alignItems="center">
              <FaEnvelope style={{ marginRight: '8px' }} />
              darinolee29@gmail.com
            </Link>
            <Link href="tel:+33624931783" display="flex" alignItems="center">
              <FaPhone style={{ marginRight: '8px' }} />
              +33624931783
            </Link>
            <Link href="https://wa.me/0624931783" display="flex" alignItems="center" isExternal>
              <FaWhatsapp style={{ marginRight: '8px' }} />
              WhatsApp
            </Link>
            <Text>Adresse : Choisy-le-roi, France</Text>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Contact;
