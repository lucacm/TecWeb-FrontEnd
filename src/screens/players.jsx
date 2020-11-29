import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/players.css";
import { TailSpin } from "@agney/react-loading";

export default function Players() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios
			.get(
				"https://livescore-api.com/api-client/competitions/goalscorers.json?key=SRZOUsPuvEwIkhxO&secret=EHaP6he0Yd38axu3otSjWHNrlkaFBHug&competition_id=244"
			)
			.then((resp) => {
				if (Math.floor(resp.status / 100 === 2)) {
					// console.log(resp);
					setData(resp.data.data.goalscorers);
					setLoading(false);
				}
			});
	}, []);

	return (
		<div className='container'>
			<div className='title'>
				<h1> Artilharia </h1>
			</div>
			<hr color='#91433f' size='1.5' width='70%' />
			{loading ? (
				<TailSpin className='title' width='80' />
			) : (
				data.map((player, index) => {
					return (
						<div className='box title' key={index}>
							<div className='goals'>
								<h4>{player.name}</h4>
								<p>
									{player.goals}{" "}
									{player.goals > 1 ? "gols" : "gol"}
								</p>
							</div>
							<hr color='#91433f' size='1.5' width='97%' />
							<p className='textGoals'>
								Esse jogador tem média de{" "}
								{(player.goals / player.played).toFixed(2)}{" "}
								{player.goals / player.played > 1
									? "gols"
									: "gol"}{" "}
								por jogo.
							</p>
						</div>
					);
				})
			)}
		</div>
	);
}

// function ListPlayers(props){
//   const {} = props;

//   return(
//     <>
//   )
// }
