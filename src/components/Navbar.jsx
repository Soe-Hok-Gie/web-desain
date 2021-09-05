import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height : 50px;
`;

const Wrapper = styled.div`
    padding : 10px 20px;
    display: flex;
    height : 50px;
    justify-content: space-between;
    align-items: center;
`;

const Left = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
`;

const Logo = styled.h1`
    font-weight: bold;
    text-decoration: underline lightcoral;
    align-items: center;
`;

const Menu = styled.ul`
    display: flex;
    list-style: none;
`;
const Menuitem = styled.li`
    margin: 30px;
    font-size: 20px;
    font-weight : bold;
    color: grey;
`;

const Button = styled.div`
    border: 2px solid black;
    padding: 5px 10px;// padding berfungsi untuk mengatur jarak elemen  dari dalam.
    background-color: darkcyan;
    color: whitesmoke;
    font-weight: bold;
    border-radius: 10px;
    cursor: pointer;
`


const Navbar = () => {
    return (
        <Container>
            <Wrapper>
            <Left>
                <Logo>ReactDev</Logo>
                <Menu>
                    <Menuitem>Home</Menuitem>
                    <Menuitem>Features</Menuitem>
                    <Menuitem>Services</Menuitem>
                    <Menuitem>Pricing</Menuitem>
                    <Menuitem>Contact</Menuitem>
                </Menu>
            </Left>
            <Button>Your Goal</Button>
            </Wrapper>
        </Container>
    );
}

export default Navbar;
