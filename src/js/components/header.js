import React from 'react'

export default class Header extends React.Component {
  render () {
    return (
      <header className="header">
          <div className="wrapper clearfix">
              <div className="logo_area fl">
                  <h1>
                      <a href="http://www.cyikao.com" rel="nofollow me noopener noreferrer" target="_blank">中公医考</a>
                  </h1>
              </div>
              <div className="tel_area fr">
                  <a href="tel:4006906109"><span className="phone_icon"></span>400-6906-109</a>
              </div>
          </div>
      </header>
    )
  }
}
