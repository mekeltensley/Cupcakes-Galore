import React, { Component } from 'react';
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container = styled.div``;
const Title = styled.h1`
    margin: 20px;
`;


class ProductList extends Component {
    render() {
        return (
            <Container>
                <Navbar />
                <Announcement />
                <Title>Specialty Cupcakes</Title>
            </Container>

        )
    }
};

export default ProductList;