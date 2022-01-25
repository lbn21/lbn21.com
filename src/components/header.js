import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"

// CSS Imports
import { container } from "./layout.module.css"
import { header, headerContainer, toggle, logo } from "./header.module.css"

// LOGO
import Logo from "./logo"

import { Squeeze as Hamburger } from "hamburger-react"

const Header = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <header className={header}>
      <div className={`${container} ${headerContainer}`}>
        <div className={logo}>
          <Link to="/">
            <Logo height={20} />
          </Link>
        </div>
        <div className={toggle}>
          <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
        </div>
      </div>
    </header>
  )
}

export default Header
