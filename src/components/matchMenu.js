import React, { useState, useEffect } from "react";
import "../css/Match.css";
import { ReactComponent as ReactLogo } from "../assets/icons/football.svg";
import { ReactComponent as ReactLogo1 } from "../assets/icons/soccer-field.svg";
import { ReactComponent as ReactLogo2 } from "../assets/icons/prancheta.svg";
import history from "../history";

export default function MatchMenu(props) {
  const { id, awayTeam, date, homeTeam, score, home_id, away_id } = props;
  //   console.log(data.data.event);

  return (
    <div className="menu">
      <ReactLogo
        className="icone"
        onClick={() =>
          history.push({
            pathname: "/match",
            state: {
              id: id,
              awayTeam: awayTeam,
              date: date,
              homeTeam: homeTeam,
              score: score,
              homeId: home_id,
              awayId: away_id,
            },
          })
        }
      />
      <div>|</div>
      <ReactLogo1
        className="icone1"
        onClick={() =>
          history.push({
            pathname: "/lineup",
            state: {
              id: id,
              awayTeam: awayTeam,
              date: date,
              homeTeam: homeTeam,
              score: score,
              homeId: home_id,
              awayId: away_id,
            },
          })
        }
      />
      <div>|</div>
      <ReactLogo2
        className="icone"
        onClick={() =>
          history.push({
            pathname: "/stats",
            state: {
              id: id,
              awayTeam: awayTeam,
              date: date,
              homeTeam: homeTeam,
              score: score,
              homeId: home_id,
              awayId: away_id,
            },
          })
        }
      />
    </div>
  );
}
