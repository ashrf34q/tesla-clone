import React from "react";
import styled from "styled-components";


function Header() {

    return(
        <Container>
            <a href="#">
            <img src="/images/logo.svg" alt="tesla-logo" />
            </a>

            <Menu>
                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Account</a>
                <CustomMenu>Menu</CustomMenu>
            </RightMenu>
            </Container>

    );
}

export default Header;

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    padding:  24px;
    display: flex;
    align-items: center;
    top: 0;
    left: 0; 
    right: 0;
    
    a{
    cursor: pointer;
    }
    `;

const Menu = styled.div`
    a {
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 600;
    padding: 0 10px;
    flex-wrap: nowrap;
   }
   
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 12px;
   flex: 1;
    `;

const RightMenu = styled.div`
a {
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 600;
    margin-right: 10px;
    }
    display: flex;
    gap: 12px;
    `;