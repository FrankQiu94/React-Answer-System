import React from 'react'
import { connect } from 'react-redux'
import { handlePanel } from '../redux/answer.redux'

@connect(
  state => state.answer,
  {handlePanel}
)
export default class RepostPanel extends React.Component {
  onCancel(){
    this.props.handlePanel({
      name: 'repost',
      value: 'none'
    })
  }
  render () {
    return (
      <div
        className="shadowLayer"
        style={{display: `${this.props.repostVisible}`}}
        onClick={this.onCancel.bind(this)}
      >
        <div className="alarm"></div>
        <div className="repost_qrArea">
          <div className="repost_qrBox">
            <img src="http://www.cyikao.com/zg/2018_ysdtxt/static/media/qr_shunzi.jpg" alt="中公顺子老师：xiaomogu-da"/>
          </div>
          <div className="repost_txt">发送转发朋友圈截图给顺子老师获取资料（学霸笔记）</div>
        </div>
      </div>
    )
  }
}

