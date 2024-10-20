import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import {  Text, Link, Image, Stack, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, Card, CardBody } from '@chakra-ui/react';

const ProjectCard = ({ title, description, link, image }) => {
  const [style, api] = useSpring(() => ({
    opacity: 0,
    transform: 'translateY(20px)',
  }));
  
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    api.start({ opacity: 1, transform: 'translateY(0)', config: { tension: 300, friction: 20 } });
  }, [api]);

  return (
    <animated.div style={style}>
      <Card
        className="project-card"
        bg="gray.800" 
        borderRadius="8px"
        boxShadow="lg"
        transition="transform 0.3s"
        _hover={{ transform: 'translateY(-5px)', boxShadow: 'xl' }}
      >
        <CardBody>
          {image && ( // Affiche l'image si elle est fournie
            <Image 
              src={image} 
              alt={title} 
              borderRadius="8px" 
              mb={3} 
              boxSize="100%" // Prend toute la largeur de la carte
              maxH="200px" // Hauteur maximale pour éviter d'être trop grand
              objectFit="cover" // S'assure que l'image couvre l'espace disponible
              onClick={() => setIsOpen(true)} // Ouvre le modal sur clic
              cursor="pointer" 
            />
          )}
          <Stack spacing={2}>
            <Text fontSize="xl" fontWeight="bold" color="white">
              {title}
            </Text>
            <Text color="gray.300">{description}</Text>
            <Link href={link} target="_blank" rel="noopener noreferrer" color="teal.300" mt={2} display="inline-block">
              Voir le projet
            </Link>
          </Stack>
        </CardBody>
      </Card>

      {/* Modal*/}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody display="flex" justifyContent="center" alignItems="center">
            <Image src={image} alt={title} boxSize="100%" objectFit="contain" />
          </ModalBody>
        </ModalContent>
      </Modal>
    </animated.div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string, // Ajout de l'image en prop
};

export default ProjectCard;
