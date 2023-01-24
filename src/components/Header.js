import React, {useState} from "react";
import styled from "styled-components";
import {useSelector} from "react-redux";
import {selectCars} from "../features/cars/carSlice";

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    // const cars = useSelector(selectCars);
    // console.log(cars);

    return(
        <Container>
            <a href="#">
            <img src="/images/logo.svg" alt="tesla-logo" />
            </a>

            <Menu>
               <a href={"#"}>Model S</a>
                <a href={"#"}>Model 3</a>
                <a href={"#"}>Model X</a>
                <a href={"#"}>Model Y</a>
            </Menu>
            <RightMenu onClick={() => setBurgerStatus(true)}>
                <a href="#">Shop</a>
                <a href="#">Account</a>
                <CustomMenu>Menu</CustomMenu>
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CustomClose onClick={() => setBurgerStatus(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                </CustomClose>
                <li><a href="#">Exisiting Inventory</a> </li>
                <li><a href="#">Used Inventory</a> </li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadster</a></li>
                <li><a href="#">Semi</a></li>
                <li><a href="#">Charging</a></li>
            </BurgerNav>
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
    justify-content: space-between;
    top: 0;
    left: 0; 
    right: 0;
    z-index: 1;
    
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
   
   @media(max-width: 785px) {
   display: none;
   }
   
   margin: 0 auto;
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
    }
    display: flex;
    align-items; center;
    gap: 24px;
    `;

const CustomMenu = styled.div`
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 600;
    cursor: pointer;
    
    `;

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: #fff;
    width: 300px;
    padding: 20px;
    list-style: none;
    display: flex;
    flex-direction: column;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    
    li{
    padding: 18px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    
    a{
        text-decoration: none;
    }
  }
    `;

const CustomClose = styled.div`
    width: 22px;
    align-self: flex-end;
    cursor: pointer;
    `;