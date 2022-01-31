import React, { Component } from 'react';
import styled from "styled-components";
import Navbar from "./Navbar";
import Announcement from "./Announcement";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

const Container = styled.div``;
const Title = styled.h1`
    margin: 20px;
`;


class ProductList extends Component {
    render() {
        return (
            <Container>
                <Announcement />
                <Navbar />
                <Title>Classic Cupcakes</Title>
                <Newsletter />
                <Footer />
            </Container>

        )
    }
};

export default ProductList;