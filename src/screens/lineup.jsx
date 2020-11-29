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
  var [playersHome, setPlayersHome] = useState([]);
  var [playersAway, setPlayersAway] = useState([]);

  const [escalacao, setEscalacao] = useState(true);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const [id, setId] = useState("");
  const [idUser, setUserId] = useState("");

  const [searchHome, setSearchHome] = useState("");
  const [filteredPlayersHome, setFilteredPlayersHome] = useState([]); 

  const [searchAway, setSearchAway] = useState("");
  const [filteredPlayersAway, setFilteredPlayersAway] = useState([]); 


  useEffect(() => {
    setId(props.location.state.id);
    setAwayTeam(props.location.state.awayTeam);
    setHomeTeam(props.location.state.homeTeam);
    setScore(props.location.state.score);
    setDate(props.location.state.date);
    setAwayId(props.location.state.awayId);
    setHomeId(props.location.state.homeId);
    setUserId(props.location.state.idUser);
  }, [location]);

  useEffect(() => {
    if (id !== "") {
      const string =
        "https://livescore-api.com/api-client/matches/lineups.json?key=75EAnOEtACPoyibW&secret=1VKxHPQZaFR5rSYyXD9lrNP1qFqYXCUZ&match_id=" +
        id;
      axios.get(string).then((resp) => {
        if (Math.floor(resp.status / 100 === 2)) {
          // console.log(string);
          // console.log(resp.data.data.lineup.away);
          setHomeData(resp.data.data.lineup.home);
          setPlayersHome(resp.data.data.lineup.home.players);
          setAwayData(resp.data.data.lineup.away);
          setPlayersAway(resp.data.data.lineup.away.players);
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

  useEffect(()=>{
    setFilteredPlayersHome (
      playersHome.filter( player => {
        return player.name.toLowerCase().includes(searchHome.toLowerCase())
      })
    )
  }, [searchHome, playersHome])

  useEffect(()=>{
    setFilteredPlayersAway (
      playersAway.filter( player => {
        return player.name.toLowerCase().includes(searchAway.toLowerCase())
      })
    )
  }, [searchAway, playersAway])

  return (
    <div className="container">
      <ReactLogo
        className="arrow"
        onClick={() =>
          history.push({
            pathname: "/fixtures",
            state: { id: idUser },
          })
        }
      />
      <MatchMenu
        idUser={idUser}
        id={id}
        awayTeam={awayTeam}
        date={date}
        homeTeam={homeTeam}
        score={score}
        homeId={home_id}
        awayId={away_id}
      />

      <h1>Escalação</h1>
      
      <div>
        <input type="text" placeholder="Pesquisar jogador Home" 
        onChange={e => setSearchHome(e.target.value)}></input>
      </div>
      <div>
        <input type="text" placeholder="Pesquisar jogador Away" 
        onChange={e => setSearchAway(e.target.value)}></input>
      </div>

      {loading ? (
        <TailSpin className="title" width="80" />
      ) : (
        <div>
          <div className="squads">
            
            <Squads Data={filteredPlayersHome} Datalinha={homeData}/>
            <Squads Data={filteredPlayersAway} Datalinha={awayData}/>
            
          </div>
        </div>
      )}
    </div>
  );
}
