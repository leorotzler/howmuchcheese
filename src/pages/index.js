import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout/Layout'
import SEO from '../components/seo'
import styled from 'styled-components'

import { GiCheeseWedge } from 'react-icons/gi'

const Button = styled.button`
  width: 8rem;
  height: 8rem;
  margin-top: 2rem;
  font-size: 6rem;
  background-color: #f2d4ab;
  border: 0;
  border-radius: 50rem;

  a {
    color: black;
  }

  svg {
    padding-top: 1rem;
  }
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>SayCheese!</h1>
      <div>
        <Button>
          <Link to="/what">
            <GiCheeseWedge />
          </Link>
        </Button>
      </div>
    </Layout>
  )
}

export default IndexPage
