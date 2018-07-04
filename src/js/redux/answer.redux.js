// import { ALL_TITLES } from '../data/mockData_x.min'
import { ALL_TITLE_DATA, getAllData } from '../data/mockData_x.min'

// const ALL_TITLES = getAllData(ALL_TITLE_DATA)
let ALL_TITLES = new Array()
const yourAnswer = new Array()
for(let i = 0; i < 20; i ++) {
  yourAnswer.push(null)
}

const initState = {
  titles: [],
  answer: yourAnswer,
  score: 0,
  slogan: '',
  formVisible: false,
  repostVisible: 'none',
  countdown: false
}

const GET_MSG = 'GET_MSG'
const SAVE_ANSWER = 'SAVE_ANSWER'
const SUB_INFO = 'SUB_INFO'
const ANSWER_ALL = 'ANSWER_ALL'
const FORM_PANEL_HANDLE = 'FORM_PANEL_HANDLE'
const REPOST_PANEL_HANDLE = 'REPOST_PANEL_HANDLE'

export function answer(state=initState, action) {
  switch(action.type) {
    case GET_MSG:
      return {...state, titles: action.payload}
    case SAVE_ANSWER:
      return {...state, answer: action.payload}
    case ANSWER_ALL:
      return {...state, slogan: action.payload}
    case SUB_INFO:
      return {...state, score: action.payload.score, countdown: action.payload.countdown}
    case FORM_PANEL_HANDLE:
      return {...state, formVisible: action.payload}
    case REPOST_PANEL_HANDLE:
      return {...state, repostVisible: action.payload}
    default:
      return state
  }
}

function getData (data) {
  return {type: GET_MSG, payload: data}
}

export function getTitleData (subject, limitation) {
  return dispatch => {
    ALL_TITLES = getAllData(ALL_TITLE_DATA, subject, limitation)
    dispatch(getData(ALL_TITLES, subject))
  }
}

function submitScore(score, countdown) {
  return {type: SUB_INFO, payload: {score, countdown}}
}

export function submitInfo (answer, countdown, titles) {
  return dispatch => {
    const abcd = ['A', 'B', 'C', 'D']
    const answerIndex = answer.map(d => d == null ? null : abcd.indexOf(d.charAt(0).toUpperCase()))
    const correctAnswer = ALL_TITLES.map(d => d.answer)
    let score = 100
    const diff = []
    answerIndex.forEach((a, index) => {
        if(a == null || abcd[a] !== correctAnswer[index].toUpperCase()) {
            diff.push(a)
        }
    })
    score -= diff.length * 5
    dispatch(submitScore(score, countdown))
  }
}

function returnSlogan(slogan) {
  return {type: ANSWER_ALL, payload: slogan}
}

export function checkAll(answer) {
  return dispatch => {
      const slogan = ['您还有题目没答，是否提交？', '您已答完，是否提交？']
      let txt = '您已答完，是否提交？'
      for(let i = 0; i < answer.length; i++) {
        if(answer[i] == null) {
          txt = slogan [0]
          break
        }
        txt = slogan[1]
      }
      dispatch(returnSlogan(txt))
    }
}

function chooseAnswer(data) {
  return {type: SAVE_ANSWER, payload: data}
}

export function chooseThis (index, value) {
  return dispatch => {
    yourAnswer[index] = value
    dispatch(chooseAnswer(yourAnswer))
  }
}

function hanldePanelAction(state) {
  switch(state.name) {
    case 'form':
      return {type: 'FORM_PANEL_HANDLE', payload: state.value}
      break
    case 'repost':
      return {type: 'REPOST_PANEL_HANDLE', payload: state.value}
      break
  }
}

export function handlePanel(state) {
  return dispatch => {
    dispatch(hanldePanelAction(state))
  }
}

