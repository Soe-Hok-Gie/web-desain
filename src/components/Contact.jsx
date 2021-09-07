import React from 'react';
import styled from 'styled-components';

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
            <AddresContainer></AddresContainer>
        </Wrapper>            
        </Container>
    );
}

export default Contact;
