import React from 'react'

export const Header = ({player}) => {
	return (
		<div className='panel header'>
			<div className='header-text'>
				Player {player} Turn
			</div>
		</div>
	)
}
