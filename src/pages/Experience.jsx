import { Box, Heading, VStack, Text, useBreakpointValue } from '@chakra-ui/react';

const Experience = () => {
  const experiences = [
    {
      year: '2023',
      position: 'Développeur Front-End',
      company: 'Entreprise XYZ',
      description: 'Développement de l\'interface utilisateur pour des applications web.',
    },
    {
      year: '2022',
      position: 'Stagiaire Développeur Web',
      company: 'Startup ABC',
      description: 'Assistance dans le développement d\'applications web et maintenance des systèmes existants.',
    },
    {
      year: '2021',
      position: 'Assistant Technique',
      company: 'Société DEF',
      description: 'Support technique et assistance dans la mise en œuvre des systèmes informatiques.',
    },
  ];

 
  const isMobile = useBreakpointValue({ base: true, md: false }); //verification taille d'ecran comme dans MUI

  return (
    <Box p={8} minH="100vh" bg="gray.900" color="white">
      <Heading as="h1" size="xl" mb={6} textAlign="center">
        Mon Expérience
      </Heading>

      <VStack spacing={4} align="stretch">
        {experiences.map((experience, index) => (
          <Box
            key={index}
            p={4}
            borderWidth="1px"
            borderRadius="lg"
            bg="gray.800"
            shadow="md"
            width="100%"
            textAlign={isMobile ? 'left' : 'center'} >
            <Text fontWeight="bold" fontSize="lg" color="teal.300">{experience.year}</Text>
            <Text fontSize="lg" fontWeight="bold">{experience.position}</Text>
            <Text>{experience.company}</Text>
            <Text mt={2}>{experience.description}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Experience;
