import { Favorite, Instagram, MailOutline, Phone, Pinterest } from "@material-ui/icons";
import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin-left: 2%;
`;

const Logo = styled.h3`
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #${props => props.color};
    color:#9b5f68;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: wrap;
`;

const ListItem = styled.li`
    width: 20%; 
    margin-bottom: 30px;
`;


const Right = styled.div`
    flex: 1;
    padding: 20px;  
`;


const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;


class Footer extends Component {
    render() {
        return (
            <Container>
                <Left>
                    <Title>Services</Title>
                    <List>
                        <ListItem>My Account</ListItem>
                        <ListItem>Track My Order</ListItem>
                        <ListItem>FAQ</ListItem>
                        <ListItem>Shipping</ListItem>
                        <ListItem>Terms and Conditions</ListItem>
                        <ListItem>Privacy Policy</ListItem>
                    </List>
                </Left>
                <Center>
                    <SocialContainer>
                        <SocialIcon color="A67F8E">
                            <Instagram />
                        </SocialIcon>
                        <SocialIcon color="A67F8E">
                            <Pinterest />
                        </SocialIcon>
                    </SocialContainer>
                </Center>
                <Right>
                    <Title>Customer Support</Title>
                    <ContactItem>
                        <Favorite style={{ marginRight: "10px" }} /> Made with love in Atlanta, GA
                    </ContactItem>
                    <ContactItem>
                        <Phone style={{ marginRight: "10px" }} /> 404-111-6622
                    </ContactItem>
                    <ContactItem>
                        <MailOutline style={{ marginRight: "10px" }} /> customersupport@cupcakesgalore.com
                    </ContactItem>
                    <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
                </Right>
            </Container>
        )
    }
};

export default Footer;

