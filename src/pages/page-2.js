import React from "react"
import { Link } from "gatsby"
import { Button, Typography } from "antd"

import Page from "../components/page"
import SEO from "../components/seo"

const { Title } = Typography

const SecondPage = () => (
  <Page>
    <SEO title="Page two" />
    <Title>Hi from the second page</Title>
    <p>Welcome to page 2</p>
    <Link to="/">
      <Button size={"large"}>Go back to the homepage</Button>
    </Link>
  </Page>
)

export default SecondPage
