import React from 'react'

const Features = ({user}) => {
		
		return (
			user && (
					<div className="all-center ">
						{Object.keys(user).map(x => (
							<h2 key = {x}> {x +': '+ user[x]}</h2>
							)
						)}
				   </div>
				)
			
			)
	
}

export default Features;
