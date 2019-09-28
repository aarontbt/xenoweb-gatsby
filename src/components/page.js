import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Layout, Typography } from "antd"

import style from "./page.module.css"

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
  const { Title } = Typography

  return (
    <>
      <Layout>
        <Header className={style.header}>
          <Title level={2} className={style.title}>
            {data.site.siteMetadata.title}
          </Title>
        </Header>
        <Content className={style.content}>{children}</Content>
        <Footer className={style.footer}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Footer>
      </Layout>
    </>
  )
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Page
