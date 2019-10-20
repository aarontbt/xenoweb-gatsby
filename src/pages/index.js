import React from "react"
import { Col, Row } from "antd"

import Page from "../components/page"
import SEO from "../components/seo"
import Contacts from "../components/contacts"
import Skills from "../components/skills"
import Experiences from "../components/experiences"
import { SvgRedline } from "../components/svg"

const IndexPage = () => {
  return (
    <Page>
      <SEO title="Home" />
      <Row>
        <Col lg={12}>
          <SvgRedline animate={true} />
          <Contacts />
        </Col>
        <Col lg={12}>
          <Skills />
        </Col>
      </Row>
      <Row>
        <Col>
          <SvgRedline animate={true} />
          <Experiences />
        </Col>
      </Row>
    </Page>
  )
}

export default IndexPage
