import { Add, Remove } from '@material-ui/icons';
import React, { Component } from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import StripeCheckout from 'react-stripe-checkout';

const KEY = process.env.REACT_STRIPE_KEY;

const Container = styled.div`
`;

const Wrapper = styled.div`
    padding: 20px;
    margin-top: 120px;
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
    color: #2C1A1D;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
    width: 75%;
    margin-top: 10px;
    margin-left: 55px;
    padding: 10px;
    background-color: #E8AEB7;
    font-size: 20px;
    border: none;
    color: #2C1A1D;
    border-radius: 10px;
`;



const TopTexts = styled.div`
`;

const TopText = styled.span`
    cursor: pointer;
    width: 15%;
    margin-top: 10px;
    margin-left: 55px;
    padding: 10px;
    background-color: #E8AEB7;
    font-size: 20px;
    color: #2C1A1D;
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
    font-size: 20px;
    margin-left: 10%;
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
    margin-left: 28%;
    margin-top: 125px;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    margin-left: 5px;
`;

const ProductQuantity = styled.div`
    font-size: 30px;
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
    padding: 35px;
    margin-right: 7%;
`;
const SummaryTitle = styled.h1`
    text-align: center;
`;

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
    width: 75%;
    margin-left: 55px;
    padding: 10px;
    background-color: #E8AEB7;
    font-size: 20px;
    border: none;
    border-radius: 10px;
`;


class Cart extends Component {
    // const cart = useSelector(state=> state.cart)
    render() {
        return (
            <Container>
                <Announcement />
                <Navbar />
                <Wrapper>
                    <Title>Your Cart</Title>
                    <Bottom>
                        <Info>
                            <Product>
                                <ProductDetail>
                                    <Image src="https://i.pinimg.com/564x/f9/6d/4c/f96d4c93f9d988451ce0c5c403c14566.jpg" />
                                    <Details>
                                        <ProductName><b>Cupcake Choice: </b>Red Velvet</ProductName>
                                    </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <ProductAmountContainer>
                                        <Add />
                                        <ProductQuantity>2</ProductQuantity>
                                        <Remove />
                                    </ProductAmountContainer>
                                    <ProductPrice>$9.50</ProductPrice>
                                </PriceDetail>
                            </Product>
                            <Hr />
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
                                        <ProductQuantity>2</ProductQuantity>
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
                                <SummaryItemPrice>$19.00</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Estimated Shipping</SummaryItemText>
                                <SummaryItemPrice>$ 4.90</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem type="total">
                                <SummaryItemText>Total</SummaryItemText>
                                <SummaryItemPrice>$23.50</SummaryItemPrice>
                            </SummaryItem>
                            <Button>Checkout Now</Button>
                            <TopButton>Continue Shopping</TopButton>
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