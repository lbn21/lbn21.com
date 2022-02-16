import * as React from 'react'
import LazyLoad from 'vanilla-lazyload'

import { galleryContainer } from '../css/gallery.module.css'

const COLUMNS = 1 //default columns count
const CONFIG = [
    {
        breakpoint: 700,
        columns: 2,
    },
    {
        breakpoint: 992,
        columns: 3,
    },
    {
        breakpoint: 1200,
        columns: 4,
    },
    {
        breakpoint: 1440,
        columns: 5,
    },
]

const Gallery = ({ images }) => {
    //column count
    const [columns, setColumns] = React.useState(null)

    //re-render if col no changes
    React.useEffect(() => {
        if (!columns) return

        const galleryData = new Array(columns).fill(null).map((_) => [])
        for (let i = 0; i < images.length; i++) {
            const col = i % columns
            galleryData[col].push(images[i].node)
        }
        console.log(galleryData)
    }, [columns])

    React.useEffect(() => {
        function handleResize() {
            let cols = COLUMNS //start with default count

            //we loop through config backwards to match the highest resolution first
            for (let i = CONFIG.length - 1; i >= 0; i--) {
                const { breakpoint, columns } = CONFIG[i]
                //check if breakpoint is matched
                if (
                    window.matchMedia(`screen and (min-width: ${breakpoint}px)`)
                        .matches
                ) {
                    cols = columns
                    break //match found. break
                }
            }
            setColumns(cols)
        }

        window.addEventListener('resize', handleResize)
        //initial column check
        handleResize()

        const lazyLoadInstance = new LazyLoad()
        lazyLoadInstance.update()

        //cleanup
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div className={galleryContainer}>
            <p>Number of columns: {columns}</p>
            {images.map((image, i) => {
                const imageData = image.node
                return (
                    <img
                        className={'lazy'}
                        key={i}
                        data-src={imageData.url}
                        src={
                            'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxIDEiPjxwYXRoIGQ9Ik0wIDBoMXYxSDAiIGZpbGw9IiNiN2MzZjNmZiIvPjwvc3ZnPg=='
                        }
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
