import React from 'react'
import { Modal } from 'antd'

export default class HomePage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      population: 0,
      visible: false
    }
  }
  componentWillMount () {
    let popular = this.state.population
    this.timer1 = setInterval(() => {
      this.state.population <= 10000
      ? (
        this.setState({
          population: popular += 1
        })
      )
      : clearInterval(this.timer1)
    }, 36)
  }
  componentDidMount () {
    this.timer2 = setTimeout(() => {
      this.handleModal()
      clearTimeout(this.timer2)
    }, 3000)
  }
  componentWillUnmount(){
    if(this.timer1) {
      clearInterval(this.timer1)
    }
    if(this.timer2) {
      clearTimeout(this.timer2)
    }
  }
  handleRedirect(url) {
    this.props.history.push(url)
  }
  handleModal() {
    this.setState({
      visible: true
    })
  }
  handleCancel(){
    this.setState({
      visible: false
    })
    this.refs.flyBtn.style.opacity = 1
  }
  render () {
    return (
      <div className="banner">
        <div className="population">已有<span className="yellow">{this.state.population}</span>人参与活动</div>
        <div className="hushBtns">
          <div className="btn" onClick={() => this.handleRedirect('/answer_east')}>中药入口</div>
          <div className="btn" onClick={() => this.handleRedirect('/answer_west')}>西药入口</div>
        </div>
        <div ref="flyBtn" className="flyBtn" onClick={this.handleModal.bind(this)}>活动<br/>说明</div>
        <Modal
          title="活动说明"
          visible={this.state.visible}
          onCancel={this.handleCancel.bind(this)}
          footer={null}
          keyboard={false}
          wrapClassName="introduction"
        >
          <div className="introPara">
            <div className="activity_title">活动时间：2018年5月1日~2018年5月14日</div>
          </div>
          <div className="introPara">
            <div className="activity_title">活动内容：</div>
            <div className="activity_content">
                <p><span className="range">1—20名</span><span className="red_txt">奖励9000元优惠券</span>+<span className="red_txt">名师考点精讲班</span>
                </p>
                <p><span className="range">21—50名</span><span className="red_txt">奖励8000元优惠券</span>+<span className="red_txt">送真题解析班</span></p>
                <p><span className="range">51—100名</span><span className="red_txt">奖励7000元优惠券</span>+<span className="red_txt">送密押卷（4科）</span></p>
                <p>现场报名送<span className="red_txt">全套图书</span>；</p>
                <p>以上优惠券仅限5月18日北京院长密训营课程使用</p>
            </div>
          </div>
          <div className="introPara">
            <div className="activity_title">Tips:</div>
            <div className="activity_content">
                <p>答题后请留下联系方式，</p>
                <p>礼品将于活动结束后7个工作日内发放；</p>
                <p>如有疑问请来电咨询：<a href="tel:400-6906-109">400-6906-109；</a></p>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}
