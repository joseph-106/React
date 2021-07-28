/* eslint-disable */
import React, { useState } from 'react';
import './App.css';

function App(){
 
  let [글제목, 글제목변경] = useState(['첫 글', '두 번째 글', '세번쨰']);
  let [따봉, 따봉변경] = useState(0);
  let [modal, modal변경] = useState(false);
  let [누른제목, 누른제목변경] = useState(0);
  let [입력값, 입력값변경] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <div>프로그래밍 잡동사니</div>
      </div>

      {
        글제목.map(function(글, i){
          return (
            <div className="list" key={i}>
              <h3 onClick={ ()=>{누른제목변경(i)}}>{ 글 } <span onClick={ ()=>{따봉변경(따봉+1)} }>👍</span> { 따봉 }</h3>
              <p>7월 19일 발행</p>
              <hr/>
            </div>
          )
        })
      }

      <div className="publish">
        <input onChange={ (e)=>{ 입력값변경(e.target.value) } }></input>
        <button onClick={ ()=>{
          var newArray = [...글제목];
          newArray.unshift(입력값);
          글제목변경(newArray)
        } }>저장</button>
      </div>
      
      <button onClick={ ()=>{ modal변경(!modal) } }> 열고닫는버튼 </button>
      { 
         modal === true 
         ? <Modal 글제목={글제목} 누른제목={누른제목} ></Modal>
         : null
      }
    </div>
  );
}

function Modal(props){
  return(
    <div className="modal">
        <h2>{ props.글제목[props.누른제목] }</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

export default App;