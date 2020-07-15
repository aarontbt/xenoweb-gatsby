import React from "react"
import { PageHeader, Col, Row, Typography } from "antd"

import style from "./experiences.module.css"

const Contacts = () => {
  const { Title, Paragraph, Text } = Typography

  const Experience = ({ children, period, company }) => (
    <Row className={style.experience}>
      <Col lg={3}>
        <Text className={style.period}>{period}</Text>
      </Col>
      <Col lg={{ span: 20, offset: 1 }}>
        <Title level={2} className={style.company}>
          {company}
        </Title>
        <Paragraph className={style.content}>{children}</Paragraph>
      </Col>
    </Row>
  )

  return (
    <>
      <PageHeader title="work experiences" className={style.header} />
      <Experience
        period="2019  MAR - CURRENT"
        company="UI/UX DESIGNER & FRONTEND DEVELOPER"
      >
        Founded in Tokyo, Grooves is a HR technology company that enhances the
        recruitment process for candidates, companies and recruiting agencies. I
        have taken the challenge to work with a fresh startup (5-man) company in
        bringing local talents to Japan. This is something I'm passionate about
        and I want to share working in Japan with others.
      </Experience>
      <Experience
        period="2015 SEP - 2019 JAN"
        company="SEEK ASIA (JOBSTREET) — PRODUCT DESIGN LEAD"
      >
        Responsible for synthesise the core user needs and problem to be solved
        by interpreting user research, analytics and secondary research; lead
        the conceptual design for a product feature by leading the right design
        activities required to solve the problem; own the quality and efficiency
        for a product design by constantly assessing whether design meets goals
        set by product owners; evaluate the effectiveness and mentoring of
        product designers to meet goals set by product owners.
      </Experience>
      <Experience
        period="2013 MAR - 2015 AUG"
        company="UNIQUE WEBSITES — TEAM LEAD UI/UX DEVELOPMENT"
      >
        Lead UI/UX team to bring Australia Tradingpost.com.au and its partners
        product for expansion; re-built Australian multi-million classified
        business Tradingpost.com.au website into responsive design complete with
        a entirely new flat-design, responsive Tradingpost ad management system
        (Easylist) in all under 3 months; setup a workflow/automation for each
        project for faster and better team coordination using tools such as the
        open source gulp.js to eliminate most of the mundane task.
      </Experience>
      <Experience
        period="2009 JUL - 2013 FEB"
        company="CUBINET INTERACTIVE (MSC) — SENIOR WEB DESIGNER"
      >
        Responsible for discovering and creating new UI for company product web
        frontend and backend; creating cross-browsers web templates for frontend
        developers to use, not only to look nicer but save developer time in
        debugging visual aspect of web applications.
      </Experience>
      <Experience
        period="2006 FEB - 2009 APR"
        company="KSE SYSTEM CO., LTD. (JAPAN) — SOFTWARE ENGINEER"
      >
        Designed web report with XML and XSLT for Blu-Ray Disc testing as well
        as creating tools to generate the report data at Sony Computer
        Entertainment Inc. resulting in 70% increased in delivering report for
        test team; assisted in creating part of the Flash subtitle engine that
        is to be used on “NHK On Demand” that support support wide range of
        styles that is not included on the original Flash component.
      </Experience>
    </>
  )
}

export default Contacts
