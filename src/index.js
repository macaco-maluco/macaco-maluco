import React from 'react'
import { render } from 'react-dom'
import LandingPage from './components/landing-page'
import games from './data/games'
import './index.scss'

console.log('😅', games)

render(<LandingPage games={games} />, document.getElementById('macaco-maluco'))
