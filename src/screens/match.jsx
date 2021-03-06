import React, { useState, useEffect } from "react";
import "../css/Match.css";
import { ReactComponent as ReactLogo } from "../assets/icons/seta.svg";
import { useLocation } from "react-router-dom";
import { TailSpin } from "@agney/react-loading";
import HomeEvents from "../components/homeEvents";
import MatchMenu from "../components/matchMenu";
import AwayEvents from "../components/awayEvents";
import history from "../history";
import axios from "axios";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailIcon,
  EmailShareButton,
  LinkedinIcon,
  LinkedinShareButton
} from "react-share";
export default function Match(props) {
  var [data, setData] = useState([]);
  var [awayTeam, setAwayTeam] = useState();
  var [homeTeam, setHomeTeam] = useState();
  var [score, setScore] = useState();
  var [date, setDate] = useState("");
  var [away_id, setAwayId] = useState();
  var [home_id, setHomeId] = useState();
  var [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState("");
  const [idUser, setIdUser] = useState("");
  const location = useLocation();
  const [future, setFuture] = useState(true);
  var link = ('https://www.youtube.com/results?search_query='+homeTeam+'+vs+'+awayTeam+'+'+date.slice(0,4))
  console.log("HOME, AWAY, IDHOME, IDAWAY: ",homeTeam, awayTeam, home_id, away_id)

  const shareUrl = 'https://champions-league-frontend.herokuapp.com/screens/login';
  const [match_title, setMatchTitle] = useState("")
  const email_body = match_title + "\n\n";

  if (score != null) {
  var score1 = score.substring(0,1)
  var score2 = score.substring(4,5)
  var subt = score1 - score2
  console.log("subt: "+subt);
};

// if (homeTeam != null) {
//   var path = "../assets/img/" + homeTeam + ".png"
//   import escudo1 from path
//   console.log(" escudo: " + escudo1)
// };

// if (awayTeam != null){
//   var path2 = "../assets/img/" + awayTeam + ".png"
//   import escudo2 from path2
//   console.log("escudo2: " + escudo2)
// };

// function importAll(r) {
//   return r.keys().map(r);
// }

// const images = importAll(require.context('../assets/img', false, /.(png|jpe?g|svg)$/));

// console.log("string: " + images);




  useEffect(() => {
    setId(props.location.state.id);
    setAwayTeam(props.location.state.awayTeam);
    setHomeTeam(props.location.state.homeTeam);
    setScore(props.location.state.score);
    setDate(props.location.state.date);
    setAwayId(props.location.state.awayId);
    setHomeId(props.location.state.homeId);
    setIdUser(props.location.state.idUser);
  }, [location]);

  useEffect(()=>{
    setMatchTitle(homeTeam + " " + score + " " + awayTeam)
  })

  useEffect(() => {
    if (id !== "") {
      const string =
        "https://livescore-api.com/api-client/scores/events.json?key=SRZOUsPuvEwIkhxO&secret=EHaP6he0Yd38axu3otSjWHNrlkaFBHug&id=" +
        id;
      axios.get(string).then((resp) => {
        if (Math.floor(resp.status / 100 === 2)) {
          console.log(resp);
          setData(resp.data);
          setSuccess(resp.success);
          setFuture(false);
        }
      });
    }
  }, [id]);

  useEffect(() => {
    if (success !== "") {
      setLoading(false);
    }
  }, [success]);

  useEffect(() => {
    if (future) {
      setLoading(false);
    }
  }, [future]);

  console.log(future);


  return (
    <div className="container">
      {loading ? (
        <TailSpin className="title" width="80" />
      ) : future ? (
        "Esse jogo ainda não tem dados"
      ) : (
        <>
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
          <h1>
            {loading ? (
              <TailSpin className="title" width="80" />
            ) : date.length < 5 ? (
              <div>{date}</div>
            ) : (
              <div>
                <div className="data">
                  {date.substring(8, 10)}/{date.substring(5, 7)}/
                  {date.substring(0, 4)}
                </div>
                <div className="local">Estadio: {data.data.match.location}</div>
              </div>
            )}
          </h1>

          <div className="Placar">
            <div className="times">
              <h1>
                {score === undefined ? (
                  <div>-</div>
                ) : (
                  <div>{score.substring(0, 1)}</div>
                )}
                {subt > 0 ? (
                  <div style={{color:'green'}}> {homeTeam} </div>) 
                    : subt < 0 ? (
                      <div style = {{color:'red'}}> {homeTeam} </div>)
                    : <div style = {{color:'yellow'}}> {homeTeam} </div>}
              </h1>
            </div>
            <h1>X</h1>
            <div className="times">
              <h1>
                {score === undefined ? (
                  <div>-</div> 
                ) : (
                  <div>{score.substring(4, 5)}</div>
                )}
                {subt > 0 ? (
                  <div style={{color:'red'}}> {awayTeam} </div>) 
                    : subt < 0 ? (
                      <div style = {{color:'green'}}> {awayTeam} </div>)
                    : <div style = {{color:'yellow'}}> {awayTeam} </div>}
              </h1>
            </div>
          </div>
          {loading ? (
            <TailSpin className="title" width="80" />
          ) : (
            <div className="squads">
              <HomeEvents data={data} />
              <AwayEvents data={data} />
            </div>
          )}

          

          <div className="Demo__container">
        <div className="Demo__some-network">
          <FacebookShareButton
            url={shareUrl}
            quote={match_title}
            className="Demo__some-network__share-button"
          >
            <FacebookIcon size={90} round />
          </FacebookShareButton>
        </div>
        <div className="Demo__some-network">
        <TwitterShareButton
            url={shareUrl}
            title={match_title}
            className="Demo__some-network__share-button"
          >
            <TwitterIcon size={90} round />
          </TwitterShareButton>
          </div>

          <div className="Demo__some-network">
          <WhatsappShareButton
            url={shareUrl}
            title={match_title}
            separator=" ->"
            className="Demo__some-network__share-button"
          >
            <WhatsappIcon size={90} round />
          </WhatsappShareButton>
        </div>
        <div className="Demo__some-network">
          <EmailShareButton
            url={shareUrl}
            subject="Checkout this Champions League game"
            body= {email_body}
            separator=" ->"
            className="Demo__some-network__share-button"
          >
            <EmailIcon size={90} round />
          </EmailShareButton>
        </div>
        <div className="Demo__some-network">
          <LinkedinShareButton
            url={shareUrl}
            source={shareUrl}
            title="Checkout this Champions League game"
            description= {email_body}
            separator=" ->"
            className="Demo__some-network__share-button"
          >
            <LinkedinIcon size={90} round />
          </LinkedinShareButton>
        </div>
        <div className="Demo__some-network">
            <a id="youtube_link" href={link} target="_blank"> <img src="https://www.interstellarrift.com/wiki/images/d/d8/Youtube-logo-png-photo-0.png" alt="Pesquisar vídeo no YouTube" width="150" height="125" ></img></a>
            <div className="matchEvents"></div>
          </div>
      </div>

          <div className="center">
            <button
              onClick={() =>
                history.push({
                  pathname: "/screens/historic",
                  state: { homeId: home_id, awayId: away_id },
                })
              }
            >
              Últimas partidas de cada clube
            </button>

            </div>
            
          


            <div className="matchEvents"></div>
            
          
          


        </>
      )}
      
      
    </div>
  );
}
