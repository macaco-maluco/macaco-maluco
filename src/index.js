import React from 'react'
import { render } from 'react-dom'
import LandingPage from './components/landing-page'
import games from './data/games'
import './index.scss'

render(<LandingPage games={games}/>, document.getElementById('macaco-maluco'))
