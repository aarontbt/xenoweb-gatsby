import React from "react"
import { Icon } from "antd"

import Pane from "./pane"

const Ender = () => {
  return (
    <Pane>
      &copy; {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
      {` `}
      <Icon type="plus" />
      {` `}
      <a href="https://reactjs.org/">ReactJS</a>
      {` `}
      <Icon type="plus" />
      {` `}
      <a href="https://ant.design">Ant Design</a>
    </Pane>
  )
}

export default Ender
