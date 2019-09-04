import React from "react";
import DataPoint from '../components/DataPoint'

const Home = () => (
  <div>
    <title>Magnus Görlitz - CV</title>
    <div className="cv">
      <div className="skills">
        <h1>Skills</h1>
        <ul>
          <li>NodeJs</li>
          <li>React</li>
          <li>Redux</li>
          <li>MongoDB</li>
        </ul>
        <p>
          I'm an experienced full-stack developer, doing React, NodeJS and
          Rails. I use this toolset to create reactive, blazing fast and
          rock-solid web-applications. Also have a look at my GitHub profile to
          get a better idea of what I'm up to.
        </p>
      </div>
      <div className="experience">
        <h1>Work experience</h1>
        <DataPoint
          headline="CHECK24 Vergleichsportal"
          subline="Junior Software Engineer"
          image="https://www.check24.de/assets/images/web/misc/download/Logo_Check24.png"
          date="11.2017 - now"
          description="Worked as part of an agile development team with react & redux, nodejs, mongodb. 
          Also did my bachelors thesis on message oriented middlewares."
        ></DataPoint>  <DataPoint
          headline="CHECK24 Vergleichsportal"
          subline="Junior Software Engineer"
          image="https://www.check24.de/assets/images/web/misc/download/Logo_Check24.png"
          date="11.2017 - now"
          description="Worked as part of an agile development team with react & redux, nodejs, mongodb. 
          Also did my bachelors thesis on message oriented middlewares."
        ></DataPoint>
      </div>
    </div>

    <style jsx>{``}</style>
  </div>
);

export default Home;
