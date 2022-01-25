import * as React from "react"
import PropTypes from "prop-types"
import {Link} from "gatsby"

// CSS Imports
import {header} from "./header.module.css";
import {container, h1, link} from "./layout.module.css";

const Header = ({siteTitle}) => (
    <header className={header}>
        <div className={container}>
            <h1 className={h1}>
                <Link to="/" className={link}>
                    {siteTitle}
                </Link>
            </h1>
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
