import React, { useState, useEffect } from "react";
import "../css/Match.css";
import axios from "axios";
import Squads from "../components/squads";
import { TailSpin } from "@agney/react-loading";
import { useLocation } from "react-router-dom";
import MatchMenu from "../components/matchMenu";
import history from "../history";
import { ReactComponent as ReactLogo } from "../assets/icons/seta.svg";

export default function Lineup(props) {
  var [homeData, setHomeData] = useState([]);
  var [awayData, setAwayData] = useState([]);
  var [awayTeam, setAwayTeam] = useState();
  var [homeTeam, setHomeTeam] = useState();
  var [score, setScore] = useState();
  var [date, setDate] = useState("");
  var [team, setTeam] = useState("");
  var [away_id, setAwayId] = useState();
  var [home_id, setHomeId] = useState();
  const [escalacao, setEscalacao] = useState(true);
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
        "http://livescore-api.com/api-client/matches/lineups.json?key=pspen0saaIX6HcUE&secret=9hSYKcugfodheluDNTSbUkl43jbKw5oF&match_id=" +
        id;
      axios.get(string).then((resp) => {
        if (Math.floor(resp.status / 100 === 2)) {
          // console.log(string);
          // console.log(resp.data.data.lineup.away);
          setHomeData(resp.data.data.lineup.home);
          setAwayData(resp.data.data.lineup.away);
          setTeam(resp.data.data.lineup.home.team.name);
        } else {
          setEscalacao(false);
        }
      });
    }
  }, [id]);

  useEffect(() => {
    if (team !== "") {
      setLoading(false);
      console.log(homeData);
    }
  }, [team]);
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

      <h1>Escalação</h1>
      {loading ? (
        <TailSpin className="title" width="80" />
      ) : (
        <div className="squads">
          <Squads Data={homeData} />
          <Squads Data={awayData} />
        </div>
      )}
    </div>
  );
}
