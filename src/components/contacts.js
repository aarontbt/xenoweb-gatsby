import React from "react"
import { PageHeader, Col, Row, Icon, Typography } from "antd"

import IconLocation from "../images/icon-location.svg"
import IconLinkedIn from "../images/icon-linkedin.svg"
import IconGithub from "../images/icon-github.svg"

import style from "./contacts.module.css"

const Contacts = () => {
  const { Text } = Typography
  return (
    <>
      <PageHeader title="contact" className={style.header} />
      <Row type="flex" align="middle" className={style.row}>
        <Col>
          <Icon component={IconLocation} className={style.icons} />
        </Col>
        <Col>
          <Text className={style.text}>Kuala Lumpur, Malaysia</Text>
        </Col>
      </Row>
      <Row type="flex" align="middle" className={style.row}>
        <Col>
          <Icon component={IconLinkedIn} className={style.icons} />
        </Col>
        <Col>
          <a
            href="https://linkedin.com/in/aarontbt/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Text className={style.text}>linkedin.com/in/aarontbt/</Text>
          </a>
        </Col>
      </Row>
      <Row type="flex" align="middle" className={style.row}>
        <Col>
          <Icon component={IconGithub} className={style.icons} />
        </Col>
        <Col>
          <a
            href="https://github.com/aarontbt/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Text className={style.text}>github.com/aarontbt/</Text>
          </a>
        </Col>
      </Row>
    </>
  )
}

export default Contacts
