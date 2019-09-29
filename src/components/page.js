import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Layout } from "antd"

import style from "./page.module.css"

import Pane from "./pane"
import Hero from "./hero"
import Ender from "./ender"

const Page = ({ children }) => {
  const data = useStaticQuery(graphql`
    query PageTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { Header, Footer, Content } = Layout

  return (
    <>
      <Layout className={style.layout}>
        <Header className={style.header} title={data.site.siteMetadata.title}>
          <Hero />
        </Header>
        <Content className={style.content}>
          <Pane>{children}</Pane>
        </Content>
        <Footer className={style.footer}>
          <Ender />
        </Footer>
      </Layout>
    </>
  )
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Page
