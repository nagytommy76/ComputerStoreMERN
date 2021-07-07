import React from 'react'

const ImageSlider: React.FC<{ images: string[] | undefined }> = ({ images = [] }) => {
   return <img src={images[0]} alt='' />
}

export default ImageSlider
