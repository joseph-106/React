import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import {Provider} from 'react-redux';
import { createStore } from 'redux';

let 초기값 = [
  { id : 0, name : '멋진신발', quan : 2 },
  { id : 1, name : '멋진신발2', quan : 5 }
];

function reducer(state = 초기값, 액션){ // 'state = ~~' state 초기값 설정하는 ES6 default parameter문법
  if (액션.type === '수량증가') { // 데이터 수정의 조건
    
    let copy = [...state]; // state배열을 수정하기 위한 deep copy
    copy[0].quan ++;
    return copy

  } else if (액션.type === '수량감소') {

    let copy = [...state]; 
    if (copy[0].quan > 0){ // quan이 음수가 되지 않도록
      copy[0].quan --;
      return copy
    } else {
      return copy
    }

  } else {
    return state
  }
}

let store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
