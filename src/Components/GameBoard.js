import React, {useEffect, useState} from "react";
import GameCircle from "./GameCircle";
import "../Game.css";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { insDraw, isWinner } from "../helper";
import { GAME_STATE_PLAYING, CIRCLES, NO_PLAYER, PLAYER_1, PLAYER_2, GAME_STATE_WIN, GAME_STATE_DRAW} from "../Constants";

const GameBoard = () => {

	const [gameBoard, setGameBoard] = useState(Array(16).fill(NO_PLAYER))
	const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1)
	const [gameState, setGameState] = useState(GAME_STATE_PLAYING)
	const [winPlayer, setWinPlayer] = useState(NO_PLAYER)

	useEffect(() => {
		initGame();
	}, [])

	const initGame = () => {
		console.log('init game')
		setGameBoard(Array(16).fill(NO_PLAYER))
		setCurrentPlayer(PLAYER_1)
		setGameState(GAME_STATE_PLAYING)
	}

	const initBoard = () => {
		let circles = []
		for (let i=0; i<CIRCLES;i++){
			circles.push(renderCircle(i))
		}
		return circles
	}

	const circleClicked = (id) => {

		if(gameState !== GAME_STATE_PLAYING) return

		if(gameBoard[id] !== NO_PLAYER) return

		if(isWinner(gameBoard, id, currentPlayer)){
			setGameState(GAME_STATE_WIN)
			setWinPlayer(currentPlayer)
		}

		if(insDraw(gameBoard, id, currentPlayer)){
			setGameState(GAME_STATE_DRAW)
			setWinPlayer(NO_PLAYER)
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
			<Header currentPlayer={currentPlayer} gameState={gameState} winPlayer={winPlayer}/>
			<div style={centereedFlexbox}>
				<div className="gameBoard">
					{initBoard()}
				</div>
			</div>
			<Footer onClickEvent={initGame}/>
		</>
	)

}

export default GameBoard;
