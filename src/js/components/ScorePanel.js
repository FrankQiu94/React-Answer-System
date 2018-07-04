import React from 'react'
import { connect } from 'react-redux'
import { Modal } from 'antd'
import { handlePanel } from '../redux/answer.redux'

import FormPanel from './FormPanel'
import RepostPanel from './RepostPanel'

@connect(
  state => state.answer,
  {handlePanel}
)
export default class ScorePanel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      className: 'expression-1'
    }
  }
  handleExpression() {
    const s = this.props.score
    let resultClassName = 'expression-'
    switch(true) {
      case s <= 20:
        resultClassName += '1'
        break
      case s <= 40:
        resultClassName += '2'
        break
      case s <= 60:
        resultClassName += '3'
        break
      case s <= 80:
        resultClassName += '4'
        break
      default:
        resultClassName += '5'
        break
    }
    return resultClassName
  }
  handleShowForm() {
    this.props.handlePanel({
      name: 'form',
      value: true
    })
  }
  handleShowRepost() {
    this.props.handlePanel({
      name: 'repost',
      value: 'block'
    })
  }
  handleRefresh() {
    // const { match } = this.props
    // console.log(match)
    window.location.href = 'http://www.cyikao.com/zg/2018_ysdtxt'
  }
  render () {
    return (
      <Modal
        visible={this.props.countdown}
        closable={false}
        footer={null}
        wrapClassName="scorePanel"
      >
        <div className={`expression ${this.handleExpression()}`}></div>
        <div className="scoreResult">本次获得的成绩是<span className="red_txt">{this.props.score}</span>分！</div>
        <div className="handleArea">
          <div className="handleElement" onClick={this.handleShowForm.bind(this)}>留下联系方式领取礼品</div>
          <div className="handleElement" onClick={this.handleShowRepost.bind(this)}>转发朋友圈获取资料</div>
          <div className="handleElement" onClick={this.handleRefresh.bind(this)}>再答一次</div>
        </div>
        <div className="qrArea">
          <div className="qrBox"><img src="http://www.cyikao.com/zg/2018_ysdtxt/static/media/qr.jpg"/></div>
          <div className="qrTxt">本活动所有题目及答案将于5月15日在“中公执业药师考试”公众号上发布，回复“最强大脑”获取。</div>
        </div>
        <FormPanel/>
        <RepostPanel/>
      </Modal>
    )
  }
}
