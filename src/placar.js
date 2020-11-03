import React, { useState, useEffect } from "react";
import "./Fixtures.css";
import history from "./history";

export default function Placar(props) {
  const { awayTeam, date, homeTeam, score } = props;
  return (
    <div>
      <div className="date">
        Data: {date.substring(8, 10)}/{date.substring(5, 7)}/
        {date.substring(0, 4)}
      </div>
      <section className="grid-template-columns-3">
        <div className="item" onClick={() => history.push("/teste")}>
          {homeTeam.substring(0, 3).toUpperCase()}
        </div>
        <div className="placar">
          <div>{score.substring(0, 1)}</div>
          <div>X</div>
          <div>{score.substring(4, 5)}</div>
        </div>
        <div className="item">{awayTeam.substring(0, 3).toUpperCase()}</div>
      </section>
    </div>
  );
}
