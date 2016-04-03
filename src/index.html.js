import React from 'react'
import { renderToString } from 'react-dom/server'
import LandingPage from './components/landing-page'
import games from './data/games'
import image from 'file!./og-image.png'

module.exports = function ({ htmlWebpackPlugin }) {
  return (`
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <meta charset="UTF-8">
        <title>Macaco Maluco</title>

        <meta name="description" content="Macaco Maluco - Games built on Hackthons" />
        <meta property="og:title" content="Macaco Maluco" />
        <meta property="og:description" content="Games built on Hackthons" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Macaco Maluco" />
        <meta name="twitter:title" content="Macaco Maluco" />
        <meta name="twitter:description" content="Games built on Hackthons" />
        <meta property="og:image" content="${image}" />

      </head>
      <body>
        <div id="macaco-maluco">${renderToString(<LandingPage games={games}/>)}</div>
      </body>
    </html>
  `)
}
