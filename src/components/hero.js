import React from "react"
import { Link } from "gatsby"

import Pane from "./pane"
import style from "./hero.module.css"
import Hi from "./hi"

const Hero = ({ props }) => {
  return (
    <Pane className={style.hero} flex={true} {...props}>
      <Link to="/">
        <Hi className={style.hi} />
      </Link>
      <p>
        I&apos;m Aaron Tan, a confident, articulate and determined Product
        Designer who has experience of being involved in a wide range of UX
        activities across both design and frontend development. I&apos;m
        currently looking for an exciting place to work and showcase my skills.
      </p>
    </Pane>
  )
}

export default Hero
