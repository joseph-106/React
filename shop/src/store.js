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
  { id : 0, name : 'White and Black', quan : 2 },
  { id : 1, name : 'Red Knit', quan : 5 }
];

function reducer(state = 초기값, 액션){ // 'state = ~~' state 초기값 설정하는 ES6 default parameter문법
  if (액션.type === '항목추가') {
    let 몇번째있니 = state.findIndex( (a)=>{ return a.id === 액션.payload.id }); // 동일한 상품의 id
    
    if ( 몇번째있니 >= 0 ){ // 동일 상품이 있다면 수량만 추가
      
      let copy = [...state];
      copy[몇번째있니].quan ++;
      return copy

    } else { // 동일 상품이 없다면 항목 추가
      
      let copy = [...state];
      copy.push(액션.payload)
      return copy
      
    }

  } else if (액션.type === '수량증가') { // 데이터 수정의 조건
    
    let copy = [...state]; // state배열을 수정하기 위한 deep copy
    copy[액션.데이터].quan ++;
    return copy

  } else if (액션.type === '수량감소') {

    let copy = [...state]; 
    if (copy[액션.데이터].quan > 0){ // quan이 음수가 되지 않도록
      copy[액션.데이터].quan --;
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