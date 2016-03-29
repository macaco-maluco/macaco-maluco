import React, { PropTypes } from 'react'

export default function Game ({ games }) {
  return (
    <ul className='games'>
      {
        games.map((game) => {
          return (
            <li>
              <section className='game-description'>
                <h1>{game.name}</h1>
                <p>{game.shortDescription}</p>
                <p>{game.longDescription}</p>
                <div className='actions'>
                  <a className='play' href={game.url}>Play now!</a>
                </div>
              </section>
              {
                game.video &&
                  <video className='game-video' src={game.video} loop autoPlay />
              }
              {
                game.image &&
                  <img className='game-image' src={game.image} />
              }
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
