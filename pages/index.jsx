import Head from 'next/head';
import React from 'react';
import Event from '../components/Event';
import Section from '../components/Section';
// import Repos from '../components/Repos';

const Home = () => [
  <Head>
    <title>Magnus Görlitz</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
  </Head>,
  <Section
    number="01"
    headline="Magnus Görlitz"
    description="I'm an experienced full-stack engineer, specialized in the
    React/NodeJS stack. I'm a big fan of agile practices and good teamwork.
    In my opinion, there's nothing more beautiful than a clean and minimal codebase.
    In my experience, one of the biggest challenges in growing teams is keeping
    things up to date and technical debt at bay."
  />,
  <Section number="02" headline="Work Experience">
    <Event
      title="Software Engineer"
      institution="CHECK24"
      description="Working on dockerized NodeJS microservices with MongoDB in
      the backend, React & Redux in the frontend."
      date="03.2019 - current"
    />
    <Event
      title="Working Student"
      institution="CHECK24"
      description="Worked as part of an agile development team with react &
      redux, nodejs, mongodb. Also did my bachelors thesis on integrating a
      message oriented middleware into the existing codebase."
      date="11.2017 - 03.2019"
    />
    <Event
      title="Software Engineer"
      institution="XING"
      description="Worked with React and Redux in an agile team of ~15 people
      and launched a new product which quickly gained huge traction thanks to
      lean startup practices."
      date="07.2017 - 10.2017"
    />
    <Event
      title="Working Student"
      institution="makandra"
      description="Maintained a lot of Rails projects, often LTS work on old
      versions of ruby/rails. Worked on applications for internal use as well as
      directly with the customer."
      date="07.2014 - 10.2014"
    />
    <Event
      title="Intern"
      institution="Autumn"
      description="Worked in an agile team directly with the founders on a
      product disrupting the online market with AI. Company later on got funding
      from Axel Springer Plug&Play Accelerator."
      date="01.2017 - 11.2017"
    />
  </Section>,
  <Section number="03" headline="Education">
    <Event
      title="B.Sc., Computer Science"
      institution="University of Augsburg"
      description="Focus of studies: Multimedia/Distributed Systems.
      Thesis title: 'Comparison of Message Oriented Middlewares'"
      date="10.2014 - 03.2019"
    />
  </Section>,
  <Section
    number="04"
    headline="Skills"
    description="I try to learn new things whenever I can. In my current team,
    we often provide packages for other teams which makes it essential for me to
    know all the used libraries in detail."
  >
    <ul className="row list-unstyled">
      <li className="col-sm-3 col-6 pb-3">React</li>
      <li className="col-sm-3 col-6 pb-3">Redux</li>
      <li className="col-sm-3 col-6 pb-3">NodeJS</li>
      <li className="col-sm-3 col-6 pb-3">GraphQl</li>
      <li className="col-sm-3 col-6 pb-3">rabbitMQ</li>
      <li className="col-sm-3 col-6 pb-3">MongoDB</li>
      <li className="col-sm-3 col-6 pb-3">Docker</li>
      <li className="col-sm-3 col-6 pb-3">Ansible</li>
      <li className="col-sm-3 col-6 pb-3">Jest</li>
      <li className="col-sm-3 col-6 pb-3">Babel</li>
      <li className="col-sm-3 col-6 pb-3">Webpack</li>
      <li className="col-sm-3 col-6 pb-3">Storybook</li>
    </ul>
  </Section>,


];

export default Home;
