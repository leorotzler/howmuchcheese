import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout/Layout'
import SEO from '../components/seo'
import styled from 'styled-components'

const H1 = styled.h1`
    font-size: 2.5rem;
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

const Button = styled.div`
    width: 100%;
    max-width: 18rem;
    margin-bottom: 1.5rem;
    background: #F2D4AB;
    font-size: 2.5rem;
    text-align: center;
    font-family: 'Pacifico', cursive;

    &:hover {
        box-shadow: 0px 0px 8px rgba(0,0,0,0.2);
    }

    a {
        display: block;
        padding: 1.5rem .8rem;
        text-decoration: none;
        color: black;
    }
`

export default function what() {
    return (
        <Layout>
      <SEO title="Home" />
      <H1>What to eat?</H1>
      <ButtonContainer>
        <Button>
            <Link to="/fondue">
                Fondue
            </Link>
        </Button>
        <Button>
            <Link to="/raclette">
                Raclette
            </Link>
        </Button>
      </ButtonContainer>
    </Layout>
    )
}
