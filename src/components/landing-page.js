import React, { PropTypes } from 'react'
import Hero from './hero'
import Games from './games'

export default React.createClass({
  propTypes: {
    games: PropTypes.array.isRequired
  },

  render: function () {
    return (
      <div className='landing-page'>
        <Hero/>
        <div className='description'>
          <h1 className='games-built'>Games built on Hackthons</h1>
          <p>Hackthons comes and goes but the games built on those intense 48 hours must live on! <strong>Macaco Maluco</strong> is an endeavor to keep these games alive!</p>
          <p>All the games bellow are open-source and available for contribution at our <a href='https://github.com/macaco-maluco/'>GitHub organization</a>.</p>

          <h1 className='contributors'>Contributors</h1>
          <p>We are hackers, we are artisans, we are builders!</p>
          <p>These games were made possible by the work of some amazing developers and designers.</p>

          <div className='creators'>
            <a href='https://github.com/besen'><img className='creator' src='https://s.gravatar.com/avatar/e0d8ad378e2447a83cfc7ad3cf948db6?s=50'/></a>
            <a href='https://github.com/maxcnunes'><img className='creator' src='https://s.gravatar.com/avatar/2d62e386c079f824fe7f0c8e8e83128b?s=50'/></a>
            <a href='https://github.com/npejo'><img className='creator' src='https://s.gravatar.com/avatar/7b8970e1d573ee403152496257e763ad?s=50'/></a>
            <a href='https://github.com/pirelenito/'><img className='creator' src='https://s.gravatar.com/avatar/d0cb5e66c31a8c5b2ef0b8f57804d946?s=50'/></a>
            <a href='https://github.com/marcioos/'><img className='creator' src='https://s.gravatar.com/avatar/147cbeb57f3100e97515c8ffb76bff4c?s=50'/></a>
            <a href='https://github.com/rodrigomachado'><img className='creator' src='https://s.gravatar.com/avatar/a4eeacab47e0c322e81ceec3614e12fc?s=50'/></a>
            <a href='https://github.com/tulios'><img className='creator' src='https://s.gravatar.com/avatar/141f83b6b19379276350a4c7d1a7175c?s=50'/></a>
            <a href='https://github.com/fnmunhoz'><img className='creator' src='https://s.gravatar.com/avatar/3b8122e123c226a906d479c30441ae6c?s=50'/></a>
            <a href='https://github.com/RobertoMoura'><img className='creator' src='https://s.gravatar.com/avatar/6f245b60f62748eabd819a23ff1523f4?s=50'/></a>
          </div>
        </div>
        <Games games={this.props.games}/>
        <footer>
          <p>
            Made with ❤︎ by people on the internet.
          </p>
        </footer>
      </div>
    )
  }
})
