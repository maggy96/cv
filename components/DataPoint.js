import React from "react";

const DataPoint = ({ image, headline, subline, description, date }) => (
  <div className="DataPoint">
    <img src={image} className="DataImage"></img>
    <div className="DataText">
      <p className="DataHeadline">{headline}</p>
      <p className="DataDate">{date}</p>
      <p className="DataSubline"> {subline} </p>
      <p className="DataDesription">{description}</p>
    </div>
    <style jsx>{`
      .DataPoint {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.9);
        font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
          helvetica, helvetica neue, Ubuntu, segoe ui, arial, sans-serif;
        border: 1px solid #ececec;
        display: flex;
        flex: 0 1 auto;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: center;
        width: 30rem;
      }
      .DataImage {
        flex: auto;
        max-height: 60px;
        max-width: 60px;
        padding: 0 1rem;
      }
      .DataText {
        padding: 1rem;
        flex: auto;
        max-width: 20rem;
      }
      .DataHeadline {
        font-size: 16px;
        font-weight: 600;
        margin: 0;
      }
      .DataSubline {
        font-size: 14px;
        font-weight: 400;
        margin: 0;
      }
      .DataDate {
        color: rgba(0, 0, 0, 0.6);
        margin: 0;
      }
    `}</style>
  </div>
);
export default DataPoint;
