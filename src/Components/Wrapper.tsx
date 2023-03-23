import { Flex } from "@chakra-ui/react";
import { ComponentType } from "react";

interface Props {
  Component: ComponentType<any>;
  idName: string;
}

const Wrapper = ({ Component, idName }: Props) =>
  function HOC() {
    return (
      <>
        <Flex id={idName} minW="100%" minH="100%" direction="row">
          <Flex
            width="100%"
            flex="1"
            direction="column"
            justifyContent="center"
            alignItems="center"
            mt="32"
            mx="8"
          >
            <Flex flex="1 1" direction="column" width="100%">
              <Component />
            </Flex>
          </Flex>
        </Flex>
      </>
    );
  };

export default Wrapper;
