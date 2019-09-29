import React from "react"

import style from "./pane.module.css"

const Pane = ({ children, flex = false }) => (
  <>
    {flex ? (
      <section className={style.paneflex}>{children}</section>
    ) : (
      <section className={style.pane}>{children}</section>
    )}
  </>
)

export default Pane
