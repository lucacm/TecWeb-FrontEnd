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
        "https://livescore-api.com/api-client/fixtures/matches.json?&key=pspen0saaIX6HcUE&secret=9hSYKcugfodheluDNTSbUkl43jbKw5oF&competition_id=244"
      )
      .then((resp) => {
        if (Math.floor(resp.status / 100 === 2)) {
          console.log(resp.data.data.fixtures);
          setData(resp.data.data.fixtures);
          setLoading(false);
        }
      });
  }, []);
  return (
    // <div>Icons made by <a href="https://www.flaticon.com/authors/dinosoftlabs" title="DinosoftLabs">DinosoftLabs</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    // <div>Icons made by <a href="https://www.flaticon.com/authors/mavadee" title="mavadee">mavadee</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    // <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    <div className="container">
      <div className="title">
        <h2>Próximos Jogos</h2>
      </div>
      {loading ? (
        <TailSpin width="80" />
      ) : (
        Data.map((match, index) => {
          return (
            <Placar
              awayTeam={match.away_name}
              date={match.date}
              homeTeam={match.home_name}
              score={match.score}
              key={match.id}
            />
          );
        })
      )}
    </div>
  );
}
