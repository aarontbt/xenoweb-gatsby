import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Layout } from "antd"

import Pane from "./pane"
import style from "./page.module.css"
import Hero from "./hero"

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
          <Pane>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </Pane>
        </Footer>
      </Layout>
    </>
  )
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Page
