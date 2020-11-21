import React, { useState, useEffect } from "react";
import "../css/Match.css";

export default function Squads(props) {
  const { Data } = props;
  const { Datalinha } = props;

  return (
    <div className="teamsheet">
      <h3>{Datalinha.team.name}</h3>
      {Data.map((player, index) => {
        return (
          <p>
            {player.shirt_number}. {player.name}
          </p>
        );
      })}
    </div>
  );
}
