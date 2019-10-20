import React from "react"
import { Col, Row } from "antd"

import Page from "../components/page"
import SEO from "../components/seo"
import Contacts from "../components/contacts"
import { SvgRedline } from "../components/svg"

const IndexPage = () => {
  return (
    <Page>
      <SEO title="Home" />
      <Row>
        <Col md={12}>
          <SvgRedline animate={true} />
          <Contacts />
        </Col>
        <Col md={12}></Col>
      </Row>
    </Page>
  )
}

export default IndexPage
