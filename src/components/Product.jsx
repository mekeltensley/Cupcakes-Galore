import React, { Components } from 'react';
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "..components/Announcement";
import Footer from "..components/Footer";
import Newsletter from "..components/Newsletter";

const Container = styled.div``;

const Wrapper = styled.div``;

const ImgContainer = styled.div``;

const Image = styled.img``;

const InfoContainer = styled.div``;
const Title = styled.h1``;
const Description = styled.p``;
const Price = styled.span``;

class Product extends Components {
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
                        <Title></Title>
                        <Description>
                            nowojosjdojnocnowcnwocnownccscpkcp
                        </Description>
                        <Price>$9.50</Price>
                    </InfoContainer>
                </Wrapper>
                <Newsletter />
                <Footer />

            </Container>

        )
    }
};

export default Product;
