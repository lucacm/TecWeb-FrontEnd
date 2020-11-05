import React, { useState, useEffect } from "react";
import "../css/Fixtures.css";
import history from "../history";

export default function Placar(props) {
  const { awayTeam, date, homeTeam, score, chave } = props;
  console.log(date);
  return (
    <div className="title">
      <div className="date">
        {date.length < 5 ? (
          <div>Tempo : {date}</div>
        ) : (
          <div>
            Data: {date.substring(8, 10)}/{date.substring(5, 7)}/
            {date.substring(0, 4)}
          </div>
        )}
      </div>
      <section className="grid-template-columns-3">
        <div className="item1" onClick={() => history.push("/liveFixtures")}>
          {homeTeam.substring(0, 3).toUpperCase()}
        </div>

        {score == undefined ? (
          <div
            className="placar"
            onClick={() =>
              history.push({
                pathname: "/match",
                state: {
                  id: chave,
                  awayTeam: awayTeam,
                  date: date,
                  homeTeam: homeTeam,
                  score: score,
                },
              })
            }
          >
            <div>-</div>
            <div>X</div>
            <div>-</div>
          </div>
        ) : (
          <div
            className="placar"
            onClick={() =>
              history.push({
                pathname: "/match",
                state: {
                  id: chave,
                  awayTeam: awayTeam,
                  homeTeam: homeTeam,
                  date: date,
                  score: score,
                },
              })
            }
          >
            {" "}
            <div>{score.substring(0, 1)}</div>
            <div>X</div>
            <div>{score.substring(4, 5)}</div>
          </div>
        )}
        <div className="item2" onClick={() => history.push("/futureFixtures")}>
          {awayTeam.substring(0, 3).toUpperCase()}
        </div>
      </section>
    </div>
  );
}
