import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import reducers from './reducer'

import Top from './js/components/top'
import Header from './js/components/header'
import Footer from './js/components/footer'
import HomePage from './js/components/HomePage'
import AnswerWest from './js/components/AnswerWest'
import AnswerEast from './js/components/AnswerEast'

import './less/style.less'

const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render (
    (
      <Provider store={store}>
        <div>
          <Top/>
          <Header/>
          <BrowserRouter>
            <Switch>
              <Route path='/answer_west' component={AnswerWest}></Route>
              <Route path='/answer_east' component={AnswerEast}></Route>
              <Route component={HomePage}></Route>
            </Switch>
          </BrowserRouter>
          <Footer/>
        </div>
      </Provider>
    ),
    document.getElementById('root')
)
