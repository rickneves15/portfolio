import {
  Box,
  chakra,
  Container,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import LineWithDot from "./LineWithDot";
import TimelineCard from "./TimelineCard";

const experiences = [
  {
    id: 1,
    date: "Agosto 2022 - Janeiro 2023",
    title: "Desenvolvedor Backend - Perfect Pay",
  },
  {
    id: 2,
    date: "Dezembro 2020 - Maio 2022",
    title: "Desenvolvedor Fullstack - Videosoft",
  },
  {
    id: 3,
    date: "Maio 2018 - Agosto 2020",
    title: "Desenvolvedor Fullstack - Betricks",
  },
  {
    id: 4,
    date: "Maio 2016 - Maio 2018",
    title: "Assistente de Suporte de TI - Prefeitura de Balneario Camboriu",
  },
];

const Timeline = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <Container maxWidth="7xl" p={{ base: 2, sm: 10 }} mt="8">
      {experiences.map((experience) => (
        <Flex key={experience.id} mb="10px">
          {/* Desktop view(left card) */}
          {isDesktop && experience.id % 2 === 0 && (
            <>
              <EmptyCard />
              <LineWithDot />
              <TimelineCard {...experience} />
            </>
          )}

          {/* Mobile view */}
          {isMobile && (
            <>
              <LineWithDot />
              <TimelineCard {...experience} />
            </>
          )}

          {/* Desktop view(right card) */}
          {isDesktop && experience.id % 2 !== 0 && (
            <>
              <TimelineCard {...experience} />
              <LineWithDot />
              <EmptyCard />
            </>
          )}
        </Flex>
      ))}
    </Container>
  );
};

const EmptyCard = () => {
  return (
    <Box
      flex={{ base: 0, md: 1 }}
      p={{ base: 0, md: 6 }}
      bg="transparent"
    ></Box>
  );
};

export default Timeline;
