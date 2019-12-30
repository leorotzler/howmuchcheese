import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout/Layout'
import Image from '../components/image'
import SEO from '../components/seo'
import AmountCalculator from '../components/AmountCalculator/AmountCalculator'

const Raclette = () => (
  <Layout>
    <SEO title="Raclette" />
    <AmountCalculator
      foodName="Raclette"
      minAmount={200}
      maxAmount={250}
      minPersons={1}
      maxPersons={20}
    />
  </Layout>
)

export default Raclette
