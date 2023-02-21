import React from 'react'

export const Footer = ({onClickEvent}) => {
	return (
		<div className='panel footer'>
			<button onClick={onClickEvent}>New Game</button>
		</div>
	)
}
