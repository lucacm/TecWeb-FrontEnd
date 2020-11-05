import React, { useState, useEffect } from "react";
import "../css/Fixtures.css";
import axios from "axios";
import Placar from "../components/placar";
import { TailSpin } from "@agney/react-loading";

export default function LiveFixtures() {
  var [Data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "http://livescore-api.com/api-client/scores/live.json?key=pspen0saaIX6HcUE&secret=9hSYKcugfodheluDNTSbUkl43jbKw5oF&competition_id=244&from=2020-10-20"
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
      <h2>Ao vivo</h2>
      {loading ? (
        <TailSpin width="80" />
      ) : (
        Data.map((match, index) => {
          return (
            <Placar
              awayTeam={match.away_name}
              date={match.time}
              homeTeam={match.home_name}
              score={match.score}
              key={match.id}
            />
          );
        })
      )}
      {/* <div className="title">
        <h2>LIVE GAMES</h2>
      </div>
      {
      loading 
      ?
      <TailSpin width="80" />
      :
      Data.map((match, index) => {
        return (
          <Placar
            awayTeam={match.away_name}
            date={match.time}
            homeTeam={match.home_name}
            score={match.score}
            key={match.id}
          />
        );
      })} */}
    </div>
  );
}
