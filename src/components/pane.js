import React from "react"

import style from "./pane.module.css"

const Pane = ({ className = "", children, flex = false }) => (
  <>
    {flex ? (
      <section className={`${style.paneflex} ${className}`}>{children}</section>
    ) : (
      <section className={`${style.pane} ${className}`}>{children}</section>
    )}
  </>
)

export default Pane
