import React from 'react'

const circleClick = (In_Value) => {
	alert("Clicked "+In_Value)
}

const GameCircle = ({id, children}) => {

	return (
		<div onClick= {() => circleClick(id)}>
			{children}
		</div>
	)

}

export default GameCircle