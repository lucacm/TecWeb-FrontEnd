import React, { useState, useEffect } from "react";
import "../css/Fixtures.css";
import Placar from "../components/placar";
import axios from "axios";
import { TailSpin } from "@agney/react-loading";

export default function Fixtures() {
  var [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "http://livescore-api.com/api-client/scores/history.json?key=pspen0saaIX6HcUE&secret=9hSYKcugfodheluDNTSbUkl43jbKw5oF&competition_id=244&from=2020-10-20"
      )
      .then((resp) => {
        if (Math.floor(resp.status / 100 === 2)) {
          console.log(resp.data.data.match);
          setData(resp.data.data.match);
          setLoading(false);
        }
      });
  }, []);
  return (
    <div className="container">
      <h2 className="texto">Jogos Passados</h2>
      {loading ? (
        <TailSpin width="80" />
      ) : (
        data.map((match, index) => {
          return (
            <Placar
              awayTeam={match.away_name}
              date={match.date}
              homeTeam={match.home_name}
              score={match.ft_score}
              key={match.id}
            />
          );
        })
      )}
    </div>
  );
}
