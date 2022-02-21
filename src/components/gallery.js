import * as React from 'react'
import LazyLoad from 'vanilla-lazyload'

import { galleryContainer, item } from '../css/gallery.module.css'

const Gallery = ({ images }) => {
    React.useEffect(() => {
        const lazyLoadInstance = new LazyLoad()
        lazyLoadInstance.update()
    }, [])

    return (
        <div className={galleryContainer}>
            {images.map((image, key) => {
                const img = image.node
                console.log(img)
                return (
                    <div
                        className={item}
                        key={key}
                        style={{
                            backgroundColor: img.css,
                        }}
                    >
                        <img
                            data-src={img.url}
                            alt={img.title}
                            className={'lazy'}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default Gallery
