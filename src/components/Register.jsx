import React, { Component } from 'react';
import styled from 'styled-components';
import Announcement from './Announcement';
import Navbar from './Navbar';
import Footer from './Footer';


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #C89FA3;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: #f8f4f4;
    border-radius: 10px;
`;


const Form = styled.form`
    display: flex;
    flex-direction: column;
`;


const Heading = styled.h1`
    font-size: 25px;
    font-weight: 500;
`;

const Title = styled.h3`
    font-size: 25px;
    font-weight: 500;
`;



const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;


const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;


const Button = styled.button`
    width: 40%;
    border: none;
    border-radius: 10px ;
    padding: 15px 15px;
    background-color: #E8AEB7;
    color: #f8f4f4;
    font-size: 20px;
    cursor: pointer;
    margin-top: 15px;
`;


class Register extends Component {
    render() {
        return (
            <Container>
                <Wrapper>
                    <Title>Create an Account</Title>
                    <Form>
                        <Input placeholder="Enter your first name" />
                        <Input placeholder="Enter your last name" />
                        <Input placeholder="Enter your email" />
                        <Input placeholder="Enter your username" />
                        <Input placeholder="Enter your password" />
                        <Input placeholder="Confirm your password" />
                        <Agreement>

                        </Agreement>
                        <Button>Create Account</Button>
                    </Form>
                </Wrapper>
                
            </Container>
        )
    }
};

export default Register;