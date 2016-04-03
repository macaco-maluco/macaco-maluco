import React, { PropTypes } from 'react'

export default function Game ({ game }) {
  return (
    <div className='game' style={{ background: game.mainColor }}>
      <section className='game-description'>
        {
          game.video &&
            <video className='game-video' src={game.video} loop autoPlay />
        }
        {
          game.image &&
            <img className='game-image' src={game.image} />
        }
        <h1>{game.name}</h1>
        <p className='game-tagline'>{game.shortDescription}</p>
        <p>{game.longDescription}</p>
        <div className='actions'>
          <a className='play' href={game.url}>Play now!</a>
        </div>
      </section>
    </div>
  )
}

Game.PropTypes = {
  game: PropTypes.object
}
