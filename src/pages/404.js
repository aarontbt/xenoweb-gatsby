import React from "react"
import { Result, Button } from "antd"
import { Link } from "gatsby"

import Page from "../components/page"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Page>
    <SEO title="404: Not found" />
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Link href="/">
          <Button size={"large"} type="primary">
            Back Home
          </Button>
        </Link>
      }
    />
  </Page>
)

export default NotFoundPage
