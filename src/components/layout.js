import React from "react"
import { Helmet } from "react-helmet"

export default props => {
  return (
    <>
      <Helmet>
        <title>MITH: {props.title}</title>
        <link rel="shortcut icon" href="/images/favicon.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Helmet>
      <body>{props.children}</body>
    </>
  )
}
