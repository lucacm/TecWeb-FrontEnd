import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";

export default function Historic(props) {
    const location = useLocation();
    const [homeId, setHomeId] = useState("");
    const [awayId, setAwayId] = useState("");

    const [team1, setTeam1] = useState({});
    const [team2, setTeam2] = useState({});

    useEffect(() => {
        setAwayId(props.location.state.awayId);
        setHomeId(props.location.state.homeId);
    }, [location]);

    useEffect(() => {
        var url = "https://livescore-api.com/api-client/teams/head2head.json?team1_id=" + homeId + "&team2_id=" + awayId + "&key=pspen0saaIX6HcUE&secret=9hSYKcugfodheluDNTSbUkl43jbKw5oF";
        if (!(homeId === "" || awayId === "")){   
            axios.get(url)
            .then((resp) => {
                if (Math.floor(resp.status / 100 === 2)) {
                    console.log(resp.data.data.team1);
                    console.log(resp.data.data.team2);
                    setTeam1(resp.data.data.team1);
                    setTeam2(resp.data.data.team2);
                }
            })
        }
    }, [awayId, homeId])

    return (
        <div>
            <div>
                <h2>{team1["name"]}</h2>
            </div>
            <div>
                <h2>{team2['name']}</h2>
            </div>
        </div>
    )
}
