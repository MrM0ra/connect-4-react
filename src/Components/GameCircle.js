import React from 'react'

const circleClick = (In_Value) => {
	alert("Clicked "+In_Value)
}

const GameCircle = ({id, children, bgColor}) => {

    const gameCircle = {
        borderRadius: '50%',
        backgroundColor: bgColor,
        display: "grid",
        placeItems: "center"
    }

	return (
		<div style={gameCircle} onClick= {() => circleClick(id)}>
			{children}
		</div>
	)

}

export default GameCircle