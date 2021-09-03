import React from 'react';
import styled from 'styled-components';
import How from "../img/woman.png";
import MiniCard from "./MiniCard"
import Play from "../img/play.png"

const Container = styled.div`
    display: flex;

`;

const Left = styled.div`
    width: 50%;
`;
const Image = styled.img`
    height: 80%;
    margin-left: 80px;
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
    cursor: pointer;
    display: flex;
    align-items: center;
`;

const Icon = styled.img `
    margin-right: 10px;
    width: 20px;
`;


const Service = () => {
    return (
        <Container>
            <Left><Image src={How}></Image></Left>
            <Right>
                <Wrapper>
                    <Title> Enjoy it</Title>
                    <Desc>Trends and user behavior can be used to predict the future of the digital media and advertising industry. In general, older people use traditional media more, while millennials who are under 40 prefer to use digital media.</Desc>
                    <CardContainer>
                        <MiniCard/>
                        <MiniCard/>
                        <MiniCard/>
                    </CardContainer>
                    <Button>
                        <Icon src={Play}/>Playing
                    </Button>
                </Wrapper>
            </Right>
        </Container>
    );
}

export default Service;
