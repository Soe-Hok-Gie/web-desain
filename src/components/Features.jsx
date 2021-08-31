import React from 'react';
import styled from 'styled-components';
import Image from '../img/phone';

const Container = styled.div`
    display: flex;
`;
const Left = styled.div`
    width: 50%;
`;
const Image = styled.img`

`;

const Right = styled.div`
    width: 50%;
`;

const Features = () => {
    return (
        <Container>
            <Left><Image scr={phone}/></Left>
            <Right></Right>
        </Container>
    );
}

export default Features;
