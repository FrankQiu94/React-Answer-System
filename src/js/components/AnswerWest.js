import React from 'react'
// import Answer from './Answer'

import {connect} from 'react-redux'
import CountDown from './CountDown'
import Music from './Music'
import Answer from './Answer'

import { getTitleData } from '../redux/answer.redux'


@connect(
  state => state.answer,
  { getTitleData }
)
export default class AnswerWest extends React.Component {
  componentDidMount() {
    this.props.getTitleData('west', 20)
  }
  render () {
    return (
      <div className="answerBox">
        <Music/>
        {this.props.countdown ? null : <CountDown/>}
        <Answer/>
      </div>
    )
  }
}
