import React from 'react'

const ShowImage = ({image}) => {
		// console.log(image)
		const image_src = "data:image/jpeg;base64," + image;
		return (
			image && (
					<img src={image_src} alt=""/>
				)
			
		)
	
}
export default ShowImage;