import { Add, Remove } from '@material-ui/icons';
import React, { Component } from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Container = styled.div`
`;

const Wrapper = styled.div`
    padding: 20px;
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
   padding: 10px;
   font-weight: 600;
   cursor: pointer;
   border: ${props => props.type === 'filled' && 'none'};
   background-color: ${props => props.type === 'filled' ? '#E8AEB7' : 'transparent'};
   color: ${props => props.type === 'filled' && '#f8f4f4'};
`;

const TopTexts = styled.div`
`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    text-align: center;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Info = styled.div`
    flex: 3;
`;


const Product = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ProductDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName = styled.span`
    flex: 1;
`;

const Image = styled.img`
    width: 250px;
`;

const PriceDetail = styled.div`
    flex: 1;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`;
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    
`;
const SummaryTitle = styled.h1``;

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === 'total' && '500'};
    font-size: ${props=>props.type === 'total' && '24px'};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: ;
`;


class Cart extends Component {
    render() {
        return (
            <Container>
                <Announcement />
                <Navbar />
                <Wrapper>
                    <Title>Your Cart</Title>
                    <Top>
                        <TopButton>Continue Shopping</TopButton>
                        <TopTexts>
                            <TopText>Cart(2)</TopText>
                        </TopTexts>
                        <TopButton type='filled'>Checkout</TopButton>
                    </Top>
                    <Bottom>
                        <Info>
                            <Product>
                                <ProductDetail>
                                    <Image src="https://i.pinimg.com/236x/91/72/e5/9172e5af77192d570e9b3a4a224e8ed4.jpg" />
                                    <Details>
                                        <ProductName><b>Cupcake Choice: </b>Blueberry Sorbet Cupcake</ProductName>
                                    </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <ProductAmountContainer>
                                        <Add />
                                        <ProductAmountContainer>2</ProductAmountContainer>
                                        <Remove />
                                    </ProductAmountContainer>
                                    <ProductPrice>$9.50</ProductPrice>
                                </PriceDetail>
                            </Product>
                        </Info>
                        <Summary>
                            <SummaryTitle>Order Summary</SummaryTitle>
                            <SummaryItem>
                                <SummaryItemText>Subtotal</SummaryItemText>
                                <SummaryItemPrice>$9.50</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Estimated Shipping</SummaryItemText>
                                <SummaryItemPrice>$ 4.90</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem type="total">
                                <SummaryItemText>Total</SummaryItemText>
                                <SummaryItemPrice>$9.50</SummaryItemPrice>
                            </SummaryItem>
                            <Button>Checkout Now</Button>
                        </Summary>
                    </Bottom>
                </Wrapper>
                <Hr />
                <Footer />
            </Container>

        )
    }
};

export default Cart;