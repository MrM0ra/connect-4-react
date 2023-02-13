import React from 'react'
import "../Game.css";

const circleClick = (In_Value) => {
	alert("Clicked "+In_Value)
}

const GameCircle = ({id, children}) => {

	return (
		<div className={`gameCircle ${id%2===0 ? "odd-circle" : "even-circle"}`} onClick= {() => circleClick(id)}>
			{children}
		</div>
	)

}

export default GameCircle