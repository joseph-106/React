import React, { useState } from 'react';
import './App.css';

function App(){
 
  let posts = 'React에 대해서 알아보자';
  return (
    <div className="App">
      <div className="black-nav">
        <div>프로그래밍 잡동사니</div>
      </div>
      <div className="list">
        <h3>{ posts }</h3>
        <p>7월 19일 발행</p>
        <hr/>
      </div>
    </div>
  )
}

export default App;