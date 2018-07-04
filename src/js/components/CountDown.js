import React from 'react'
import { connect } from 'react-redux'

import { submitInfo } from '../redux/answer.redux'

@connect (
  state => state.answer,
  {submitInfo}
)
export default class CountDown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      endTime: this.props.answer.length * 30,
      // endTime: 5,
      min: 0,
      sec: 0
    }
  }
  componentDidMount() {
    let endTime = this.state.endTime
    this.timer = setInterval(() => {
        this.setState({
          endTime:  endTime -= 1,
          min: parseInt(this.state.endTime / 60 % 60, 10) < 10 ? `0${parseInt(this.state.endTime / 60 % 60, 10)}` : parseInt(this.state.endTime / 60 % 60, 10),
          sec: parseInt(this.state.endTime % 60, 10) < 10 ? `0${parseInt(this.state.endTime % 60, 10)}` : parseInt(this.state.endTime % 60, 10)
        }, () => {
            if(this.state.endTime <= 0) {
              this.props.submitInfo(this.props.answer, true)
              clearInterval(this.timer)
          }
        })
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  render () {
    return (
      <div className="countDown_box">倒计时：{this.state.min}:{this.state.sec}</div>
    )
  }
}
