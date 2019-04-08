import React, { Component } from 'react'
import ReactPlayer from 'react-player'

class Video extends Component {
  render () {
      
    return <ReactPlayer url='https://youtu.be/j7jXakArD60' playing style={{width: '98vw', margin: '1px 1px 1px 1px' }} />
  }
}
export default Video

