import {
  Box,
  chakra,
  HStack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

interface CardProps {
  id: number;
  title: string;
  date: string;
}

const TimelineCard = ({ id, title, date }: CardProps) => {
  const isEvenId = id % 2 == 0;
  let borderWidthValue = isEvenId ? "15px 15px 15px 0" : "15px 0 15px 15px";
  let leftValue = isEvenId ? "-15px" : "unset";
  let rightValue = isEvenId ? "unset" : "-15px";

  const isMobile = useBreakpointValue({ base: true, md: false });
  if (isMobile) {
    leftValue = "-15px";
    rightValue = "unset";
    borderWidthValue = "15px 15px 15px 0";
  }

  return (
    <HStack
      flex={1}
      p={{ base: 3, sm: 6 }}
      background="timeline-card"
      spacing={5}
      rounded="lg"
      alignItems="center"
      pos="relative"
      _before={{
        content: `""`,
        w: "0",
        h: "0",
        borderColor: `transparent ${useColorModeValue(
          "#00bfff",
          "#ff0066"
        )} transparent`,
        borderStyle: "solid",
        borderWidth: borderWidthValue,
        position: "absolute",
        left: leftValue,
        right: rightValue,
        display: "block",
      }}
    >
      <Box>
        <VStack spacing={2} mb={3} textAlign="left">
          <chakra.h1
            fontSize="2xl"
            lineHeight={1.2}
            color="timeline-text"
            fontWeight="bold"
            w="100%"
          >
            {title}
          </chakra.h1>
        </VStack>
        <Text fontSize="sm" color="timeline-text">
          {date}
        </Text>
      </Box>
    </HStack>
  );
};
export default TimelineCard;
