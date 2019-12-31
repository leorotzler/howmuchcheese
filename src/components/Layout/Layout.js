import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { createGlobalStyle } from 'styled-components'

import Header from '../Header/Header'

// import '../../styles/main.scss'
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background: #E2B14B;
    color: black;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    /* font-family: 'Pacifico', cursive; */
    font-size: 10px;
  }

  h1 {
    font-size: 3.5rem;
    padding-bottom: 1.5rem;
  }
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
      <div>
          <GlobalStyle />
          <Header siteTitle={data.site.siteMetadata.title} />
          <ContentContainer>{children}</ContentContainer>
      </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
