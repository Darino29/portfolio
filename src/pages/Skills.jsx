
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import SkillCard from '../components/skillCard/SkillCard';

const Skills = () => {
  const skills = [
    {
      title: 'JavaScript',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', 
    },
    {
      title: 'React',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', 
    },
    {
      title: 'Node',
      logo: 'https://nodejs.org/static/images/logo.svg', 
    },
    {
      title: 'CSS',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg', 
    },
    {
      title: 'Next',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg', 
    },

    {
        title: 'C#',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/C_Sharp_Logo_2023.svg', 
      },

      {
        title: 'Python',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg', 
      },
      {
        title: 'Java',
        logo: 'https://upload.wikimedia.org/wikipedia/fr/2/2e/Java_Logo.svg', 
      },

      {
        title: 'Symfony',
        logo: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/symfony_original_logo_icon_146327.png', 
      },
   
  ];

  return (
    <Box
    p={20}
    minH="100vh" >
      <Heading as="h2" size="xl" mb={6} color="white" textAlign='center'>
        My Skills
      </Heading>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={4}>
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Skills;
