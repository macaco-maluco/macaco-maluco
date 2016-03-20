import React from 'react'
import Hero from './hero'
import Games from './games'

export default React.createClass({
  render: function () {
    return (
      <div className='landing-page'>
        <Hero />
        <Games />
      </div>
    )
  }
})
