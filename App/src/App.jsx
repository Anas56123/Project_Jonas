import Example from "./Example";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
`;

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Example />
      <div>
        <H1>Hello Vite</H1>
      </div>
    </>
  );
}
