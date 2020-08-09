import React from "react"
import { PageHeader, Col, Row, Rate, Typography, Tag } from "antd"

import style from "./skills.module.css"

const Contacts = () => {
  const { Text } = Typography
  const skills = [
    "HTML5",
    "CSS3",
    "JAVASCRIPT",
    "JQUERY",
    "SASS",
    "LESS",
    "WEBPACK",
    "REACT",
    "GATSBY",
    "NEXTJS",
    "CYPRESS",
    "FIGMA",
    "SKETCH",
    "INVISION",
  ]

  const Rating = props => (
    <Row type="flex" align="middle" className={style.row}>
      <Col span={16}>
        <Text className={style.text}>{props.skill}</Text>
      </Col>
      <Col span={8}>
        <Rate
          character="●"
          disabled
          defaultValue={props.value}
          className={style.rate}
        />
      </Col>
    </Row>
  )

  return (
    <>
      <PageHeader title="skills" className={style.header} />
      <Rating skill="USER EXPERIENCE (UX)" value={4} />
      <Rating skill="UI DESIGN &amp; WIREFRAME" value={4} />
      <Rating skill="FRONTEND DEVELOPMENT" value={4} />
      <Rating skill="USER RESEARCH" value={3} />
      <Row type="flex" className={style.tag}>
        <Col>
          {skills.map((skill, index) => {
            return <Tag key={index}>{skill}</Tag>
          })}
        </Col>
      </Row>
    </>
  )
}

export default Contacts
