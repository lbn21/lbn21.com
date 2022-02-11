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

// Check if window is defined (so if in the browser or in node.js).
const isBrowser = typeof window !== 'undefined'

const Header = () => {
    if (isBrowser) {
        function syncHeight() {
            document.documentElement.style.setProperty(
                '--window-inner-height',
                `${window.innerHeight}px`
            )
        }

        window.addEventListener('resize', syncHeight)
        syncHeight()
    }

    const [isOpen, setOpen] = useState(false)
    const modal = React.createRef()

    useEffect(() => {
        if (isOpen) {
            //SHOW MENU
            document.documentElement.classList.add('no-scroll')

            // block pointer events
            modal.current.addEventListener('pointermove', preventDefault)
            modal.current.addEventListener('touchmove', preventDefault)
        } else {
            //HIDE MENU
            document.documentElement.classList.remove('no-scroll')

            // resume pointer events
            modal.current.removeEventListener('pointermove', preventDefault)
            modal.current.removeEventListener('touchmove', preventDefault)
        }
    }, [isOpen, modal])

    // helper function to run preventDefault
    function preventDefault(e) {
        e.preventDefault()
    }

    return (
        <header className={`${header} ${isOpen ? isActive : ''}`}>
            <div className={`${container} ${headerContainer}`}>
                <div className={logo}>
                    <Link to="/">
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
            <div className={`${menu}`} ref={modal}>
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
