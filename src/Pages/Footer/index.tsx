import { Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      flex="1"
      direction="column"
      justifyContent="center"
      alignItems="center"
      mt="32"
    >
      <Text as="p">
        Richard Neves © {new Date().getFullYear()}. Todos os direitos
        reservados.
      </Text>
    </Flex>
  );
};

export default Footer;
