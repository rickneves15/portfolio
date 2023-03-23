import { Avatar, Box, Flex, Heading, Icon, Link, Text } from "@chakra-ui/react";
import { AiFillApple, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";

import Wrapper from "../../Components/Wrapper";

import ProfileImage from "./../../../public/profile.png";

const Home = () => (
  <Flex justifyContent="center" alignItems="center">
    <Flex
      direction={{ base: "column", md: "row" }}
      justifyContent="flex-start"
      alignItems="center"
      gap="24"
    >
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <Box width="max-content">
          <Avatar
            width="30vh"
            height="30vh"
            name="Richard Neves"
            src={ProfileImage}
          />
        </Box>
      </motion.div>

      <motion.div
        whileInView={{ x: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <Box width="max-content">
          <Flex direction="column" gap="2">
            <Heading color="title">
              Oi, Eu sou Richard
              <motion.div
                animate={{
                  rotate: [0, 14, -8, 14, -4, 10, 0, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 1],
                  ease: "linear",
                }}
                style={{
                  display: "inline-block",
                }}
              >
                🤚
              </motion.div>
            </Heading>
            <Text color="subtitle">Sou um Desenvolvedor Full Stack.</Text>
            <Text color="secondary-text">🎓 sistemas da informação.</Text>
            <Text color="secondary-text">☕ alimentado por café.</Text>
            <Text color="secondary-text">🌎 com sede no Brasil.</Text>
            <Text color="secondary-text">📧 ricknevesbc@icloud.com.</Text>
            <Flex gap="2" pt="1">
              <Link href="https://www.linkedin.com/in/richard-neves" isExternal>
                <Icon as={AiFillLinkedin} boxSize="6" color="icon" />
              </Link>
              <Link href="https://github.com/rickneves15" isExternal>
                <Icon as={AiFillGithub} boxSize="6" color="icon" />
              </Link>
              <Link href="mailto:ricknevesbc@icloud.com" isExternal>
                <Icon as={AiFillApple} boxSize="6" color="icon" />
              </Link>
            </Flex>
          </Flex>
        </Box>
      </motion.div>
    </Flex>
  </Flex>
);

export default Wrapper({
  Component: Home,
  idName: "home",
});
