import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/me-updated/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        <hr/>
        <span style={{"fontSize": 11}}> Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>. Last Updated: {new Date().getMonth()+1}/{new Date().getFullYear()}</span>
      </footer>
    </div>
  )
}

export default Layout
