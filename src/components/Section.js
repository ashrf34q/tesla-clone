import styled from "styled-components";
import React from "react";
import {Fade} from "react-reveal";

function Section(props) {
    return(
      <Wrap bgImage={props.backgroundImg}>
          <Fade left>
          <ItemText>
              <h1>{props.title}</h1>
              <p>{props.description}</p>
          </ItemText>
          </Fade>
          <Buttons>
              <Fade bottom>
          <ButtonGroup>
              <LeftButton>{props.leftBtnText}</LeftButton>
              {props.rightBtnText &&
                  <RightButton>{props.rightBtnText}</RightButton>
              }
              </ButtonGroup>
              </Fade>
          <DownArrow src="/images/down-arrow.svg" />
          </Buttons>
      </Wrap>
    );
}

export default Section;

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: ${props => `url("/images/${props.bgImage}")`};
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    `;

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 8px;
    `;

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 32px;
    gap: 8px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
    `;

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    text-transform: uppercase;
    opacity: 0.85;
    cursor: pointer;
    `;

const RightButton = styled(LeftButton)`
    background-color: #fff;
    color: #000;
    opacity: 0.65;
    `;

const DownArrow = styled.img`
    height: 44px;
    animation: animateDown infinite 1.5s;
    overflow-x: hidden;
    cursor: pointer;
    `;

const Buttons = styled.div`
    text-align: center;
    `;