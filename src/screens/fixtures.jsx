import React, { useState, useEffect } from "react";
import "../css/Fixtures.css";
import Placar from "../components/placar";
import axios from "axios";
import { TailSpin } from "@agney/react-loading";
import { useLocation } from "react-router-dom";
import Footer from "../components/footer";
import history from "../history";

export default function Fixtures(props) {
  var [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState("");
  const [canShow, setCanShow] = useState(false);
  const [canChange, setChange] = useState(false);
  const [id, setId] = useState("");

  const location = useLocation();

  // useEffect(() => {
  // 	setId(props.location.state.id);
  // }, [location]);

  useEffect(() => {
    if (user !== "") {
      setCanShow(true);
    }
  }, [user]);

  useEffect(() => {
    console.log(id);
    if (id !== "") {
      var link = "http://localhost:3003/user/" + id;
      axios.get(link).then((resp) => {
        if (Math.floor(resp.status / 100 === 2)) {
          setUser(resp.data[0]["user"]);
          setChange(true);
        }
      });
    }
  }, [id]);

  useEffect(() => {
    axios
      .get(
        "http://livescore-api.com/api-client/scores/history.json?key=pspen0saaIX6HcUE&secret=9hSYKcugfodheluDNTSbUkl43jbKw5oF&competition_id=244&from=2020-10-20"
      )
      .then((resp) => {
        if (Math.floor(resp.status / 100 === 2)) {
          // console.log(resp.data.data.match);
          setData(resp.data.data.match);
          setLoading(false);
        }
      });
  }, []);
  return (
    <div className="header">
      {canShow && (
        <>
          <div className="textHeader">
            <p>olá, {user}!</p>
            <h3>Champions Hub</h3>
            {canChange && (
              <div
                onClick={() =>
                  history.push({
                    pathname: "/screens/changePassword",
                    state: { id_: id },
                  })
                }
              >
                mudar senha
              </div>
            )}
            <div onClick={() => history.push("screens/login")}>sair</div>
          </div>
          <hr color="#979292" size="1.5" width="100%" />
        </>
      )}
      <div className="container">
        <div className="title">
          <h2 className="texto">Jogos Passados</h2>
        </div>
        {loading ? (
          <TailSpin width="80" />
        ) : (
          data.map((match, index) => {
            return (
              <Placar
                awayTeam={match.away_name}
                date={match.date}
                homeTeam={match.home_name}
                score={match.ft_score}
                key={match.id}
                chave={match.id}
                awayId={match.away_id}
                homeId={match.home_id}
              />
            );
          })
        )}
      </div>
      {!loading && <Footer />}
    </div>
  );
}
