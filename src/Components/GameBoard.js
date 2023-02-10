import React from "react";
import GameCircle from "./GameCircle";

const GameBoard = () => {

	return (
		<div>
			<GameCircle id={1} >
				<div>Red</div>
			</GameCircle>
			<GameCircle id={2} >
				<div>Blue</div>
			</GameCircle>
			<GameCircle id={3} >
				<div>Red</div>
			</GameCircle>
			<GameCircle id={4} >
				<div>Blue</div>
			</GameCircle>
			<GameCircle id={5} >
				<div>Red</div>
			</GameCircle>
			<GameCircle id={6} >
				<div>Blue</div>
			</GameCircle>
			<GameCircle id={7} >
				<div>Red</div>
			</GameCircle>
			<GameCircle id={8} >
				<div>Blue</div>
			</GameCircle>
			<GameCircle id={9} >
				<div>Red</div>
			</GameCircle>
			<GameCircle id={10} >
				<div>Blue</div>
			</GameCircle>
			<GameCircle id={11} >
				<div>Red</div>
			</GameCircle>
		</div>
	)

}

export default GameBoard;
