import React, { useState, useEffect } from "react";
import "../css/Match.css";
import axios from "axios";
import { ReactComponent as ReactLogo } from "../assets/icons/football.svg";
import { ReactComponent as ReactLogo1 } from "../assets/icons/soccer-field.svg";
import { ReactComponent as ReactLogo2 } from "../assets/icons/prancheta.svg";
import { TailSpin } from "@agney/react-loading";

export default function LiveFixtures() {
  var [Data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("").then((resp) => {
      if (Math.floor(resp.status / 100 === 2)) {
        console.log(resp.data.data.match);
        setData(resp.data.data.match);
        setLoading(false);
      }
    });
  }, []);
  return (
    <div className="container">
      <div className="menu">
        <ReactLogo className="icone" />
        <div>|</div>
        <ReactLogo1 className="icone1" />
        <div>|</div>
        <ReactLogo2 className="icone" />
      </div>
      <div className="Placar">
        <h1>3</h1>
        <h1>X</h1>
        <h1>3</h1>
      </div>
    </div>
  );
}
