import React, { useState, useEffect } from "react";
import "./Fixtures.css";

export default function Placar() {
  return (
    // <p>Date: 19/12/200</p>
    <section className="grid-template-columns-3">
      <div className="item">BAR</div>
      <div className="placar">
        <div>2</div>
        <div>X</div>
        <div>5</div>
      </div>
      <div className="item">REA</div>
      <div className="item">AJA</div>
      <div className="placar">
        <div>2</div>
        <div>X</div>
        <div>5</div>
      </div>
      <div className="item">CHE</div>
    </section>
  );
}
