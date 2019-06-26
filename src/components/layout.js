import React from "react"

export default props => {
  return (
    <html>
      <head>
        <title>MITH: {props.title}</title>
        <link rel="shortcut icon" href="/images/favicon.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </head>
      <body>{props.children}</body>
    </html>
  )
}
