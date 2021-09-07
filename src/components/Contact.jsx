import React from 'react';
import styled from 'styled-components';
import Map from "../img/map.png";
import Send from "../img/send.png";
import Phone from "../img/phone.png";

const Container = styled.div`
    height: 90%;
    background: url("https://www.toptal.com/designers/subtlepatterns/patterns/double-bubble-outline.png");//buble background
`;
const Wrapper = styled.div`
    height: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const FormContainer = styled.div`
    width: 50%;
`;

const Title = styled.h1`
    margin: 50px;
    margin-top: 0px;
`;

const Form = styled.form`
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
  
`;

const LeftForm = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin-right: 20px;
    
`;


const RightForm = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;

const Input = styled.input`
    width: 200px;
    padding: 20px;
`;

const TextArea = styled.textarea`
    padding: 15px;
    width: 200px;
    height: 60%;
    
`;

const Button = styled.button`
    background-color: darkcyan;
    color: whitesmoke;
    border-radius: 10px;
    border: none;
    font-size: 20px;
    font-weight: bold ;
    padding: 20px;
    margin-top: 20px;
    cursor: pointer;
`;

const AddresContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;

`;

const AddresItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
`;

const Icon= styled.img`
    width: 20px;
    margin-right: 20px;
`;

const Text = styled.span`
    font-size: 20px;
    margin-right: 15px;
`;


const Contact = () => {
    return (
        <Container>
            <Wrapper>
                <FormContainer>
                    <Title>Questions?<br/>Let Get in Touch</Title>
                <Form>
                 <LeftForm>
                    <Input placeholder ="Your Name"/>
                    <Input placeholder ="Your Email"/>
                    <Input placeholder ="Your Subject"/>
                </LeftForm>
                <RightForm>
                    <TextArea placeholder ="Message"/>
                    <Button>send</Button>
                </RightForm>
                </Form>
            </FormContainer>
            <AddresContainer>
                <AddresItem>
                <Icon src={Map}/>
                <Text>Jln Manusia Merdeka,07 Menteng.</Text>
                </AddresItem>
                <AddresItem>
                <Icon src={Phone}/>
                <Text>+081377881298</Text>
                <Text>+081376885598</Text>

                </AddresItem>
                <AddresItem>
                <Icon src={Send}/>
                <Text>contact@Manusiamerdeka.dev</Text>
                </AddresItem>
            </AddresContainer>
        </Wrapper>            
        </Container>
    );
}

export default Contact;
