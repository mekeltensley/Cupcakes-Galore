import { Instagram, Pinterest } from "@material-ui/icons";
import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20;
`;

const Logo = styled.h1``;

const SocialContainer = styled.div``;
const SocialIcon = styled.h1``;


const Center = styled.div`
    flex: 1;
`;

const Right = styled.div`
    flex: 1;
`;


class Footer extends Component {
    render() {
        return (
            <Container>
                <Left>
                    <Logo>Cupcakes Galore</Logo>
                </Left>
                <SocialContainer>
                    <SocialIcon>
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon>
                        <Pinterest/>
                    </SocialIcon>
                </SocialContainer>
                <Center></Center>
                <Right></Right>
            </ Container>
        )
    }
};

export default Footer;
