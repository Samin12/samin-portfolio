import React, { Component } from 'react';
import styled from 'styled-components';
import device from '../../../Assets/Responsive/breakpoints';

const Container = styled.section`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    height:50vh;
    width:100%;
    background-color: white;
    /* border: 1px solid blue; */
`;

const Name = styled.div`
  font-family: 'Valencia';
  text-align:center;
  padding-right: 10px;
  @media ${device.mobileS} {
    font-size: 70px;
  }
  @media ${device.mobileM} {
    font-size: 80px;
  }
  @media ${device.mobileL} {
    font-size: 90px;
  }
  @media ${device.tablet} {
    font-size: 150px;
  }
  @media ${device.laptop} {
    font-size: 160px;
  }
`;

const Title = styled.div`
  font-family: 'AvenirRoman';
  text-align:center;
  margin-top: 10px;
  @media ${device.mobileS} {
    font-size: 13px;
  }
  @media ${device.mobileM} {
    font-size: 15px;
  }
  @media ${device.mobileL} {
    font-size: 17px;
  }
  @media ${device.tablet} {
    font-size: 30px;
  }
  @media ${device.laptop} {
    font-size: 35px;
  }
`;

const Button = styled.a`
    display: inline-block;
    padding: 10px 20px;
    background-color: #1a73e8;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    font-size: 16px;
    margin-top: 10px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0d63d0;
    }
`;

class NameAndJobTitle extends Component {
  render() {
    return (
      <Container>
        <Name>Samin Yasar</Name>
        <Title>Software Development Engineer</Title>
        <Button href="https://drive.google.com/file/d/1yR_ZMBoBjwEoiF3yWrRQ3Pk0V6dd-WVY/view" target="_blank" rel="noopener noreferrer">
          Resumé
        </Button>
      </Container>
    );
  }
}

export default NameAndJobTitle;
