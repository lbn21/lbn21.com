import * as React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'gatsby'

// CSS Imports
import {
    container,
    listUnstyled,
    fontWeightNormal,
    uppercase,
    letterSpacing2,
} from '../css/layout.module.css'
import {
    header,
    headerContainer,
    menu,
    isActive,
    toggle,
    logo,
} from '../css/header.module.css'

// LOGO
import Logo from './logo'

import { Squeeze as Hamburger } from 'hamburger-react'

const Header = () => {
    function syncHeight() {
        document.documentElement.style.setProperty(
            '--window-inner-height',
            `${window.innerHeight}px`
        )
    }
    window.addEventListener('resize', syncHeight)

    const [isOpen, setOpen] = useState(false)

    useEffect(() => {
        if (isOpen) {
            document.documentElement.classList.add('no-scroll')
        } else {
            document.documentElement.classList.remove('no-scroll')
        }
    }, [isOpen])

    return (
        <header className={`${header} ${isOpen ? isActive : ''}`}>
            <div className={`${container} ${headerContainer}`}>
                <div className={logo}>
                    <Link to="/">
                        {' '}
                        <Logo height="1rem" />
                    </Link>
                </div>
                <div className={toggle}>
                    <Hamburger
                        toggled={isOpen}
                        toggle={setOpen}
                        size={16}
                        hideOutline={true}
                        color={'var(--charcoal)'}
                    />
                </div>
            </div>
            <div className={`${menu}`}>
                <ul className={listUnstyled}>
                    <li>
                        <h6
                            className={`${fontWeightNormal} ${uppercase} ${letterSpacing2}`}
                        >
                            <a href="#">Home</a>
                        </h6>
                    </li>
                    <li>
                        <h6
                            className={`${fontWeightNormal} ${uppercase} ${letterSpacing2}`}
                        >
                            <a href="#">About</a>
                        </h6>
                    </li>
                    <li>
                        <h6
                            className={`${fontWeightNormal} ${uppercase} ${letterSpacing2}`}
                        >
                            <a href="#">Portfolio</a>
                        </h6>
                    </li>
                    <li>
                        <h6
                            className={`${fontWeightNormal} ${uppercase} ${letterSpacing2}`}
                        >
                            <a href="#">Shop</a>
                        </h6>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header
