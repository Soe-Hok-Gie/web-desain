import React from 'react';
import styled from 'styled-components';
import How from "../img/how.png";

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

const Service = () => {
    return (
        <Container>
            <Left><Image src={How}></Image></Left>
            <Right></Right>
        </Container>
    );
}

export default Service;
