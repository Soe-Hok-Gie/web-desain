import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: calc(100vh - 50px);
    display: flex;
`;

const Left = styled.div`
    width: 60%;
`;

const Right = styled.div`
    width: 40%;
`;


const Intro = () => {
    return (
        <Container>
           <Left>L</Left>
           <Right>R</Right> 
        </Container>
    );
}

export default Intro;
