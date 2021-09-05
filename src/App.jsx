import styled, { css } from "styled-components";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Features from "./components/Features";
import Service from "./components/Service";
import Price from "./components/Price";



const Container = styled.div`
  height: 100vh;
  overflow: hidden;//overflow:hidden mencegah scrollbar muncul, bahkan saat diperlukan.
  position: relative;//agar featuresshape tidak ditimpa dgn intoshape karena di const shape, top and left bernilai 0.
`

const Shape = css`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
z-index: -1;
`

const IntoShape = styled.div`
${Shape}
clip-path: polygon(67% 0%, 100% 0%, 100% 100%, 55% 100%);
background-color: burlywood;
`

const FeaturesShape = styled.div`
${Shape}
clip-path: polygon(0% 0%, 55% 0%, 33% 100%, 0% 100%);
background-color: indianred;
`

const ServiceShape = styled.div`
${Shape}
clip-path: polygon(0% 0%, 33% 0%, 33% 100%, 0% 100%);
background-color: burlywood;
`

const App = () => {
  return (
  <> 
    <Container>
      <Navbar/>
      <Intro/>  
      <IntoShape/>
    </Container>

    <Container>
      <Features/>
      <FeaturesShape/>
    </Container>

    <Container>
      <Service/>
      <ServiceShape/>
    </Container>

    <Container>
     <Price/>
    </Container>
  </>//Route
  );
}
export default App;