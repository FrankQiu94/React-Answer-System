import React from 'react'
import { connect } from 'react-redux'
import { Carousel, Radio, Modal } from 'antd'
import ScorePanel from './ScorePanel'

import { chooseThis, submitInfo, checkAll } from '../redux/answer.redux'

const RadioGroup = Radio.Group
const RadioButton = Radio.Button

@connect(
  state => state.answer,
  {chooseThis, submitInfo, checkAll}
)
export default class Answer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentIndex: 1,
      value: '',
      visible: false
    }
  }
  handleChange(index) {
    this.setState({
      currentIndex: index + 1
    })
    if(index === this.props.titles.length - 1) {
      this.refs.button.style.display = 'block'
    }
  }
  handleClick(index, e) {
    this.props.chooseThis(this.state.currentIndex - 1, e.target.value)
    this.refs.slider.next()
  }
  handleSubmit() {
    const answer = this.props.answer
    this.setState({
      visible: true
    })
    this.props.checkAll(answer)
  }
  handleOk(e){
    const answer = this.props.answer
    this.setState({
      visible: false
    })
    this.props.submitInfo(answer, true)
  }
  handleCancel (e) {
    this.setState({
      visible: false
    })
    let unAnswerIndex = this.props.answer.indexOf(null)
    if(unAnswerIndex > -1) {
      this.refs.slider.goTo(unAnswerIndex)
    }
  }
  onChange(e) {
    this.setState({
      value: e.target.value
    })
  }
  render () {
    const array = this.props.titles
    return (
      <div className="answerArea">
        <Carousel
          ref="slider"
          dots={false}
          infinite={false}
          speed={100}
          afterChange={index => this.handleChange(index)}
        >
          {array.map(v => (
            <div key={v.title}>
              <h3 className="title_header">{v.title.trim()}</h3>
              <RadioGroup
                className="selectors"
                onChange={e => this.onChange(e)}
              >
                  {v.selector.map((s, i) => (
                  <RadioButton
                    className="selector"
                    key={s}
                    value={s}
                    onClick={e => this.handleClick(i, e)}
                  >{s}</RadioButton>
                ))}
              </RadioGroup>
            </div>
          ))}
        </Carousel>
        <button ref="button" className="submitPage" onClick={this.handleSubmit.bind(this)}>交卷</button>
        <div className="indexShow"><span className="yellow_txt">{this.state.currentIndex}</span>/20</div>
        <Modal
          visible={this.state.visible}
          closable={false}
          footer={null}
          style={{ top: '30%' }}
          wrapClassName="ifsubmit"
        >
          <div className="border-box">
            <p className="slogan">{this.props.slogan}</p>
            <div className="handlePanel">
              <div className="btn" onClick={this.handleOk.bind(this)}>是</div>
              <div className="btn" onClick={this.handleCancel.bind(this)}>否</div>
            </div>
          </div>
        </Modal>
        <ScorePanel/>
      </div>
    )
  }
}
