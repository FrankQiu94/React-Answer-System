import React from 'react'

export default class Music extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      play: 'rotate'
    }
  }
  handleMusic() {
    if(this.state.play === 'rotate') {
      this.setState({
        play: null
      })
      this.refs.music.pause()
    } else {
      this.setState({
        play: 'rotate'
      })
      this.refs.music.play()
    }
  }
  render () {
    return (
      <div className={`musicEle ${this.state.play}`} onClick={this.handleMusic.bind(this)}>
        <audio ref="music" src="http://www.cyikao.com/zg/2018_ysdtxt/file/bgm.mp3" autoPlay loop></audio>
      </div>
    )
  }
}
