import React, { PropTypes } from 'react'
import Game from './game'

export default function Games ({ games }) {
  return (
    <ul id='games' className='games'>
      {
        games.map((game) => {
          return (
            <li>
              <Game game={game} />
            </li>
          )
        })
      }
    </ul>
  )
}

Game.PropTypes = {
  games: PropTypes.array.isRequired
}
