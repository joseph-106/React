/* eslint-disable */
import React, { useState } from 'react';
import './App.css';

function App(){
 
  let [글제목, 글제목변경] = useState(['첫 글', '두 번째 글', '세번쨰']);
  let [따봉, 따봉변경] = useState(0);

  function 제목바꾸기 () {
    var newArray = [...글제목];
    newArray[0] = '글 제목 변경';
    글제목변경(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>프로그래밍 잡동사니</div>
      </div>
      <div className="list">
        <h3>{ 글제목[0] } <span onClick={ ()=>{따봉변경(따봉+1)} }>👍</span> { 따봉 }</h3>
        <button onClick={ ()=>{제목바꾸기()} }>버튼</button>
        <p>7월 19일 발행</p>
        <hr/>
        <h3>{ 글제목[1] }</h3>
        <p>7월 20일 발행</p>
        <hr/>
        <h3>{ 글제목[2] }</h3>
        <p>7월 21일 발행</p>
        <hr/>
      </div>

      <Modal></Modal>
      
    </div>
  );
}

function Modal(){
  return(
    <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

export default App;