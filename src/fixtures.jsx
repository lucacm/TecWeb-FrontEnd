import React, { useState, useEffect } from "react";
import "./Fixtures.css";
import Placar from "./placar";
import axios from "axios";

export default function Fixtures() {
  var [usuarios, setUsuarios] = useState([
    { username: "bananajohson", key: 1 },
    { username: "jack", key: 2 },
  ]);
  axios
    .get(
      "live.json?key=pspen0saaIX6HcUE&secret=9hSYKcugfodheluDNTSbUkl43jbKw5oF&competition_id=244",
      {}
    )
    .then((resp) => {
      if (Math.floor(resp.status / 100 === 2)) {
        console.log(resp);
        return;
      }
    });
  // {/* <ul>
  //   {usuarios.map((usuario) => (
  //     <li key={usuarios.key}>{usuario.username}</li>
  //   ))}
  // </ul> */}
  return (
    <div>
      <h2>Próximos Jogos</h2>
      <Placar />
    </div>
  );
}
