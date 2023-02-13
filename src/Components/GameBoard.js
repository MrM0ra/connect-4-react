import React from "react";
import GameCircle from "./GameCircle";

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
			<div style={boardGrid}>
				<GameCircle id={1} bgColor="Red">
					<div>Red</div>
				</GameCircle>
				<GameCircle id={2} bgColor="Blue">
					<div>Blue</div>
				</GameCircle>
				<GameCircle id={3} bgColor="Red">
					<div>Red</div>
				</GameCircle>
				<GameCircle id={4} bgColor="Blue">
					<div>Blue</div>
				</GameCircle>
				<GameCircle id={5} bgColor="Red">
					<div>Red</div>
				</GameCircle>
				<GameCircle id={6} bgColor="Blue">
					<div>Blue</div>
				</GameCircle>
				<GameCircle id={7} bgColor="Red">
					<div>Red</div>
				</GameCircle>
				<GameCircle id={8} bgColor="Blue">
					<div>Blue</div>
				</GameCircle>
				<GameCircle id={9} bgColor="Red">
					<div>Red</div>
				</GameCircle>
				<GameCircle id={10} bgColor="Blue">
					<div>Blue</div>
				</GameCircle>
				<GameCircle id={11} bgColor="Red">
					<div>Red</div>
				</GameCircle>
				<GameCircle id={10} bgColor="Blue">
					<div>Blue</div>
				</GameCircle>
			</div>
		</div>
	)

}

export default GameBoard;
