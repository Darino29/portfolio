import { Box, Button, Heading, Text, VStack, Image, Stack } from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';
import pdp from '../assets/images/pdp.png';
import cv from '../assets/cv/cv.pdf';
import '../styles/animation.css';


const Accueil = () => {
  return (
    <Box
      p={8}
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgColor="gray.900"
    >
      
      <Stack
        spacing={8}
        align="center"
        justify="space-between"
        w="100%"
        direction={{ base: 'column-reverse', md: 'row' }}
      >
        
        <VStack align={{ base: 'center', md: 'start' }} spacing={6} maxW={{ base: '100%', md: '50%' }} >
          <Heading as="h1" size="2xl" color="teal.300" textAlign={{ base: 'center', md: 'left' }} className='reveal'>
          Darino Lee Seing Herinjanahary
          </Heading>
          <Text fontSize="lg" color="gray.300" textAlign={{base: 'center',md:'left'}} className='bounce-in-left' >
          Développeur Web & Logiciel | 24 ans
          </Text>
          <Text fontSize="sm" color="gray.100" textAlign={{ base: 'center', md: 'left' }} className='bounce-in-left' >

            Je suis un développeur passionné, animé par la création d&apos;expériences web interactives et modernes. 
            J&apos;aime explorer la frontière où l&apos;art rencontre la technologie, où quelques lignes de code peuvent donner vie à des idées uniques.

            Pour moi, le développement n&apos;est pas seulement une affaire de technique, c&apos;est une forme d&apos;expression personnelle. Chaque projet sur lequel je travaille reflète une partie de moi-même, une vision que je partage avec le monde à travers le prisme du code.
          </Text>
          <Button
            as="a"
            href={cv}
            download
            colorScheme="teal"
            size="lg"
            variant="solid"
            className='bounce2'
          >
            <DownloadIcon />
            Télécharger mon CV
          </Button>
        </VStack>

        {/* PDP (Photo de profil) */}
        <Image
          src={pdp}
          alt="Photo de Darino"
          boxSize={{ base: '200px', md: '400px' }}
          borderRadius={{base:"full", md: "none"}}
          objectFit="cover"
          border={{base:'5px solid teal',md: 'none'}}
          className='grow'
          
        />
      </Stack>
    </Box>
  );
};

export default Accueil;
