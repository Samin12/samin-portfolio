import React, { Component } from 'react';
import styled from 'styled-components';
import NameReveal from './NameReveal';
import TitleReveal from './TitleReveal';

const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    height:100vh;
    width:100%;
    background-color: white;
    /* border: 1px solid blue; */
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
        <NameReveal text="Samin Yasar" fontFam="Valencia" timeDelay={500} />
        <br />
        <TitleReveal text="Software Development Engineer" fontFam="AvenirRoman" timeDelay={1300} />
        <Button href="https://drive.google.com/file/d/1yR_ZMBoBjwEoiF3yWrRQ3Pk0V6dd-WVY/view" target="_blank" rel="noopener noreferrer">
          <TitleReveal text="Resumé" fontFam="Bold" timeDelay={2000} />
        </Button>
      </Container>
    );
  }
}

export default NameAndJobTitle;
