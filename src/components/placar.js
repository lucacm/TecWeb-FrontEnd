import React from "react";
import "../css/Fixtures.css";
import history from "../history";

export default function Placar(props) {
	const {
		idUser,
		awayTeam,
		date,
		homeTeam,
		score,
		chave,
		awayId,
		homeId,
	} = props;
	return (
		<div className='title'>
			<div className='date'>
				{date.length < 5 ? (
					<div>Tempo : {date}</div>
				) : (
					<div>
						Data: {date.substring(8, 10)}/{date.substring(5, 7)}/
						{date.substring(0, 4)}
					</div>
				)}
			</div>
			<section className='grid-template-columns-3'>
				<div className='item1'>
					{homeTeam.substring(0, 3).toUpperCase()}
				</div>

				{score === undefined ? (
					<div
						className='placar'
						onClick={() =>
							history.push({
								pathname: "/match",
								state: {
									id: chave,
									awayTeam: awayTeam,
									date: date,
									homeTeam: homeTeam,
									score: score,
									homeId: homeId,
									awayId: awayId,
									idUser: idUser,
								},
							})
						}
					>
						<div>-</div>
						<div>X</div>
						<div>-</div>
					</div>
				) : (
					<div
						className='placar'
						onClick={() =>
							history.push({
								pathname: "/match",
								state: {
									id: chave,
									awayTeam: awayTeam,
									homeTeam: homeTeam,
									date: date,
									score: score,
									homeId: homeId,
									awayId: awayId,
									idUser: idUser,
								},
							})
						}
					>
						{" "}
						<div>{score.substring(0, 1)}</div>
						<div>X</div>
						<div>{score.substring(4, 5)}</div>
					</div>
				)}
				<div className='item2'>
					{awayTeam.substring(0, 3).toUpperCase()}
				</div>
			</section>
		</div>
	);
}
