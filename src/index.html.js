import React from 'react'
import { renderToString } from 'react-dom/server'
import LandingPage from './components/landing-page'

module.exports = function ({ htmlWebpackPlugin }) {
  return (`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Macaco Maluco</title>
      </head>
      <body>
        <div id="macaco-maluco">${renderToString(<LandingPage/>)}</div>
      </body>
    </html>
  `)
}
