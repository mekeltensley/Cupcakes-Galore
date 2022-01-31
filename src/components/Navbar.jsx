import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import './Navbar.css';

const Container = styled.div`
    height: 100px;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`;

const SearchContainer = styled.div`
    border: 0.5px solid #2C1A1D;
    width: 250px;
    height: 35px;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
`;
const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
`;
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const MenuItem = styled.div`
    text-decoration: none;
    font-size: 15px;
    cursor: pointer;
    margin-right: 75px;
    width: 55%;
    padding: 15px 20px;
    background-color: #E8AEB7;
    border: none;
    text-align: center;
    border-radius: 10px;
`;


class Navbar extends Component {
    render() {
        return (
            <Container>
                <Wrapper>
                    <Left>
                        <Language>EN</Language>
                        <SearchContainer>
                            <Input />
                            <Search style={{ color:"#E8AEB7", fontSize: "40px", marginLeft: 50 }}/>
                        </SearchContainer>
                    </Left>
                    <Center><Logo className="logo">Cupcakes Galore</Logo></Center>
                    <Right>
                        <Link to="/register" style={{ textDecoration:"none", color:"#2C1A1D" }}>
                        <MenuItem>REGISTER</MenuItem>
                        </Link>
                        <Link to="/login" style={{ textDecoration:"none", color:"#2C1A1D"}}>
                        <MenuItem>SIGN IN</MenuItem>
                        </Link>
                        <Link to="/cart" >
                            <Badge  badgeContent={2} style={{ color:"#2C1A1D", fontSize: 55 }}>
                                <ShoppingCartOutlined />
                            </Badge>
                        </Link>
                    </Right>
                </Wrapper>
            </Container>
        );
    }
}

export default Navbar;