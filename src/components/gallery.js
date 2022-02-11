import * as React from 'react'

import { galleryContainer } from '../css/gallery.module.css'

const Gallery = ({ images }) => {
    return (
        <div className={galleryContainer}>
            {images.map((image, i) => {
                const imageData = image.node
                return (
                    <img
                        key={i}
                        src={imageData.thumbnailUrl}
                        alt={imageData.title}
                        width={315}
                        height={315}
                    />
                )
            })}
        </div>
    )
}

export default Gallery
