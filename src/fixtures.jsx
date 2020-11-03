import React, { useState, useEffect } from "react";
import "./Fixtures.css";
import Placar from "./placar";
import axios from "axios";

export default function Fixtures() {
  var [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://livescore-api.com/api-client/scores/history.json?key=pspen0saaIX6HcUE&secret=9hSYKcugfodheluDNTSbUkl43jbKw5oF&competition_id=244&from=2020-10-20"
      )
      .then((resp) => {
        if (Math.floor(resp.status / 100 === 2)) {
          console.log(resp.data.data.match);
          setData(resp.data.data.match);
        }
      });
  }, []);
  return (
    <div>
      <h2 className="texto">Jogos Passados</h2>
      {data.map((match, index) => {
        return (
          <Placar
            awayTeam={match.away_name}
            date={match.date}
            homeTeam={match.home_name}
            score={match.ft_score}
            key={match.id}
          />
        );
      })}
    </div>
  );
}
