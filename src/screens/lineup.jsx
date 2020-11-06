import React, { useState, useEffect } from "react";
import "../css/Match.css";
import axios from "axios";
import { ReactComponent as ReactLogo } from "../assets/icons/football.svg";
import { ReactComponent as ReactLogo1 } from "../assets/icons/soccer-field.svg";
import { ReactComponent as ReactLogo2 } from "../assets/icons/prancheta.svg";
import { useLocation } from "react-router-dom";

export default function Lineup(props) {
  const location = useLocation();
  const [id, setId] = useState("");

  useEffect(() => {
    setId(props.location.state.id);
  }, [location]);

  useEffect(() => {

    if (id !== ""){

      const string =
      "http://livescore-api.com/api-client/matches/lineups.json?key=pspen0saaIX6HcUE&secret=9hSYKcugfodheluDNTSbUkl43jbKw5oF&match_id=" + id;
      axios.get(string).then((resp) => {
        if (Math.floor(resp.status / 100 === 2)) {
          console.log(resp);
        }
      });
    }
  }, [id])

  return (
    <div className="container">
      <div className="menu">
        <ReactLogo className="icone" />
        <div>|</div>
        <ReactLogo1 className="icone1" />
        <div>|</div>
        <ReactLogo2 className="icone" />
      </div>
    </div>
  );
}
