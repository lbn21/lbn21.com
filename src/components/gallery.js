import * as React from 'react'

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
    const [columns, setColumns] = React.useState(COLUMNS)

    //re-render if col no changes
    // React.useEffect(() => {
    //     console.log(columns)
    // }, [columns])

    React.useEffect(() => {
        function handleResize() {
            let cols = COLUMNS //start with default count

            //we loop through config backwards to match the highest resolution first
            breakpoints: for (let i = CONFIG.length - 1; i >= 0; i--) {
                const { breakpoint, columns } = CONFIG[i]
                //check if breakpoint is matched
                if (
                    window.matchMedia(`screen and (min-width: ${breakpoint}px)`)
                        .matches
                ) {
                    cols = columns
                    break breakpoints //match found. break
                }
            }
            setColumns(cols)
        }

        window.addEventListener('resize', handleResize)

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
