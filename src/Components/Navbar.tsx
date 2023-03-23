import { Box, Button, Flex, Image, Link, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";

import LogoLight from "./../../public/logo-light.png";
import { theme } from "../Assets/Styles/theme";

const links = [
  { title: "Home", id: "home" },
  { title: "Sobre", id: "about" },
  { title: "Experiência", id: "experience" },
  { title: "Habilidades", id: "skills" },
];

const Navbar = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { colorMode, toggleColorMode } = useColorMode();

  function handleOpen(index: number) {
    setOpenIndex(index);
  }

  function handleClose() {
    setOpenIndex(null);
  }

  return (
    <Flex
      width="full"
      justifyContent="space-between"
      alignItems="center"
      py="4"
      px="8"
      background="menu-background"
      backdropFilter="blur(4px)"
      position="fixed"
      zIndex="2"
    >
      <Flex justifyContent="flex-start" alignItems="center">
        <Image src={LogoLight} alt="LOGO" width="12" />
      </Flex>

      <Flex flex="1 1" justifyContent="center" alignItems="center" gap="6">
        {links.map((link, index) => (
          <Flex key={index} flexDirection="column" alignItems="center">
            <Box
              width="5px"
              height="5px"
              background={openIndex === index ? "link-hover" : "transparent"}
              borderRadius="50%"
              mb="5px"
            />
            <Link
              key={index}
              href={`#${link.id}`}
              color="link"
              flexDirection="column"
              textTransform="uppercase"
              textDecoration="none"
              fontWeight="500"
              transition="all 0.3s ease-in-out"
              onMouseEnter={() => handleOpen(index)}
              onMouseLeave={handleClose}
              _hover={{ textDecoration: "none", color: "link-hover" }}
            >
              {link.title}
            </Link>
          </Flex>
        ))}
      </Flex>
      <Flex justifyContent="flex-end" alignItems="center">
        <Button
          onClick={toggleColorMode}
          color="white"
          _hover={{ background: "none" }}
          variant="ghost"
          fontWeight="500"
        >
          {colorMode === "light" ? (
            <MoonIcon boxSize={6} _hover={{ color: "icon-hover" }} />
          ) : (
            <SunIcon boxSize={6} _hover={{ color: "icon-hover" }} />
          )}
        </Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;
