import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin-top: 75px;
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
    left: ${props => props.className === "left" && "10px"};
    right: ${props => props.className === "right" && "10px"};
    margin: auto;
    opacity: 0.5;
`;

const Wrapper = styled.div`
`

const Slide = styled.div`
    width: 50vw;
`;

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
    margin-left: 150px;
`;

const Image = styled.img`
    height: 90%;
`;

const InfoContainer = styled.div`
    flex: 1;
    margin-left: 55%;
`;


const Title = styled.h1``
const Description = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
`
class Slider extends Component {
    render() {
        return (
            <Container>
                <Arrow className="left">
                    <ArrowBackIosOutlined />
                </Arrow>
                <Wrapper>
                    <Slide>
                        <ImgContainer>
                            <Image src='https://i.pinimg.com/564x/b0/85/88/b08588382d58f9fdc23c5db34dea2f33.jpg' />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>Grand Opening</Title>
                            <Description>Vegan cupcakes that will keep you wanting more.</Description>
                            <Button>Buy Cupcakes</Button>
                        </InfoContainer>
                    </Slide>
                </Wrapper>
                <Arrow className="right">
                    <ArrowForwardIosOutlined />
                </Arrow>
            </Container>
        );
    }
}

export default Slider;
