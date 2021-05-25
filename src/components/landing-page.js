import React from 'react'
import Hero from './hero'
import Games from './games'

export default function (props) {
  return (
    <div className="landing-page">
      <Hero />
      <Games games={props.games} />
      <footer>
        <h1 className="contributors">Authors</h1>
        <p>Made possible by the work of some amazing developers and designers!</p>

        <div className="creators">
          <a href="https://github.com/besen">
            <img className="creator" src="https://s.gravatar.com/avatar/e0d8ad378e2447a83cfc7ad3cf948db6?s=50" />
          </a>
          <a href="https://github.com/xaviervia/">
            <img className="creator" src="https://s.gravatar.com/avatar/648a1147d8e30f8d18f3d2bff66ecc53?s=50" />
          </a>
          <a href="https://github.com/jucomin/">
            <img className="creator" src="https://s.gravatar.com/avatar/09a99eded613f56eaabae1b386913a0b?s=50" />
          </a>
          <a href="https://github.com/maxcnunes">
            <img className="creator" src="https://s.gravatar.com/avatar/2d62e386c079f824fe7f0c8e8e83128b?s=50" />
          </a>
          <a href="https://github.com/npejo">
            <img className="creator" src="https://s.gravatar.com/avatar/7b8970e1d573ee403152496257e763ad?s=50" />
          </a>
          <a href="https://github.com/pirelenito/">
            <img className="creator" src="https://s.gravatar.com/avatar/d0cb5e66c31a8c5b2ef0b8f57804d946?s=50" />
          </a>
          <a href="https://github.com/marcioos/">
            <img className="creator" src="https://s.gravatar.com/avatar/147cbeb57f3100e97515c8ffb76bff4c?s=50" />
          </a>
          <a href="https://github.com/marlonicus/">
            <img className="creator" src="https://secure.gravatar.com/avatar/33eb880254afe7a87908ce5051e7e0d4?s=50" />
          </a>
          <a href="https://github.com/rodrigomachado">
            <img className="creator" src="https://s.gravatar.com/avatar/a4eeacab47e0c322e81ceec3614e12fc?s=50" />
          </a>
          <a href="https://github.com/tulios">
            <img className="creator" src="https://s.gravatar.com/avatar/141f83b6b19379276350a4c7d1a7175c?s=50" />
          </a>
          <a href="https://github.com/fnmunhoz">
            <img className="creator" src="https://s.gravatar.com/avatar/3b8122e123c226a906d479c30441ae6c?s=50" />
          </a>
          <a href="https://github.com/RobertoMoura">
            <img className="creator" src="https://s.gravatar.com/avatar/6f245b60f62748eabd819a23ff1523f4?s=50" />
          </a>
        </div>
      </footer>
    </div>
  )
}
