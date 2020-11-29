import React, { useState, useEffect } from "react";
import "../css/Fixtures.css";
import axios from "axios";
import Placar from "../components/placar";
import { TailSpin } from "@agney/react-loading";
import history from "../history";
import { useLocation } from "react-router-dom";

export default function FutureFixtures(props) {
	var [Data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [id, setId] = useState("");

	const location = useLocation();

	useEffect(() => {
		setId(props.location.state.id);
	}, [location]);

	useEffect(() => {
		axios
			.get(
				"https://livescore-api.com/api-client/scores/history.json?key=75EAnOEtACPoyibW&secret=1VKxHPQZaFR5rSYyXD9lrNP1qFqYXCUZ&competition_id=244&from=2020-10-20"
			)
			.then((resp) => {
				if (Math.floor(resp.status / 100 === 2)) {
					console.log(resp.data.data.fixtures);
					setData(resp.data.data.fixtures);
					setLoading(false);
				}
			});
	}, []);
	return (
		// <div>Icons made by <a href="https://www.flaticon.com/authors/dinosoftlabs" title="DinosoftLabs">DinosoftLabs</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
		// <div>Icons made by <a href="https://www.flaticon.com/authors/mavadee" title="mavadee">mavadee</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
		// <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
		<div className='container'>
			<div className='title'>
				<h2>Próximos Jogos</h2>
			</div>
			<div className='fixturesMenu'>
				<div
					className='fixtureButton'
					onClick={() =>
						history.push({
							pathname: "/fixtures",
							state: { id: id },
						})
					}
				>
					Jogos Passados
				</div>
				<div
					className='fixtureButton'
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
			{loading ? (
				<TailSpin width='80' />
			) : (
				Data.map((match, index) => {
					return (
						<Placar
							awayTeam={match.away_name}
							date={match.date}
							homeTeam={match.home_name}
							score={match.score}
							key={match.id}
						/>
					);
				})
			)}
		</div>
	);
}
