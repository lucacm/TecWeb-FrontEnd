import React, { useState, useEffect } from "react";
import "../css/Match.css";
import { ReactComponent as ReactLogo } from "../assets/icons/seta.svg";
import { useLocation } from "react-router-dom";
import { TailSpin } from "@agney/react-loading";
import HomeEvents from "../components/homeEvents";
import MatchMenu from "../components/matchMenu";
import AwayEvents from "../components/awayEvents";
import history from "../history";
import axios from "axios";

export default function Match(props) {
  var [data, setData] = useState([]);
  var [awayTeam, setAwayTeam] = useState();
  var [homeTeam, setHomeTeam] = useState();
  var [score, setScore] = useState();
  var [date, setDate] = useState("");
  var [away_id, setAwayId] = useState();
  var [home_id, setHomeId] = useState();
  var [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState("");
  const location = useLocation();

  useEffect(() => {
    setId(props.location.state.id);
    setAwayTeam(props.location.state.awayTeam);
    setHomeTeam(props.location.state.homeTeam);
    setScore(props.location.state.score);
    setDate(props.location.state.date);
    setAwayId(props.location.state.awayId);
    setHomeId(props.location.state.homeId);
  }, [location]);

  useEffect(() => {
    if (id !== "") {
      const string =
        "http://livescore-api.com/api-client/scores/events.json?key=pspen0saaIX6HcUE&secret=9hSYKcugfodheluDNTSbUkl43jbKw5oF&id=" +
        id;
      axios.get(string).then((resp) => {
        if (Math.floor(resp.status / 100 === 2)) {
          console.log(resp);
          setData(resp.data);
          setSuccess(resp.success);
        }
      });
    }
  }, [id]);

  useEffect(() => {
    if (success !== "") {
      setLoading(false);
      console.log(data);
    }
  }, [success]);

  return (
    <div className="container">
      <ReactLogo className="arrow" onClick={() => history.push("/fixtures")} />
      <MatchMenu
        id={id}
        awayTeam={awayTeam}
        date={date}
        homeTeam={homeTeam}
        score={score}
        homeId={home_id}
        awayId={away_id}
      />
      <h1>
        {loading ? (
          <TailSpin className="title" width="80" />
        ) : date.length < 5 ? (
          <div>{date}</div>
        ) : (
          <div>
            <div className="data">
              {date.substring(8, 10)}/{date.substring(5, 7)}/
              {date.substring(0, 4)}
            </div>
            <div className="local">Estadio: {data.data.match.location}</div>
          </div>
        )}
      </h1>

      <div className="Placar">
        <div className="times">
          <h1>
            {score === undefined ? (
              <div>-</div>
            ) : (
              <div>{score.substring(0, 1)}</div>
            )}
          </h1>
          <h2>{homeTeam}</h2>
        </div>
        <h1>X</h1>
        <div className="times">
          <h1>
            {score === undefined ? (
              <div>-</div>
            ) : (
              <div>{score.substring(4, 5)}</div>
            )}
          </h1>
          <h2>{awayTeam}</h2>
        </div>
      </div>
      {loading ? (
        <TailSpin className="title" width="80" />
      ) : (
        <div className="squads">
          <HomeEvents data={data} />
          <AwayEvents data={data} />
        </div>
      )}
      <div className="center">
        <button
          onClick={() =>
            history.push({
              pathname: "/screens/historic",
              state: { homeId: home_id, awayId: away_id },
            })
          }
        >
          Últimas partidas de cada clube
        </button>
        <div className="matchEvents"></div>
      </div>
    </div>
  );
}
