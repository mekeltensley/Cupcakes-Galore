import { Send } from "@material-ui/icons";
import React, { Component } from "react";
import styled from 'styled-components'

const Container = styled.div`
    height: 60vh;
    background-color: #A67F8E;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
    color: #C89FA3;
`;
const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    color: #2C1A1D;
`;
const InputContainer = styled.div`
    width: 30%;
    height: 55px;
    margin-top: 20px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    border: 1px solid #A67F8E;
`;
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`;
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: #E8AEB7;
`;


class Newsletter extends Component {
    render() {
        return (
            <Container>
                <Title>Newsletter</Title>
                <Description>Stay on top of special cupcake rewards and discounts</Description>
                <InputContainer>
                    <Input placeholder="Please Enter Your Email" />
                    <Button>
                        <Send />
                    </Button>
                </InputContainer>
            </Container>
        )
    }
}

export default Newsletter;