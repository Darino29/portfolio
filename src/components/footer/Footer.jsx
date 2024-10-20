import { Box, Text, Link, HStack } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box as="footer" bg="gray.800" color="white" py={4}  width="100%">
      <HStack justify="center" spacing={8} mb={4}>
        <Link href="https://github.com/ton-github" isExternal>
          <FaGithub size="24px" />
        </Link>
        <Link href="https://linkedin.com/in/ton-linkedin" isExternal>
          <FaLinkedin size="24px" />
        </Link>
        <Link href="https://twitter.com/ton-twitter" isExternal>
          <FaTwitter size="24px" />
        </Link>
      </HStack>
      <Text textAlign="center" fontSize="sm">
        © {new Date().getFullYear()} Darino Herinjanahary. Tous droits réservés.
      </Text>
    </Box>
  );
};

export default Footer;
