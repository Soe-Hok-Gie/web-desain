import React from 'react';
import styled from 'styled-components';
import How from "../img/grandma.png";
import MiniCard from "./MiniCard"

const Container = styled.div`
    display: flex;

`;

const Left = styled.div`
    width: 50%;
`;
const Image = styled.img`
    height: 75%;
    margin-left: 100px;
`;

const Right = styled.div`
    width: 50%;
`;



const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h1`

`;
const Desc = styled.p`
    font-size: 20px;
    color: gray;
    margin-top: 20px;
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
`;

const Button = styled.button`
    width: 180px;
    border: none;
    border-radius: 10px;
    background-color: brown;
    color: whitesmoke;
    font-size: 20px;
    padding: 15px;
    margin-top: 50px;
`;


const Service = () => {
    return (
        <Container>
            <Left><Image src={How}></Image></Left>
            <Right>
                <Wrapper>
                    <Title>Trust and enjoy</Title>
                    <Desc>We will help you with the difficulties you experience during the learning process in the field of design, so that your high target in the digital field is immediately achieved.</Desc>
                    <CardContainer>
                        <MiniCard/>
                        <MiniCard/>
                        <MiniCard/>
                    </CardContainer>
                    <Button>Look GrandMa</Button>
                </Wrapper>
            </Right>
        </Container>
    );
}

export default Service;
