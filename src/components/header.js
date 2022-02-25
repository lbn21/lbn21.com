import * as React from 'react'
import { Link } from 'gatsby'

// CSS Imports
import { container } from '../css/layout.module.css'

import { header, headerContainer, logo } from '../css/header.module.css'

// LOGO
import Logo from './logo'

const Header = () => {
    return (
        <header className={header}>
            <div className={`${container} ${headerContainer}`}>
                <div className={logo}>
                    <Link to="/">
                        <Logo height="1rem" />
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header
