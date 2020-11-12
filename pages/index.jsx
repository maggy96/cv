import Head from 'next/head';
import React from 'react';
import Event from '../components/Event';
import Section from '../components/Section/Section';
import Skill from '../components/Skill/Skill';
import './index.scss';

const Home = () => [
  <Head>
    <title>Magnus Görlitz</title>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossOrigin="anonymous"
    />
  </Head>,
  <Section headline="Magnus Görlitz ✌️">
    <div>
      <p>
        I'm a
        {' '}
        <b className="text-highlight">software engineer</b>
        {' '}
        in Stockholm,
        currently specialized in the MERN stack and Java. I strongly believe in
        agile practices and good teamwork. I'm passionate about growth, learning
        and empowering awesome products to lead the market.
      </p>
      <Skill>React</Skill>
      <Skill>GraphQL</Skill>
      <Skill>MongoDB</Skill>
      <Skill>Redux</Skill>
      <Skill>Docker</Skill>
      <Skill>TypeScript</Skill>
      <Skill>Kafka</Skill>
      <Skill>Java</Skill>
      <Skill>Spring Boot</Skill>
      <Skill>Redis</Skill>
      <Skill>Jenkins</Skill>
      <Skill>Grafana & Prometheus</Skill>
      <Skill>NodeJS</Skill>
      <Skill>AWS</Skill>
      <Skill>Microservices</Skill>
    </div>
  </Section>,
  <Section headline="Work Experience">
    <Event
      title="Engineer"
      institution="Klarna"
      description="Kicking off a new B2B-focused product team in the Purchase
      Experience Domain. Optimization for quality, flow, fast feedback and time to
      market. Focus on end-to-end ownership, continuous improvement, testing,
      monitoring and experimentation."
      date="01.2020 - current"
      location="Stockholm, SE"
    />
    <Event
      title="Software Engineer"
      institution="CHECK24"
      description="Working as part of an agile development team on dockerized
      NodeJS microservices with MongoDB in the backend, React and Redux in the
      frontend. Also did my bachelors thesis on integrating a message oriented
      middleware into the existing codebase."
      date="11.2017 - 01.2020"
      location="Munich, DE"
    />
    <Event
      title="Working Student"
      institution="makandra GmbH"
      description="Specialized Ruby/Rails maintenance and lts work. Some
      applications were over 10 years old. Also worked on applications for
      internal use and directly with the customer."
      date="01.2017 - 11.2017"
      location="Augsburg, DE"
      ></Event>
    <Event
      last
      title="Intern"
      institution="XING"
      description="Worked with React and Redux in an agile team and launched a
      new B2B product which quickly gained huge traction thanks to lean startup
      practices. Completed intense methodology and soft skill trainings."
      date="07.2017 - 10.2017"
      location="Hamburg, DE"
    />
  </Section>,
  <Section headline="Education">
    <Event
      last
      title="B.Sc., Computer Science"
      institution="University of Augsburg"
      description="Major in Multimedia. Thesis submitted to chair
      of Software Methodologies for Distributed Systems, title: 'Comparison of
      current implementations of Message Oriented Middlewares'"
      date="10.2014 - 02.2019"
      location="Augsburg, DE"
    />
  </Section>,
];

export default Home;
