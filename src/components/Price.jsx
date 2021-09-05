import React from 'react';
import styled from 'styled-components';
import PriceCard from './PriceCard';

const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Price = () => {
    return (
        <Container>
            <PriceCard/>
            <PriceCard/>
            <PriceCard/>
        </Container>
    );
}

export default Price;
