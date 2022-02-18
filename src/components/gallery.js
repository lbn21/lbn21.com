import * as React from 'react'
import LazyLoad from 'vanilla-lazyload'

import { galleryContainer, column, item } from '../css/gallery.module.css'

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

const isBrowser = typeof window !== 'undefined'

const Gallery = ({ images }) => {
    const [columns, setColumns] = React.useState(getColumns())
    const [gallery, setGallery] = React.useState([])

    //re-render if col no changes
    React.useEffect(() => {
        setGallery(getGallery(columns, images))
    }, [columns, images])

    React.useEffect(() => {
        window.addEventListener('resize', handleResize)

        function handleResize() {
            setColumns(getColumns())
        }

        const lazyLoadInstance = new LazyLoad()
        lazyLoadInstance.update()

        //cleanup
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    function getGallery(columns, images) {
        const newArray = Array.from({ length: columns }, () => [])

        const newImages = [...images, ...images]

        for (let i = 0; i < newImages.length; i++) {
            const col = i % columns
            newArray[col].push(newImages[i].node)
        }
        return newArray
    }

    function getColumns() {
        let cols = 1 //start with default count: 1

        //we loop through config backwards to match the highest resolution first
        for (let i = CONFIG.length - 1; i >= 0; i--) {
            const { breakpoint: bp, columns } = CONFIG[i]
            //check if breakpoint is matched
            if (
                isBrowser &&
                window.matchMedia(`screen and (min-width: ${bp}px)`).matches
            ) {
                cols = columns
                break //match found. break
            }
        }
        return cols
    }

    return (
        <>
            <div className={galleryContainer}>
                {gallery.length > 0 &&
                    gallery.map((col, i) => {
                        return (
                            <div className={column} key={i}>
                                {col.map((image, j) => {
                                    return (
                                        <div className={item} key={j}>
                                            <img src={image.url} alt="" />
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
            </div>
        </>
    )
}

export default Gallery
