import "./App.css";
import styled from "styled-components";

import { SesionPage } from "./components/SesionPage";

function App() {
  return (
    <Container>
      <SesionPage />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export default App;
