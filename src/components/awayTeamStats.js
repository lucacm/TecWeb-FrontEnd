import React, { useState, useEffect } from "react";
import "../css/Match.css";

export default function TeamStats(props) {
  const { Data, awayTeam } = props;
  //   console.log(Data.data);

  return (
    <div className="teamstats">
      <h3>{awayTeam}</h3>
      {Object.values(Data.data).map((info, index) => {
        return (
          <p>
            {Object.keys(Data.data)[index].replace("_", " ")}:{" "}
            {info.substr(info.indexOf(":") + 1, info.lenght)}
          </p>
        );
      })}
    </div>
  );
}
