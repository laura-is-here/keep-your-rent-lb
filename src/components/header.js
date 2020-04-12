import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header>
    <h1>
      Can't pay rent?
      <br />
      Don't pay rent!
    </h1>
    <p>The logic behind not paying rent during the COVID-19 Pandemic</p>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
