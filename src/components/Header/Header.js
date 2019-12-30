import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledLink = styled.div`
  a {
    color: black;
    text-decoration: underline;
  }
`

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
      <StyledLink>
        <Link
          to="/"
        >
          how much cheese?
        </Link>
      </StyledLink>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
