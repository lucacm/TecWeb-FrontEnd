import axios from "axios";
import React, { useEffect, useState } from "react";
import "../css/groups.css";
import { TailSpin } from "@agney/react-loading";

export default function Groups() {
	const [data1, setData1] = useState([]);
	const [data2, setData2] = useState([]);
	const [data3, setData3] = useState([]);
	const [data4, setData4] = useState([]);
	const [data5, setData5] = useState([]);
	const [data6, setData6] = useState([]);
	const [data7, setData7] = useState([]);
	const [data8, setData8] = useState([]);
	const [legenda, setLegenda] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios
			.get(
				"https://livescore-api.com/api-client/leagues/table.json?key=pspen0saaIX6HcUE&secret=9hSYKcugfodheluDNTSbUkl43jbKw5oF&competition_id=244&group=A"
			)
			.then((resp) => {
				if (Math.floor(resp.status / 100 === 2)) {
					setData1(resp.data.data.table);
				}
			});
		axios
			.get(
				"https://livescore-api.com/api-client/leagues/table.json?key=pspen0saaIX6HcUE&secret=9hSYKcugfodheluDNTSbUkl43jbKw5oF&competition_id=244&group=B"
			)
			.then((resp) => {
				if (Math.floor(resp.status / 100 === 2)) {
					setData2(resp.data.data.table);
				}
			});
		axios
			.get(
				"https://livescore-api.com/api-client/leagues/table.json?key=pspen0saaIX6HcUE&secret=9hSYKcugfodheluDNTSbUkl43jbKw5oF&competition_id=244&group=C"
			)
			.then((resp) => {
				if (Math.floor(resp.status / 100 === 2)) {
					setData3(resp.data.data.table);
				}
			});
		axios
			.get(
				"https://livescore-api.com/api-client/leagues/table.json?key=pspen0saaIX6HcUE&secret=9hSYKcugfodheluDNTSbUkl43jbKw5oF&competition_id=244&group=D"
			)
			.then((resp) => {
				if (Math.floor(resp.status / 100 === 2)) {
					setData4(resp.data.data.table);
				}
			});
		axios
			.get(
				"https://livescore-api.com/api-client/leagues/table.json?key=pspen0saaIX6HcUE&secret=9hSYKcugfodheluDNTSbUkl43jbKw5oF&competition_id=244&group=E"
			)
			.then((resp) => {
				if (Math.floor(resp.status / 100 === 2)) {
					setData5(resp.data.data.table);
				}
			});
		axios
			.get(
				"https://livescore-api.com/api-client/leagues/table.json?key=pspen0saaIX6HcUE&secret=9hSYKcugfodheluDNTSbUkl43jbKw5oF&competition_id=244&group=F"
			)
			.then((resp) => {
				if (Math.floor(resp.status / 100 === 2)) {
					setData6(resp.data.data.table);
				}
			});
		axios
			.get(
				"https://livescore-api.com/api-client/leagues/table.json?key=pspen0saaIX6HcUE&secret=9hSYKcugfodheluDNTSbUkl43jbKw5oF&competition_id=244&group=G"
			)
			.then((resp) => {
				if (Math.floor(resp.status / 100 === 2)) {
					setData7(resp.data.data.table);
				}
			});
		axios
			.get(
				"https://livescore-api.com/api-client/leagues/table.json?key=pspen0saaIX6HcUE&secret=9hSYKcugfodheluDNTSbUkl43jbKw5oF&competition_id=244&group=H"
			)
			.then((resp) => {
				if (Math.floor(resp.status / 100 === 2)) {
					setData8(resp.data.data.table);
					setLoading(false);
				}
			});
	}, []);

	function table(data, number) {
		return (
			<>
				<h4>Grupo {number}</h4>
				<table>
					<tr>
						<th>P</th>
						<th>Clube</th>
						<th>PTS</th>
						<th>J</th>
						<th>V</th>
						<th>E</th>
						<th>D</th>
						<th>GF</th>
						<th>GS</th>
						<th>SG</th>
					</tr>
					{data.map((d, index) => {
						return (
							<tr key={index}>
								<td data-status={d.rank} className='position'>
									{d.rank}º
								</td>
								<td>{d.name}</td>
								<td>{d.points}</td>
								<td>{d.matches}</td>
								<td>{d.won}</td>
								<td>{d.drawn}</td>
								<td>{d.lost}</td>
								<td>{d.goals_scored}</td>
								<td>{d.goals_conceded}</td>
								<td>{d.goal_diff}</td>
							</tr>
						);
					})}
				</table>
			</>
		);
	}

	return (
		<div className='container'>
			<div className='title'>
				<h1> Classificação dos Grupos </h1>
			</div>
			<hr color='#979292' size='1.5' width='70%' />

			{loading ? <TailSpin className='title' width='80' /> : ""}
			{table(data1, "A")}
			{table(data2, "B")}
			{table(data3, "C")}
			{table(data4, "D")}
			{table(data5, "E")}
			{table(data6, "F")}
			{table(data7, "G")}
			{table(data8, "H")}

			<div onClick={() => setLegenda(true)} className='legenda'>
				<h6>legenda</h6>
				{legenda && (
					<div className='legenda-click'>
						<table>
							<tbody>
								<tr>
									<td className='first'>1ºs</td>
									<td>Classificados Próxima Fase</td>
								</tr>
								<tr>
									<td className='second'>3º</td>
									<td>Classificados Liga Europa</td>
								</tr>
							</tbody>
						</table>
					</div>
				)}
			</div>
		</div>
	);
}
