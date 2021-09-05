import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding: 20px;
    -webkit-box-shadow: 0px 0px 17px -11px rgba(0,0,0,0.58); 
    box-shadow: 0px 0px 17px -11px rgba(0,0,0,0.58);
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 10px ;


`
const PriceContainer = styled.div``
const Price = styled.span``
const Type = styled.button``
const List = styled.ul``
const ListItem = styled.li``
const Button = styled.button``





const PriceCard = () => {
    return (
        <Container>
            <PriceContainer>
                $<Price>20</Price>/month
                    <Type>  Bassic Plan </Type>
                        <List>
                            <ListItem>A</ListItem>
                            <ListItem>CD</ListItem>
                            <ListItem>ED</ListItem>
                        </List>
                        <Button>Join</Button>
            </PriceContainer>
        </Container>
    );
}

export default PriceCard;
