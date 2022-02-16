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

import Gallery from '../components/gallery'

export const query = graphql`
    {
        allImages {
            edges {
                node {
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
                        {/*Hello there!*/}
                        Lorem ipsum!
                        <br />
                        <span className={fontWeightNormal}>
                            {/*I'm Jakub Marciniszyn*/}
                            Lorem ipsum dolor sit
                        </span>
                    </h1>
                    <h5 className={fontWeightLight}>
                        Asperiores aspernatur beatae blanditiis cupidit
                        {/*Amateur photographer with 7 years of experience*/}
                    </h5>
                </div>
            </div>
            <div className={`${container} ${mt2} ${mb2}`}>
                <Gallery images={images} />
            </div>
        </Layout>
    )
}

export default IndexPage
