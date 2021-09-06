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

const Form = styled.form`
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
  
`;

const LeftForm = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    margin-right: 20px;
    
`;


const RightForm = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
`;

const Input = styled.input`
    width: 200px;
    padding: 20px;
`;

const TextArea = styled.textarea`
    padding: 20px;
    width: 200px;
    height: 100%;
    
`;

const AddresContainer = styled.div`
    width: 50%;

`;


const Contact = () => {
    return (
        <Container>
            <Wrapper>
                <FormContainer>
                <Form>
                 <LeftForm>
                    <Input placeholder ="Your Name"/>
                    <Input placeholder ="Your Email"/>
                    <Input placeholder ="Your Subject"/>
                </LeftForm>
                <RightForm>
                    <TextArea placeholder ="Message"/>
                </RightForm>
                </Form>
            </FormContainer>
            <AddresContainer></AddresContainer>
        </Wrapper>            
        </Container>
    );
}

export default Contact;
