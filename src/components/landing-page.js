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
        <Hero />
        <Games games={this.props.games}/>
      </div>
    )
  }
})
