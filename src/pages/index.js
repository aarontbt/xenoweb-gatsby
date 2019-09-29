import React from "react"
import { Link } from "gatsby"
import { Button, Row, Col, Modal, Typography } from "antd"

import Page from "../components/page"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const info = () => {
    Modal.info({
      title: "Sorry...",
      centered: true,
      content: (
        <div>
          <p>
            You can email me later ya <span rel="image">👋</span>
          </p>
        </div>
      ),
      onOk() {},
    })
  }
  const { Title } = Typography
  return (
    <Page>
      <SEO title="Home" />
      <Title>Hi there!</Title>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
      <Row type="flex" style={{ margin: "24px 0" }}>
        <Col>
          <Button size={"large"} type={"primary"}>
            Click here!
          </Button>
          <Button size={"large"} style={{ marginLeft: "16px" }} onClick={info}>
            Email Me
          </Button>
        </Col>
      </Row>
    </Page>
  )
}

export default IndexPage
