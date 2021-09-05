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
            <PriceCard Price="10" Type="Bassic"/>
            <PriceCard Price="20" Type="Premium"/>
            <PriceCard Price="30" Type="Advaced"/>
        </Container>
    );
}

export default Price;
