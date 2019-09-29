import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Layout, Typography } from "antd"

import Pane from "./pane"
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
      <Layout className={style.layout}>
        <Header className={style.header}>
          <Pane flex={true}>
            <Title level={2} className={style.title}>
              <Link to="/">{data.site.siteMetadata.title}</Link>
            </Title>
          </Pane>
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
