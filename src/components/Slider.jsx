import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display:flex;
    background-color: #CAC4CE;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #ffffff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.className === "left" && "10px"};
    right: ${props=> props.className === "right" && "10px"};
    margin: auto;
`;

class Slider extends Component {
    render() {
        return (
            <Container>
                <Arrow className="left">
                    <ArrowBackIosOutlined />
                </Arrow>
                <Arrow className="right">
                    <ArrowForwardIosOutlined />                </Arrow>
            </Container>
        );
    }
}

export default Slider;
