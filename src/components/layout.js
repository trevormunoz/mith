import React from 'react'

export default ({ children }) => {
    return (
        <html>
            <head>
                <title>MITH</title>
                <link rel="shortcut icon" href="/images/favicon.png" />
            </head>
            <body>
                {children}
            </body>
        </html>
    )
}