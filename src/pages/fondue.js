import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout/Layout'
import Image from '../components/image'
import SEO from '../components/seo'
import AmountCalculator from '../components/AmountCalculator/AmountCalculator'

const Fondue = () => (
  <Layout>
    <SEO title="Fondue" />
    <div className="">
      <AmountCalculator
        foodName="Fondue"
        minAmount={150}
        maxAmount={200}
        minPersons={1}
        maxPersons={20}
        companionFood="bread"
      />
    </div>
  </Layout>
)

export default Fondue
