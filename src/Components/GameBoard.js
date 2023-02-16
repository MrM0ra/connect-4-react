import React, {useState} from "react";
import GameCircle from "./GameCircle";
import "../Game.css";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { isWinner } from "../helper";

const NO_PLAYER = 0
const PLAYER_1 = 1
const PLAYER_2 = 2
const CIRCLES = 16

const GameBoard = () => {

	const [gameBoard, setGameBoard] = useState(Array(16).fill(NO_PLAYER))
	const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1)

	const initBoard = () => {
		let circles = []
		for (let i=0; i<CIRCLES;i++){
			circles.push(renderCircle(i))
		}
		return circles
	}

	const circleClicked = (id) => {
		if(isWinner(gameBoard, id, currentPlayer)){
			console.log("WINNER")
		}

		setGameBoard(prev => {
			return prev.map((circle, pos) => {
				if(pos === id) return currentPlayer;
				return circle;
			})
		})

		setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1)
	}

	const centereedFlexbox = {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	}

	const renderCircle = (id) => {
		return <GameCircle key={id} id={id} className={`player-${gameBoard[id]}`} onCircleClicked={circleClicked}/>
	}

	return (
		<>
			<Header player={currentPlayer}/>
			<div style={centereedFlexbox}>
				<div className="gameBoard">
					{initBoard()}
				</div>
			</div>
			<Footer/>
		</>
	)

}

export default GameBoard;
