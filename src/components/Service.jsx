import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;

`;

const Left = styled.div`
    width: 50%;
`;

const Right = styled.div`
    width: 50%;
`;

const Service = () => {
    return (
        <Container>
            <Left></Left>
            <Right></Right>
        </Container>
    );
}

export default Service;
