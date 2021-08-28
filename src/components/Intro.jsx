import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: calc(100vh - 50px);
    display: flex;
    padding: 20px;// paddding berfungsi untuk mengatur jarak elemen  dari dalam.
`;

const Left = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    font-size: 60px;
    width: 60%;
`;

const Desc = styled.p`
    font-size: 20px;
    width: 60%;
    margin-top: 20px; //Margin, berfungsi untuk mengatur jarak elemen dari luar.
`;

const Info = styled.div`
    width: 60%;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Button = styled.button`
    padding: 15px;
    background-color: lightsalmon;
    color: lavender;
    border: none;
    border-radius: 10px;
    font-weight: bold;
    letter-spacing: 2px; // letter scpacing berfungsi untuk memberikan jarak spasi antar karakter didalam satu kalimat.
    cursor: pointer;
`;

const Contact = styled.div`
    display: flex;
    flex-direction: column;
`;

const Phone = styled.span`
    color: indianred;
    font-weight: bold;
`;

const ContactText = styled.span`
    color: grey;
    margin-top: 5px;
`;

const Right = styled.div`
    width: 40%;
`;


const Intro = () => {
    return (
        <Container>
           <Left>
               <Title> Learn with me</Title>
               <Desc>to achieve your best goal, financial freedom at a young age.</Desc>
               <Info>
                   <Button>Start Your Goal</Button>
                   <Contact>
                       <Phone> call me (0812) 67838</Phone>
                       <ContactText>for any question bro</ContactText>
                   </Contact>
               </Info>
            </Left>
           <Right>R</Right> 
        </Container>
    );
}

export default Intro;
