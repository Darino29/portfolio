import { Box, Grid, Heading } from '@chakra-ui/react';
import ProjectCard from '../components/projectCard/ProjectCard';
import projet1 from '../assets/images/Projet1.png';


const Projet = () => {
  
  const projets = [
    {
      title: 'DétachezVous',
      description: 'Un site web de vente de pièce détachées',
      link: 'https://github.com/projet1',
      image: projet1, 
    },
    {
      title: 'Projet 2',
      description: 'Une brève description du projet 2',
      link: 'https://github.com/projet2',
      image: 'https://via.placeholder.com/400', 
    },
    {
      title: 'Projet 3',
      description: 'Une brève description du projet 3',
      link: 'https://github.com/projet3',
      image: 'https://via.placeholder.com/400', 
    },
    
  ];

  return (
    <Box p={8}
    minH="100vh"
    bgColor="gray.900">
      <Heading as="h1" size="xl" mb={6} textAlign="center" color="white">
        Mes Recents Projets
      </Heading>
      <Grid
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        gap={6}
        overflowY="auto"
        maxH="80vh" 
        p={4}
      >
        {projets.map((projet, index) => (
          <ProjectCard
            key={index}
            title={projet.title}
            description={projet.description}
            link={projet.link}
            image={projet.image} 
          />
        ))}
      </Grid>
    </Box>
  );
};

export default Projet;
