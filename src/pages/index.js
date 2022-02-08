import * as React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'

import {
    container,
    sectionXl,
    fontWeightLight,
    fontWeightNormal,
    mt2,
    mb2,
} from '../css/layout.module.css'

import { gallery } from '../css/index.module.css'

export const query = graphql`
    {
        allImages {
            edges {
                node {
                    thumbnailUrl
                    title
                    url
                }
            }
        }
    }
`

const IndexPage = ({ data }) => {
    const images = data.allImages.edges

    return (
        <Layout>
            {' '}
            <Seo title="Home" />
            <div className={sectionXl}>
                <div className={container}>
                    <h1 className={fontWeightLight}>
                        Hello there!
                        <br />
                        <span className={fontWeightNormal}>
                            I'm Jakub Marciniszyn
                        </span>
                    </h1>
                    <h5 className={fontWeightLight}>
                        Amateur photographer with 7 years of experience
                    </h5>
                </div>
            </div>
            <div className={`${container} ${mt2} ${mb2}`}>
                <div className={gallery}>
                    {images.map((image, i) => {
                        const imageData = image.node
                        return (
                            <img
                                key={i}
                                src={imageData.thumbnailUrl}
                                alt={imageData.title}
                            />
                        )
                    })}
                </div>
            </div>
        </Layout>
    )
}

export default IndexPage
