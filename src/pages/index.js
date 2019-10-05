import React from "react"
import { PageHeader, Empty } from "antd"

import Page from "../components/page"
import SEO from "../components/seo"
import { SvgRedline } from "../components/svg"

const IndexPage = () => {
  return (
    <Page>
      <SEO title="Home" />
      <SvgRedline animate={true} />
      <PageHeader
        title="Under Construction"
        style={{ paddingTop: "46px", paddingLeft: "0", paddingRight: "0" }}
      />
      <Empty style={{ margin: "5rem auto" }} />
    </Page>
  )
}

export default IndexPage
