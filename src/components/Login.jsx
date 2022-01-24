import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #C89FA3;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: #f8f4f4;
    border-radius: 10px;
`;


const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Title = styled.h1`
    font-size: 25px;
    font-weight: 500;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
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

const Link = styled.a`
    margin: 5px 0px;
    font-size: 17px;
    text-decoration: underline;
    cursor: pointer;
`;

class Login extends Component {
    render() {
        return (
            <Container>
                <Wrapper>
                    <Title>Log In</Title>
                    <Form>
                        <Input placeholder="Enter your username" />
                        <Input placeholder="Enter your password" />
                        <Button>Log In</Button>
                        <Link>Forgot Password?</Link>
                        <Link>Create a New Account</Link>
                    </Form>
                </Wrapper>
            </Container>
        )
    }
};

export default Login;