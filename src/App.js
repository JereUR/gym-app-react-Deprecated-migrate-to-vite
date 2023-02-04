import "./App.css";
import styled from "styled-components";

import { SesionPage } from "./components/SesionPage";
import { ResetPassword } from "./components/ResetPassword";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Container>
      <Header />
      <SesionPage />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  display: block;
  justify-content: center;
`;

export default App;
