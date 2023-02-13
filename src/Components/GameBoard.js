import React from "react";
import GameCircle from "./GameCircle";
import "../Game.css";

const GameBoard = () => {

	const centereedFlexbox = {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	}

	const boardGrid = {
		display: 'grid',
		gridTemplateColumns: 'repeat(4,1.5fr)',
		rowGap: '5px', 
		height: '500px', 
		width: '700px'
	}

	return (
		<div style={centereedFlexbox}>
			<div className="gameBoard">
				<GameCircle id={1}>
					<div>Red</div>
				</GameCircle>
				<GameCircle id={2}>
					<div>Blue</div>
				</GameCircle>
				<GameCircle id={3}>
					<div>Red</div>
				</GameCircle>
				<GameCircle id={4}>
					<div>Blue</div>
				</GameCircle>
				<GameCircle id={5}>
					<div>Red</div>
				</GameCircle>
				<GameCircle id={6}>
					<div>Blue</div>
				</GameCircle>
				<GameCircle id={7}>
					<div>Red</div>
				</GameCircle>
				<GameCircle id={8}>
					<div>Blue</div>
				</GameCircle>
				<GameCircle id={9}>
					<div>Red</div>
				</GameCircle>
				<GameCircle id={10}>
					<div>Blue</div>
				</GameCircle>
				<GameCircle id={11}>
					<div>Red</div>
				</GameCircle>
				<GameCircle id={10}>
					<div>Blue</div>
				</GameCircle>
			</div>
		</div>
	)

}

export default GameBoard;
