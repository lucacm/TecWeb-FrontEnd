import React, { useState, useEffect } from "react";
import "../css/Match.css";
import axios from "axios";
import TeamStats from "../components/teamStats";
import AwayTeamStats from "../components/awayTeamStats";
import history from "../history";
import { TailSpin } from "@agney/react-loading";

import { ReactComponent as ReactLogo } from "../assets/icons/football.svg";
import { ReactComponent as ReactLogo1 } from "../assets/icons/soccer-field.svg";
import { ReactComponent as ReactLogo2 } from "../assets/icons/prancheta.svg";
import { useLocation } from "react-router-dom";

export default function Stats(props) {
  var [data, setData] = useState([]);
  var [awayTeam, setAwayTeam] = useState();
  var [homeTeam, setHomeTeam] = useState();
  var [score, setScore] = useState();
  var [date, setDate] = useState("");
  var [success, setSuccess] = useState("");
  var [away_id, setAwayId] = useState();
  var [home_id, setHomeId] = useState();
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const [id, setId] = useState("");

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
        "https://livescore-api.com/api-client/matches/stats.json?key=pspen0saaIX6HcUE&secret=9hSYKcugfodheluDNTSbUkl43jbKw5oF&match_id=" +
        id;
      axios.get(string).then((resp) => {
        if (Math.floor(resp.status / 100 === 2)) {
          // console.log(resp.data.data.lineup.home);
          // console.log(resp.data.data.lineup.away);
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
        <ReactLogo2 className="icone" />
      </div>
      <h1>Estatísticas de jogo</h1>
      {loading ? (
        <TailSpin className="title" width="80" />
      ) : (
        <div className="squads">
          <TeamStats Data={data} homeTeam={homeTeam} />
          <AwayTeamStats Data={data} awayTeam={awayTeam} />
        </div>
      )}
    </div>
  );
}
