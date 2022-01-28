import * as React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'

import {
    container,
    sectionXl,
    fontWeightLight,
    fontWeightNormal,
    mt2,
    mb2,
} from '../components/layout.module.css'

const IndexPage = () => (
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
        <div
            className={`${container} ${mt2} ${mb2}`}
            style={{
                height: 1000,
            }}
        >
            <p>Coming soon!!</p>
        </div>
    </Layout>
)

export default IndexPage
