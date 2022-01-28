import * as React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'gatsby'

// CSS Imports
import { container } from './layout.module.css'
import {
    header,
    headerContainer,
    isActive,
    menu,
    toggle,
    logo,
} from './header.module.css'

// LOGO
import Logo from './logo'

import { Squeeze as Hamburger } from 'hamburger-react'

const Header = () => {
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
                        <Logo height={16} />{' '}
                    </Link>
                </div>
                <div className={toggle}>
                    <Hamburger
                        toggled={isOpen}
                        toggle={setOpen}
                        size={16}
                        color={'#fff'}
                    />
                </div>
            </div>
            <div className={menu}>
                <ul>
                    <li>Link1</li>
                    <li>Link2</li>
                    <li>Link3</li>
                </ul>
            </div>
        </header>
    )
}

export default Header
