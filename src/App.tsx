import { ChakraProvider, ColorModeScript, Container } from "@chakra-ui/react";
import { Analytics } from "@vercel/analytics/react";

import { theme } from "./Assets/Styles/theme";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Experience from "./Pages/Experience";
import Skills from "./Pages/Skills";
import Footer from "./Pages/Footer";
import Navbar from "./Components/Navbar";

import "./Assets/Styles/global.css";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Container maxW="100vw" minH="100vh" padding="0" margin="0">
        <Navbar />
        <Home />
        <About />
        <Experience />
        <Skills />
        <Footer />
      </Container>
      <Analytics />
    </ChakraProvider>
  );
};

export default App;
