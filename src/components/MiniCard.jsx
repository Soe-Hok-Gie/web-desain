import React from 'react';
import styled from 'styled-components';
import Search from "../img/search.png";

const Container = styled.div`
    width: 100px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    -webkit-box-shadow: 3px 3px 26px -3px rgba(0,0,0,0.35); 
    box-shadow: 3px 3px 26px -3px rgba(0,0,0,0.35);

`;
const Image = styled.img`
    width: 20px;

`;

const Text = styled.span`
    margin-top: 10px;
    text-align: center;

`;


const MiniCard = () => {
    return (
        <Container>
        <Image src={Search}></Image>
        <Text>Lorem ipsum dolor sit amet consectetur.</Text>
        </Container>
    );
}

export default MiniCard;
