import { createStore, combineReducers } from 'redux';

let alert초기값 = true;

function reducer2(state = alert초기값, 액션){
  if (액션.type === 'alert닫기') { 
    state = false;
    return state
  } else {
    return state
  }
}

let 초기값 = [
  { id : 0, name : '멋진신발', quan : 2 },
  { id : 1, name : '멋진신발2', quan : 5 }
];

function reducer(state = 초기값, 액션){ // 'state = ~~' state 초기값 설정하는 ES6 default parameter문법
  if (액션.type === '항목추가'){
    
    let copy = [...state];
    copy.push(액션.payload); // payload 데이터를 state에 추가
    return copy

  } else if (액션.type === '수량증가') { // 데이터 수정의 조건
    
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

let store = createStore(combineReducers({reducer, reducer2}));

export default store;