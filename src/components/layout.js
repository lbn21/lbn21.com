/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import 'modern-css-reset'

// FONTS
import '@fontsource/poppins/200.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/600.css'
import '../css/root.module.css'
import '../css/global.css'

import { container, mt2, mb2 } from '../css/layout.module.css'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <footer>
                <div className={`${container} ${mt2} ${mb2}`}>
                    © {new Date().getFullYear()} lbn21, All Rights Reserved.
                </div>
            </footer>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
