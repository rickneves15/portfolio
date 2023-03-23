import { Flex, Heading } from "@chakra-ui/react";

import MotionWrap from "../../Components/MotionWrap";
import Timeline from "../../Components/Timeline";
import Wrapper from "../../Components/Wrapper";

const Experience = () => (
  <MotionWrap>
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <Heading
        size="2xl"
        fontWeight="extrabold"
        color="title"
        textTransform="capitalize"
      >
        Experiências
      </Heading>
      <Timeline />
    </Flex>
  </MotionWrap>
);

export default Wrapper({
  Component: Experience,
  idName: "experience",
});
