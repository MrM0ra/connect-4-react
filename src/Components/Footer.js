import React from 'react'

export const Footer = ({onClickEvent}) => {
	return (
		<div className='panel header'>
			<button onClick={onClickEvent}>New Game</button>
		</div>
	)
}
