/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "typeface-lato"

import Header from "./header"
import "./index.css"

const Layout = ({ children }) => {
  return (
    <article>
      <Header />
      <main>{children}</main>
      {/* <aside>
        <h2>Resources for tenants</h2>
        <div>
          <h3>Legal Aid Foundation Los Angeles (LAFLA)</h3>
          <p>
            Website: <br />
            Phone: <br />
            Email:
          </p>
          <hr />
        </div>
        <div>
          <h3>Los Angeles Tenants Union (LATU)</h3>
          <p>
            Website: <br />
            Phone: <br />
            Email:
          </p>
          <hr />
        </div>
        <div>
          <h3>Long Beach Residents Empowered (LiBRE)</h3>
          <p>
            Website: <br />
            Phone: <br />
            Email:
          </p>
          <hr />
        </div>
      </aside> */}
    </article>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
