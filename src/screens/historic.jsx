import axios from "axios";
import React, { useState, useEffect } from "react";
import { TailSpin } from "@agney/react-loading";
import { useLocation } from "react-router-dom";
import "../css/historic.css";

export default function Historic(props) {
	const location = useLocation();
	const [homeId, setHomeId] = useState("");
	const [awayId, setAwayId] = useState("");
	const [loading, setLoading] = useState(true);

	const [team1, setTeam1] = useState({});
	const [team2, setTeam2] = useState({});

	useEffect(() => {
		setAwayId(props.location.state.awayId);
		setHomeId(props.location.state.homeId);
	}, [location]);

	useEffect(() => {
		var url =
			"https://livescore-api.com/api-client/teams/head2head.json?team1_id=" +
			homeId +
			"&team2_id=" +
			awayId +
			"&key=SRZOUsPuvEwIkhxO&secret=EHaP6he0Yd38axu3otSjWHNrlkaFBHug";
		if (!(homeId === "" || awayId === "")) {
			axios.get(url).then((resp) => {
				if (Math.floor(resp.status / 100 === 2)) {
					console.log(resp.data.data.team1);
					console.log(resp.data.data.team2);
					setTeam1(resp.data.data.team1);
					setTeam2(resp.data.data.team2);
					setLoading(false);
				}
			});
		}
	}, [awayId, homeId]);

	function lastMatches(team) {
		team["overall_form"].map((element, key) => {
			return <p key={key}>oi</p>;
		});
	}

	return (
		<div className='container'>
			<h1>Últimas 6 partidas</h1>
			<hr color='#91433f' size='1.5' width='90%' />
			{loading ? (
				<TailSpin width='80' />
			) : (
				<>
					<div className='subcontainer'>
						<div className='bla'>
							<h2>{team1["name"]}</h2>
							<div className='containerPartidas'>
								{team1["overall_form"].map((element, key) => (
									<div
										key={key}
										className='partidas'
										data-status={element}
									>
										{element}
									</div>
								))}
							</div>
						</div>
						<div className='bla'>
							<h2>{team2["name"]}</h2>
							<div className='containerPartidas'>
								{team2["overall_form"].map((element, key) => (
									<div
										key={key}
										className='partidas'
										data-status={element}
									>
										{element}
									</div>
								))}
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
}
