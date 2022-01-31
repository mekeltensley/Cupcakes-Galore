import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import React, { Component, useState } from 'react';
import styled from 'styled-components';
import { SliderItems } from '../data';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
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
    top: 175px;
    bottom: 0;
    left: ${props => props.className === "left" && "10px"};
    right: ${props => props.className === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props => props.slideIndex * -100}vw);
`

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg};
`;

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
    margin-left: 150px;
`;

const Image = styled.img`  
    height: 65%;
    margin-top: 125px;
`;

const InfoContainer = styled.div`
    display: block;
    align-content: center;
    flex: 1;
    top: 0;
    bottom: 25px;
    height: 55px;
    margin: auto;
`;

const Title = styled.h1`
    color: #6C534E;
`;
const Description = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
    color: #A67F8E;
`;
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: #E8AEB7;
    border: none;
    font-size: 25px;
    color: #2C1A1D;
    border-radius: 10px;
`;

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction ==="left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    }

    return (
        <Container>
            <Arrow className="left" onClick={() => handleClick("left")}>
                <ArrowBackIosOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {SliderItems.map(item => (
                    <Slide bg={item.backgroundColor}>
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Description>{item.description}</Description>
                            <Button>Shop Cupcakes</Button>
                        </InfoContainer>
                    </Slide>
                ))};
            </Wrapper>
            <Arrow className="right" onClick={() => handleClick("right")}>
                <ArrowForwardIosOutlined />
            </Arrow>
        </Container>
    );
};

export default Slider;
