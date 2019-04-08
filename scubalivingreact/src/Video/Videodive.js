import React, { Component } from 'react'
import ReactPlayer from 'react-player'

class Videodive extends Component {
  render () {
      
    return <ReactPlayer url='https://www.youtube.com/watch?v=HSiSIwPq1GA' playing style={{width: '99vw', height: '90vh', margin: '0px 0px 0px 0px' }} />
  }
}
export default Videodive

