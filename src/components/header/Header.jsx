import { Box, HStack, IconButton, Flex } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useDisclosure } from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll'; 

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (

      <Box as="header" bg="gray.800" color="white" py={4} position="fixed" top={0} left={0} width='100%' zIndex={10}>
        <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
          <Box>Mon Portfolio</Box>

          
          <IconButton
            aria-label="Toggle Navigation"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            colorScheme="whiteAlpha"
          />

          
          <HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
            <ScrollLink to="accueil" smooth={true} duration={500} offset={-70}>
              Accueil
            </ScrollLink>
            <ScrollLink to="projet" smooth={true} duration={500} offset={-70}>
              Projets
            </ScrollLink>
            <ScrollLink to="formation" smooth={true} duration={500} offset={-70}>
              Formation
            </ScrollLink>
            <ScrollLink to="experience" smooth={true} duration={500} offset={-70}>
              Expérience
            </ScrollLink>
            <ScrollLink to="skills" smooth={true} duration={500} offset={-70}>
              Compétences
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500} offset={-70}>
              Contact
            </ScrollLink>
          </HStack>
        </Flex>

        {/* Menu mobile */}
        {isOpen && (
          <Box mt={4} display={{ md: 'none' }}>
            <HStack spacing={4} flexDirection="column">
              <ScrollLink to="accueil" smooth={true} duration={500} offset={-70} onClick={onClose}>
                Accueil
              </ScrollLink>
              <ScrollLink to="projet" smooth={true} duration={500} offset={-70} onClick={onClose}>
                Projets
              </ScrollLink>
              <ScrollLink to="formation" smooth={true} duration={500} offset={-70} onClick={onClose}>
                Formation
              </ScrollLink>
              <ScrollLink to="experience" smooth={true} duration={500} offset={-70} onClick={onClose}>
                Expérience
              </ScrollLink>
              <ScrollLink to="skills" smooth={true} duration={500} offset={-70} onClick={onClose}>
                Compétences
              </ScrollLink>
              <ScrollLink to="contact" smooth={true} duration={500} offset={-70} onClick={onClose}>
                Contact
              </ScrollLink>
            </HStack>
          </Box>
        )}
      </Box>
   
  );
};

export default Header;
