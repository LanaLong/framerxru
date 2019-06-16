import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import logoIcon from "../images/logo-qm-simple.png"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: "#232223",
      marginBottom: `0rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <span
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* ** Title Logo ** */}
        <img
          src={logoIcon}
          alt="QM::Experience"
          style={{
            width: "50px",
            margin: "0 20px 0 0",
            borderRadius: "50%",
          }}
        />
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </span>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
