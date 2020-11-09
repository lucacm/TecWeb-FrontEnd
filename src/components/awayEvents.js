import React, { useState, useEffect } from "react";
import "../css/Match.css";

function capitalizeFirstLetter([first, ...rest], locale = navigator.language) {
  return [first.toLocaleUpperCase(locale), ...rest].join("");
}
export default function AwayEvents(props) {
  const { data } = props;
  //   console.log(data.data.event);

  return (
    <div className="teamstats">
      {data.data.event.map((info, index) => {
        if (info.home_away === "a") {
          return (
            <p>
              {capitalizeFirstLetter(info.player.toLowerCase())}({info.time}):{" "}
              {info.event.toLowerCase().replace("_", " ")}{" "}
            </p>
          );
        }
      })}
    </div>
  );
}
