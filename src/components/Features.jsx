import React from 'react';
import styled from 'styled-components';
import App from '../img/app.png';
import AnimationShape from './AnimationShape';

const Container = styled.div`
    display: flex;
`;
const Left = styled.div`
    width: 50%;
`;
const Image = styled.img`
    width: 100%;
`;

const Right = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const Title = styled.span`
    font-size: 70px;
`
const SubTitle = styled.span`
    font-size: 24px;
    font-style: italic;
    color: gray;
    margin-top: 30px;
`
const Desc = styled.p`
    font-size: 20px;
    color: goldenrod;
    margin-top: 30px;
`
const Button = styled.button`
    width: 150px;
    border: none;
    border-radius: 10px;
    padding: 10px 10px;
    background-color: darkcyan;
    color: white;
    font-size: 20px;
    margin-top: 20px;
    cursor: pointer;
`



const Features = () => {
    return (
        <Container>
            <Left><Image src={App}/></Left>
            <Right>
                <Title>
                    <b>Good</b>Design<br/>
                    <b>Good</b>Business
                </Title>
                <SubTitle>we offer you to learn design as one of the skills to survive in modern times.</SubTitle>
                <Desc> A web designer is a person who has the expertise to make a website look attractive. For example, illustration effects on websites, typography, contrast balance, layout, etc. They also focus on making designs with a user experience approach to make it easy to use.</Desc>
                <Button>learn More</Button>
            </Right>
            <AnimationShape/>
        </Container>
    );
}

export default Features;
