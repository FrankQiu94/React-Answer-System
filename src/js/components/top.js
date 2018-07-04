import React from 'react'

export default class Top extends React.Component {
    render () {
        return (
            <section className="top_section">
                <div className="wrapper">
                    <div className="left_part">
                        <div className="icon"></div>
                        <div className="txt">
                            中公医考网<br/>
                            <span className="small">随时获取考试资讯及资料</span>
                        </div>
                    </div>
                    <div className="right_part">
                        <a rel="nofollow me noopener noreferrer" href="http://www.cyikao.com/zg/weixin/" target="_blank" className="focusTo">去关注</a>
                    </div>
                </div>
            </section>
        )
    }
}
