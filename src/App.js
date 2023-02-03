import "./App.css";
import styled from "styled-components";

import { SesionPage } from "./components/SesionPage";
import { ResetPassword } from "./components/ResetPassword";

function App() {
  return (
    <Container>
      <ResetPassword />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export default App;
