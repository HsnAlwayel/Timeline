import React from "react"
import TimelineData from "../data";
import TimelineItem from "./TimelineItem";

const TimeLine = () => TimelineData.length > 0 && (
    <div className="timeline-container">
        {TimelineData.map((data, index) => (
            <TimelineItem data={data} key={index} />
        ))} </div>
);

export default TimeLine;