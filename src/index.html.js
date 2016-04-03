import React from 'react'
import { renderToString } from 'react-dom/server'
import LandingPage from './components/landing-page'
import games from './data/games'

module.exports = function ({ htmlWebpackPlugin }) {
  return (`
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <meta charset="UTF-8">
        <title>Macaco Maluco</title>
      </head>
      <body>
        <div id="macaco-maluco">${renderToString(<LandingPage games={games}/>)}</div>
      </body>
    </html>
  `)
}
