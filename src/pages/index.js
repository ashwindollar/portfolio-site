import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>I live and work in Dallas, building useful and beautiful things</h1>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    <h2><a href="https://save-ly.herokuapp.com">Savely</a></h2>
    <p>An easy to use budgeting application</p>
    <p>Say Hi or find me on other platforms: <a href="http://github.com/ashwindollar">Github</a> & <a href="linkedin.com/in/ashwinnarasimhan">Linkedin</a></p>
  </Layout>
)

export default IndexPage
