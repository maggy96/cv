import React from 'react';
// import Repos from '../components/Repos';
import Section from '../components/Section';
import './index.sass';

const Home = () => [
  <Section
    number="01"
    headline="Magnus Görlitz"
    description="I'm an experienced full-stack developer, doing React, NodeJS and Rails. I use this toolset to create reactive, blazing fast and rock-solid web-applications. Also have a look at my GitHub profile to get a better idea of what I'm up to."
  />,
  <Section
    number="02"
    headline="Skills"
    description="I'm an experienced full-stack developer, doing React, NodeJS and Rails. I use this toolset to create reactive, blazing fast and rock-solid web-applications. Also have a look at my GitHub profile to get a better idea of what I'm up to."
  >
    <ul className="row list-unstyled">
      <li className="col-md-3 col-6">React</li>
      <li className="col-md-3 col-6">Redux</li>
      <li className="col-md-3 col-6">NodeJS</li>
      <li className="col-md-3 col-6">GraphQl</li>
      <li className="col-md-3 col-6">rabbitMQ</li>
      <li className="col-md-3 col-6">MongoDB</li>
      <li className="col-md-3 col-6">Docker</li>
      <li className="col-md-3 col-6">Ansible</li>
    </ul>
  </Section>,
];

export default Home;
