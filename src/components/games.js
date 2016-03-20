import React from 'react'
import videPressora from './games/pressora.mp4'
import imageCinemaFu from './games/cinema-fu.png'
import goHorseGo from './games/go-horse-go.mp4'

export default () => {
  return (
    <ul className='games'>
      <li>
        <section className='game-description'>
          <h1>Pressora</h1>
          <p>Control battleships remotely while dealing with the latency of space scale</p>
          <p>Pressora is a turn-based multiplayer game where, due to the latencies caused by the massive distances of the solar system, you must program a set of instructions first and them watch the battle unfolds.</p>
          <div className='actions'>
            <a className='play' href='http://pressora.macacomaluco.space/'>Play now!</a>
          </div>
        </section>
        <video className='game-video' src={videPressora} loop autoPlay />
      </li>

      <li>
        <img className='game-image' src={imageCinemaFu} />
        <section className='game-description'>
          <h1>Cinema fu</h1>
          <p>the connections between movies and stars.</p>
          <p>A game where you need to find connections between 2 actors and/or movies.</p>
          <div className='actions'>
            <a className='play' href='http://cinema-fu.macacomaluco.space/'>Play now!</a>
          </div>
        </section>
      </li>

      <li>
        <section className='game-description'>
          <h1>Go Horse Go!</h1>
          <p>We are shooting horses! On space!</p>
          <p>This an awesome sci-fi game! It's mythology is derived from Assassin's Creed and the game-play is heavily influenced by Angry Birds and Pac-Man.</p>
          <div className='actions'>
            <a className='play' href='http://go-horse-go.macacomaluco.space/'>Play now!</a>
          </div>
        </section>
        <video className='game-video' src={goHorseGo} loop autoPlay />
      </li>
    </ul>
  )
}
