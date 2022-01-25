import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

// CSS Imports
import { container } from "./layout.module.css"
import { header, headerContainer, toggle, logo } from "./header.module.css"

// LOGO
import Logo from "./logo"

const Header = ({ siteTitle }) => (
  <header className={header}>
    <div className={`${container} ${headerContainer}`}>
      <div className={toggle}>---</div>
      <div className={logo}>
        <Link to="/">
          <Logo height={20} />
        </Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
