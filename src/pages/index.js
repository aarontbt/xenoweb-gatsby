import React from "react"
import { PageHeader, Empty } from "antd"

import Page from "../components/page"
import SEO from "../components/seo"

const IndexPage = () => {
  const routes = [
    {
      path: "/",
      breadcrumbName: "Home",
    },
  ]
  return (
    <Page>
      <SEO title="Home" />
      <PageHeader
        title="Under Construction"
        breadcrumb={{ routes }}
        style={{ paddingLeft: "0", paddingRight: "0" }}
      />
      <Empty style={{ margin: "5rem auto" }} />
    </Page>
  )
}

export default IndexPage
