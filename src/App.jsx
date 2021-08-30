import styled from "styled-components";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";


const Container = styled.div`
  height: 100vh;
  overflow: hidden;//overflow:hidden mencegah scrollbar muncul, bahkan saat diperlukan.
`;

const IntoShape = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
z-index: -1;
clip-path: polygon(100% 0%, 79% 0%, 56% 100%, 100% 100%);
background-color: burlywood;
`

const App = () => {
  return (
  <Container>
      <Navbar/>
      <Intro/>  
      <IntoShape/>
    </Container>
);
};
export default App;