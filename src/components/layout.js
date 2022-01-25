/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "sanitize.css"

// FONTS
import "@fontsource/poppins/200.css"
import "@fontsource/poppins/400.css"
import "@fontsource/poppins/600.css"
import "./global.css"

import { container, mb2 } from "./layout.module.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className={container}>
        <main>{children}</main>
        <footer className={mb2}>
          © {new Date().getFullYear()} lbn21, All Rights Reserved.
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
