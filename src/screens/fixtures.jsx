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
  var [searchField, setSearchField] = useState('')
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState("");
  const [canShow, setCanShow] = useState(false);
  const [canChange, setChange] = useState(false);
  const [id, setId] = useState("");

  const location = useLocation();

  useEffect(() => {
    setId(props.location.state.id);
  }, [location]);

  useEffect(() => {
    if (user !== "") {
      setCanShow(true);
    }
  }, [user]);

  useEffect(() => {
    console.log(id);
    if (id !== "") {
      var link = "https://tecweb-back-champions.herokuapp.com/user/" + id;
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
        "https://livescore-api.com/api-client/scores/history.json?key=TtvAHQJefYqIf7u4&secret=ZyAeui2NEXH1v6woz2ZgTIv8HWRX3l23&competition_id=244&from=2020-10-20"
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
        <div className="fixturesMenu">
          <div
            className="fixtureButton"
            onClick={() =>
              history.push({
                pathname: "/futureFixtures",
                state: { id: id },
              })
            }
          >
            Próximos Jogos
          </div>
          <div
            className="fixtureButton"
            onClick={() =>
              history.push({
                pathname: "/liveFixtures",
                state: { id: id },
              })
            }
          >
            Jogos ao Vivo
          </div>
        </div>
        <div>
          <input
            placeholder="Buscar time"
            className='search'
            type='search'
            onChange={e => {
              setSearchField(e.target.value);
            }}>
          </input>
        </div>
        {loading ? (
          <TailSpin width="80" />
        ) : (
            data.map((match, index) => {
              if (match.home_name.toLowerCase().includes(searchField.toLowerCase()) || match.away_name.toLowerCase().includes(searchField.toLowerCase())) {
                return (
                  <Placar
                    idUser={id}
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
              } 
            })
          )}
      </div>
      {!loading && <Footer idUser={id} />}
    </div>
  );
}
