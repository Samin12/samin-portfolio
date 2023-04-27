import React, { Component } from 'react';
import styled from 'styled-components';
import TextContent from './TextContent';
import ImageContent from './ImageContent';

const Container = styled.div`
    display: flex;
    flex-flow: row nowrap;
    /* border: 1px dashed red; */
`;

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vh: 0,
      slideNumber: 0,
    };
    this.pageSplitTimes = 1.4;
    this.lastScrollTop = 0;
    this.scrollDirectionDown = true;
    this.handleScroll = this.handleScroll.bind(this);
    this.workDetails = [
      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
      },
      {
        number: 'Side Project 01',
        projectName: 'Watch This',
        projectDesc: 'Watchthis.dev Chat GPT is a cutting-edge AI-powered movie recommendation app that engages users in a friendly chat interface to help them discover their next favorite movie.',
        projectType: 'WEB APP',
        roles: ['Full Stack Developer'],
      },
      {
        number: 'Side Project 02',
        projectName: 'RoomGPT',
        projectDesc: 'RoomGPT is a revolutionary app that utilizes advanced AI technology to allow users to easily visualize and redesign their room, bringing their interior design dreams to life.',
        projectType: 'WEB APP',
        roles: ['Full Stack Developer'],
      },
      {
        number: 'Side Project 03',
        projectName: 'AI Tool Search',
        projectDesc: 'AI Tool Search Engine is an innovative platform that streamlines the search for AI-powered tools and software, making it easier for businesses and developers to find the right AI solutions to meet their needs.',
        projectType: 'CHAT BOT/ WEB APP',
        roles: ['Full Stack Developer'],
      },
      {
        number: 'Side Project 04',
        projectName: 'AI Photo Enhancer',
        projectDesc: 'AI Photo Enhancer is a state-of-the-art image editing tool that uses powerful AI algorithms to enhance and transform ordinary photos into stunning, high-quality works of art.',
        projectType: 'WEB APP',
        roles: ['Full Stack Developer'],
      },
      {
        number: 'Side Project 05',
        projectName: 'Onelink',
        projectDesc: 'Onelink is an experimental link-in-bio tool, where the data lives in the URL',
        projectType: 'WEB APP',
        roles: ['Full Stack Developer'],
      },
      {
        number: 'Side Project 06',
        projectName: 'GPT Trader Bot',
        projectDesc: 'GPT Stock Trader Bot is an intelligent AI-powered tool that analyzes and predicts market trends, providing users with accurate insights and suggestions to make informed trading decisions',
        projectType: 'WEB APP',
        roles: ['Full Stack Developer'],
      },
      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
      },
    ];
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.setState(
      {
        vh: Math.round(
          window.document.documentElement.clientHeight * this.pageSplitTimes,
        ),
      },
    );
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const { body, documentElement } = event.srcElement;
    const { vh, slideNumber } = this.state;
    const scrollDistance = Math.max(body.scrollTop, documentElement.scrollTop);
    if (scrollDistance > this.lastScrollTop) {
      this.scrollDirectionDown = true;
    } else {
      this.scrollDirectionDown = false;
    }
    this.lastScrollTop = scrollDistance;
    // console.log(scrollDistance);

    if (Math.floor(scrollDistance / vh) !== slideNumber
      && slideNumber < this.workDetails.length - 1) {
      this.setState({ slideNumber: Math.floor(scrollDistance / vh) });
    } else if (slideNumber === this.workDetails.length - 1
      && (Math.floor(scrollDistance / vh) < slideNumber)) {
      this.setState({ slideNumber: Math.floor(scrollDistance / vh) });
    }
  }

  changeTextContentBasedOnScroll() {
    const { slideNumber } = this.state;
    const refresh = true;
    return (
      <TextContent
        number={this.workDetails[slideNumber].number}
        projectName={this.workDetails[slideNumber].projectName}
        projectDesc={this.workDetails[slideNumber].projectDesc}
        projectType={this.workDetails[slideNumber].projectType}
        roles={this.workDetails[slideNumber].roles}
        refreshToggle={refresh}
      />
    );
  }

  render() {
    return (
      <Container>
        {this.changeTextContentBasedOnScroll()}
        <ImageContent pageSplitTimes={this.pageSplitTimes} />
      </Container>
    );
  }
}

export default Work;
