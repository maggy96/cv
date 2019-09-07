import React from 'react';
import Event from '../components/Event';
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
      <li className="col-md-3 col-6 pb-3">React</li>
      <li className="col-md-3 col-6 pb-3">Redux</li>
      <li className="col-md-3 col-6 pb-3">NodeJS</li>
      <li className="col-md-3 col-6 pb-3">GraphQl</li>
      <li className="col-md-3 col-6 pb-3">rabbitMQ</li>
      <li className="col-md-3 col-6 pb-3">MongoDB</li>
      <li className="col-md-3 col-6 pb-3">Docker</li>
      <li className="col-md-3 col-6 pb-3">Ansible</li>
    </ul>
  </Section>,
  <Section number="03" headline="Education">
    <Event
      title="B.Sc., Computer Science"
      institution="University of Augsburg"
      description="Focus of studies: Multimedia/Distributed Systems. Thesis: 'Comparison of Message Oriented Middlewares'"
      date="10.2014 - 03.2019"
    />
    <Event
      title="Machine Learning"
      institution="Stanford Online"
      description="Micro-degree in machine learning under Associate Professor Andrew Ng. Certificate available at: https://www.coursera.org/account/accomplishments/certificate/CK75N37E3TKY"
      date=""
    />
  </Section>,
  <Section number="04" headline="Work Experience">
    <Event
      title="Junior Software Engineer"
      institution="CHECK24 Vergleichsportal"
      description="Full-stack React/NodeJS development."
      date="03.2019 - current"
    />
    <Event
      title="Working Student"
      institution="CHECK24 Vergleichsportal"
      description="Worked as part of an agile development team with react & redux, nodejs, mongodb.
      Also did my bachelors thesis on message oriented middlewares."
      date="11.2017 - 03.2019"
    />
    <Event
      title="Software Engineer"
      institution="XING SE"
      description="Worked with React and Redux in an agile team of ~15 people and launched a new product which quickly gained huge traction thanks to lean startup practices."
      date="07.2017 - 10.2017"
    />
    <Event
      title="Working Student"
      institution="makandra GmbH"
      description="Maintained a lot of Rails projects, often lts work on old versions of ruby/rails. Also worked on applications for internal use and directly with the customer."
      date="01.2017 - 11.2017"
    />
  </Section>,
];

export default Home;
