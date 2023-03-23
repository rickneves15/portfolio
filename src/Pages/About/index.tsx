import { Flex, Heading, Highlight, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

import MotionWrap from "../../Components/MotionWrap";
import Wrapper from "../../Components/Wrapper";

import FullstackDeveloperImage from "./../../../public/fullstack-developer.png";
import BackendDeveloperImage from "./../../../public/backend-developer.png";
import FrontendDeveloperImage from "./../../../public/frontend-developer.png";

interface IAbout {
  title: string;
  description: string;
  image: any;
}

const abouts: IAbout[] = [
  {
    title: "Desenvolvedor Fullstack",
    description:
      "Sou um desenvolvedor de back-end apaixonado por criar aplicações funcionais.",
    image: FullstackDeveloperImage,
  },
  {
    title: "Desenvolvedor Backend",
    description:
      "Sou um web designer apaixonado por criar aplicativos da web bonitos e funcionais.",
    image: BackendDeveloperImage,
  },
  {
    title: "Desenvolvedor Frontend",
    description:
      "Sou um desenvolvedor front-end apaixonado por criar aplicativos da Web bonitos e funcionais.",
    image: FrontendDeveloperImage,
  },
];

const About = () => (
  <MotionWrap>
    <Flex
      flex="1 1"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      width="100%"
    >
      <Heading
        size="2xl"
        fontWeight="extrabold"
        color="title"
        textTransform="capitalize"
      >
        <Highlight query="bons aplicativos" styles={{ color: "deepSkyBlue" }}>
          Eu sei que bons aplicativos
        </Highlight>
      </Heading>
      <Heading
        size="2xl"
        fontWeight="extrabold"
        color="title"
        textTransform="capitalize"
      >
        <Highlight query="bom negócio" styles={{ color: "deepSkyBlue" }}>
          significa um bom negócio
        </Highlight>
      </Heading>
      <Flex
        flexWrap="wrap"
        justifyContent="center"
        alignItems="flex-start"
        mt="8"
      >
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="about-item"
            key={about.title + index}
          >
            <Image
              src={about.image}
              alt={about.title}
              objectFit="cover"
              width="full"
              height="64"
              borderRadius="1rem"
            />
            <Heading size="sm" color="title" mt="2" width="full">
              {about.title}
            </Heading>
            <Text fontSize="xs" color="main-text" mt="2" width="full">
              {about.description}
            </Text>
          </motion.div>
        ))}
      </Flex>
    </Flex>
  </MotionWrap>
);

export default Wrapper({
  Component: About,
  idName: "about",
});
