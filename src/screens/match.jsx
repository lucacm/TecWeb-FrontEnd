import React, { useState, useEffect } from "react";
import "../css/Match.css";
import axios from "axios";
import { ReactComponent as ReactLogo } from "../assets/icons/football.svg";
import { ReactComponent as ReactLogo1 } from "../assets/icons/soccer-field.svg";
import { ReactComponent as ReactLogo2 } from "../assets/icons/prancheta.svg";
import { TailSpin } from "@agney/react-loading";
import { useLocation } from "react-router-dom";
import history from "../history";

export default function Match(props) {
  var [Data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  var [awayTeam, setAwayTeam] = useState();
  var [homeTeam, setHomeTeam] = useState();
  var [score, setScore] = useState();
  var [date, setDate] = useState();
  var [id, setid] = useState();
  const location = useLocation();
  //   let date = "";
  //   async function bla() {
  //     setid(props.location.state.id);
  //     setAwayTeam(props.location.state.awayTeam);
  //     setHomeTeam(props.location.state.homeTeam);
  //     setScore(props.location.state.score);
  //     setDate(props.location.state.date);
  //   }

  useEffect(() => {
    setid(props.location.state.id);
    setAwayTeam(props.location.state.awayTeam);
    setHomeTeam(props.location.state.homeTeam);
    setScore(props.location.state.score);
    setDate(props.location.state.date);
    // date = props.location.state.date;
    // console.log("AAAAAA", date);
  }, [location]);
  //   bla();
  console.log(id, awayTeam, score, date);
  //   useEffect(() => {
  //     axios.get("").then((resp) => {
  //       if (Math.floor(resp.status / 100 === 2)) {
  //         console.log(resp.data.data.match);
  //         setData(resp.data.data.match);
  //         setLoading(false);
  //       }
  //     });
  //   }, []);
  return (
    <div className="container">
      <div className="menu">
        <ReactLogo className="icone" />
        <div>|</div>
        <ReactLogo1
          className="icone1"
          onClick={() =>
            history.push({
              pathname: "../lineup",
              state: { id: id },
            })
          }
        />
        <div>|</div>
        <ReactLogo2 className="icone" />
      </div>
      <h1 className="data">
        {date.length < 5 ? (
          <div>{date}</div>
        ) : (
          <div>
            {date.substring(8, 10)}/{date.substring(5, 7)}/
            {date.substring(0, 4)}
          </div>
        )}
      </h1>
      <div className="Placar">
        <div className="times">
          <h1>
            {score == undefined ? (
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
            {score == undefined ? (
              <div>-</div>
            ) : (
              <div>{score.substring(4, 5)}</div>
            )}
          </h1>
          <h2>{awayTeam}</h2>
        </div>
      </div>
    </div>
  );
}
