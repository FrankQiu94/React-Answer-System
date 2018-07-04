import React from 'react'
import { Modal } from 'antd'
import { connect } from 'react-redux'
import { submitForm } from '../../utils'
import { handlePanel } from '../redux/answer.redux'

@connect(
  state => state.answer,
  {handlePanel}
)
export default class FormPanel extends React.Component {
  onCancel() {
    this.props.handlePanel({
      name: 'form',
      value: false
    })
  }
  handleSubmitForm() {
    const name = this.refs.name
    const tel = this.refs.tel
    const address = this.refs.address
    const subject = this.refs.subject
    submitForm({
      name: name,
      tel: tel,
      add: address,
      sub: subject
    }, () => {
      alert('提交成功！赠送您再答一次！')
      name.value = ''
      tel.value = ''
      address.value = ''
      subject.value = 'null'
      this.onCancel()
      window.location.href = 'http://www.cyikao.com/zg/2018_ysdtxt'
    })
  }
  render () {
    return (
      <Modal
        visible={this.props.formVisible}
        closable={false}
        footer={null}
        onCancel={this.onCancel.bind(this)}
        wrapClassName="formPanel"
      >
        <div className="line">
          <label htmlFor="name">姓名</label>
          <input ref="name" type="text" id="name" autoComplete="off"/>
        </div>
        <div className="line">
          <label htmlFor="tel">电话</label>
          <input ref="tel" type="tel" id="tel" autoComplete="off"/>
        </div>
        <div className="line">
          <label htmlFor="address">地址</label>
          <input ref="address" type="text" id="address" autoComplete="off"/>
        </div>
        <div className="line lastLine">
          <label htmlFor="subject">考试类型</label>
          <select ref="subject" id="subject">
            <option value="null">请选择考试类型</option>
            <option value="执业药师">执业药师</option>
            <option value="执业中药师">执业中药师</option>
          </select>
        </div>
        <button className="subBtn" type="button" onClick={this.handleSubmitForm.bind(this)}>提交</button>
      </Modal>
    )
  }
}
