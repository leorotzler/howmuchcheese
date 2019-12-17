import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout/Layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="">
      <p>SayCheese!</p>
    </div>
    <div className="">
      <p>What do you want to eat?</p>
    </div>
    <div className="container">
      <div className="row">
        <div className="column column--50">
          <Link to="/fondue" className="button button--mobileFull button--secondary">Fondue</Link>
        </div>
        <div className="column column--50">
        <Link to="/raclette" className="button button--mobileFull button--secondary">Raclette</Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
