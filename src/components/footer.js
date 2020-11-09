import React from "react";
import "../css/footer.css";
import { ReactComponent as ReactLogo } from "../assets/icons/uefa-champions-league-logo.svg";
import history from "../history";

export default function Footer(props) {
	const { idUser } = props;

	return (
		<footer className='footer'>
			<a href='https://pt.uefa.com/uefachampionsleague/'>
				<ReactLogo className='image' />
			</a>
			<div className='column'>
				<div
					onClick={() =>
						history.push({
							pathname: "/liveFixtures",
							state: { id: idUser },
						})
					}
					className='element'
				>
					Jogos Ao Vivo
				</div>
				<div
					onClick={() =>
						history.push({
							pathname: "/fixtures",
							state: { id: idUser },
						})
					}
					className='element'
				>
					Jogos Passados
				</div>
			</div>
			<div className='column'>
				<div
					onClick={() => history.push("/screens/players")}
					className='element'
				>
					Artilharia
				</div>
			</div>
			<div className='column'>
				<div
					onClick={() => history.push("/screens/groups")}
					className='element'
				>
					Classificação da Fase de Grupos
				</div>
			</div>
		</footer>
	);
}
