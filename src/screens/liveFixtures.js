import React, { useState, useEffect } from "react";
import "../css/Fixtures.css";
import axios from "axios";
import Placar from "../components/placar";
import { TailSpin } from "@agney/react-loading";
import history from "../history";
import { useLocation } from "react-router-dom";
import { ReactComponent as ReactLogo } from "../assets/icons/seta.svg";


export default function LiveFixtures(props) {
  var [Data, setData] = useState([]);
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(true);
	const [idUser, setIdUser] = useState("");
  const location = useLocation();

  useEffect(() => {
    setId(props.location.state.id);
  }, [location]);

  useEffect(() => {
    axios
      .get(
        "https://livescore-api.com/api-client/scores/live.json?key=SRZOUsPuvEwIkhxO&secret=EHaP6he0Yd38axu3otSjWHNrlkaFBHug&competition_id=244&from=2020-10-20"
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
      <ReactLogo
            className="arrow"
            onClick={() =>
              history.push({
                pathname: "/fixtures",
                state: { id: idUser },
              })
            }
          />
      <div className="title">
        <h2>Ao vivo</h2>
      </div>
      <div className="fixturesMenu">
        <div
          className="fixtureButton"
          onClick={() =>
            history.push({
              pathname: "/futureFixtures",
              state: { id: id },
            })
          }
        >
          Próximos Jogos
        </div>
        <div
          className="fixtureButton"
          onClick={() =>
            history.push({
              pathname: "/fixtures",
              state: { id: id },
            })
          }
        >
          Jogos Passados
        </div>
      </div>
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
    </div>
  );
}
