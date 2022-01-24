import React, { Component } from 'react';
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import { Add, Remove } from '@material-ui/icons';

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`;

const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    margin-left: 200px;
    width:40%;
`;

const InfoContainer = styled.div`
    flex: 1; 
    padding: 0px 50px;
    margin-top: 95px;
`;
const Title = styled.h1`
    font-weight: 200;
    color: #C89FA3;
`;
const Description = styled.p`
    margin: 20px 0px;
    font-size: 20px;
    color: #2C1A1D;
`;
const Price = styled.span`
    font-weight: 100;
    font-size: 25px;
    color: #2C1A1D;
`;

const AddContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 15%;
    color: #2C1A1D;
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    margin-top: 20px;
`;

const Amount = styled.span`
    width:30px;
    height:30px;
    border-radius: 10px;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    margin-right: 10px;
`;

const Button = styled.button`
    padding: 15px;
    background-color: white;
    border: 2px solid #E8AEB7;
    color: #C89FA3;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 500;
    font-size: 20px;
    &:hover {
        background-color: #f8f4f4;
    }
    margin-top: 20px;
`;

class Product extends Component {
    render() {
        return (
            <Container>
                <Navbar />
                <Announcement />
                <Wrapper>
                    <ImgContainer>
                    <Image src="https://i.pinimg.com/236x/91/72/e5/9172e5af77192d570e9b3a4a224e8ed4.jpg" />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>Blueberry Sorbet Cupcake </Title>
                        <Description>
                            nowojosjdojnocnowcnwocnownccscpkcp
                        </Description>
                        <Price>$9.50</Price>
                        <AddContainer>
                            <AmountContainer>
                                <Remove/>
                                <Amount>1</Amount>
                                <Add/>
                            </AmountContainer>
                        </AddContainer>
                        <Button>Add to Cart</Button>
                    </InfoContainer>
                </Wrapper>
                <Newsletter />
                <Footer />
            </Container>

        )
    }
};

export default Product;