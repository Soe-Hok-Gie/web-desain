import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin: 50px    ;
    padding: 20px;
    -webkit-box-shadow: 0px 0px 17px -11px rgba(0,0,0,0.58); 
    box-shadow: 0px 0px 17px -11px rgba(0,0,0,0.58);
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 10px ;


`
const PriceContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Price = styled.span`
    font-weight: bold;
    font-size: 50px;
`;

const Type = styled.button`
    background-color: whitesmoke;
    color: tomato;
    border-radius: 20px;
    border : 2px solid darkcyan;
    margin: 10px 0;
    padding: 10px;
`;
const List = styled.ul`
    list-style: none;
`;
const ListItem = styled.li`
    margin: 30px 0;
`;

const Button = styled.button`
    background-color: darkcyan;
    color: whitesmoke;
    border-radius: 10px;
    border: none;
    font-size: 16px;
    font-weight: bold ;
    padding: 15px;
    cursor: pointer;
`;



const PriceCard = ({price, type}) => {
    return (
        <Container>
            <PriceContainer>
                $<Price>{price}</Price>/month
            </PriceContainer>
            <Type>{type} Plan</Type>
            <List>
                <ListItem>200 Hand-Crafted Template</ListItem>
                <ListItem>Exclusive Support</ListItem>
                <ListItem>50+ PreBuild Website</ListItem>
                <ListItem>Premium Plugins</ListItem>{""}
            </List>
            <Button>Join Now </Button>
        </Container>
    );
}

export default PriceCard;
