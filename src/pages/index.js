import React from "react"
import { Link } from "gatsby"
import { Button, Row, Col } from 'antd'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi there!</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <Row type="flex" style={{ margin: "24px 0" }}>
      <Col>
        <Button size={"large"} type={"primary"}>Click here!</Button>
        <Button size={"large"} style={{ marginLeft: "16px" }}>Email Me</Button>
      </Col>
    </Row>
  </Layout>
)

export default IndexPage
