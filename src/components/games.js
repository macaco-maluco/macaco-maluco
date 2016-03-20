import React from 'react'
import videPressora from './games/video-pressora.mp4'

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
    </ul>
  )
}
