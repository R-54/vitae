import React, { Component } from 'react';

import '../css/vitae.css';

import NavBar from './NavBar';
import CollapsibleContent from './CollapsibleContent';
import Content from './Content';

class Vitae extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: true,
      content: [
        {
          title: 'Education',
          body: [
            {
              subtitle: 'Bachelor Degree in Computer Science',
              info: 'Universidad Nacional Autonoma de Mexico / 2015 - Current',
            },
            {
              subtitle: 'High School',
              info: 'Escuela Nacional Preparatoria 6 / 2009 – 2013',
            },
          ],
        },
        {
          title: 'Courses',
          body: [
            {
              subtitle: 'Linux Server Administration Course',
              info: 'Universidad Nacional Autónoma de México / 30 hrs.',
            },
            {
              subtitle: 'Scrum Fundamentals Certified',
              info: 'SCRUMstudy',
            },
          ],
        },
        {
          title: 'Work experience',
          body: [
            {
              subtitle: 'Globant\nJavascript Developer / April 2017 - Current',
              info: 'At Globant, i build the Citibanamex Account opening and Marketplace web app. Here, i work in an agile team of more than 70 people, using ReactJS, Angular 1 and Javascript to develop the web applications and using Scrum framework for effective team collaboration.',
            },
            {
              subtitle: '15 Rooftop\nReact Developer / February 2017 - April 2017',
              info: 'At 15 Rooftop, i build an administrative hybrid app. Here, i lead a team of 4 people, using ReactJS, React Native, Meteor, Node and Google Cloud to develop the hybrid application for Web, IOS and Android platforms.',
            },
            {
              subtitle: 'TATA Consultancy Services\nSalesforce Developer / October 2016 - March 2017',
              info: 'At TATA, i use Salesforce ecosystem. Here, i work in an agile team of 5 people, using Apex and Javascript in the Salesforce ecosystem to develop the client needs and using Scrum framework for effective team collaboration.',
            },
            {
              subtitle: 'Aeromexico Aerovias S.A de C.V\nAssistant / April 2015 – July 2015',
              info: 'At Aeromexico, i work as an assistant. Here, i help customers to reach their flights on time and prevent customers to get lose in the airport.',
            },
          ],
        },
      ],
    };
  }
  handleCollapse = () => {
    this.setState((prevState) => ({ collapse: !prevState.collapse }));
  }
  render() {
    return (
      <div className='vitae' >
        <NavBar
          handleCollapse={this.handleCollapse}
          collapse={this.state.collapse}
        />
        <CollapsibleContent
          collapse={this.state.collapse}
        />
        <Content
          collapse={this.state.collapse}
          content={this.state.content}
        />
      </div>
    );
  }
}

export default Vitae;
