/* eslint-disable */
import { useEffect, useState, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss'
import { 재고context } from './App.js';

import { Nav } from 'react-bootstrap';
import { CSSTransition } from "react-transition-group"

let Alert = styled.div`
  background: #eeeeee;
  padding : 20px;
  border-radius: 5px;
  max-width: 500px;
  width: 100%;
  margin: auto;
  margin-top: 20px;
`;

let Alert_text = styled.p`
  margin-bottom: 0;
`;

function Detail(props) {
  let { id } = useParams(); // URL의 /:id 파라미터 값
  let 찾은상품 = props.shoes.find(function(상품){ //find 함수로 Array 안에서 원하는 자료를 찾는다
    return 상품.id == id //현재 URL의 /:id 값과 상품의 고유 id가 일치한다면 변수로 저장
  });
  let history = useHistory();

  let [alert, alert변경] = useState(true);

  let 재고 = useContext(재고context);

  let [누른탭, 누른탭변경] = useState(0);
  let [스위치, 스위치변경] = useState(false);

  useEffect(()=>{
    let 타이머 = setTimeout(()=>{alert변경(false)}, 2000);
    return ()=>{ clearTimeout(타이머) }
  }, []);
    
  return(
    <div className="container">
      { 
        alert === true 
        ? <Alert><Alert_text>재고가 얼마 남지 않았습니다</Alert_text></Alert>
        : null
      }
      <div className="row">
        <div className="col-md-6">
          <img src={'https://codingapple1.github.io/shop/shoes1.jpg'} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{ 찾은상품.title }</h4>
          <p>{ 찾은상품.content }</p>
          <p>{ 찾은상품.price }원</p>
          <Info 재고={props.재고}></Info> {/*props로 건너건너 전달*/}
          <p>{재고[0]}</p> {/*Context API를 활용한 방법*/}
          <button className="btn btn-danger" onClick={()=>{
            let newArray = [...props.재고];
            newArray[0]-=1;
            props.재고변경(newArray);
          }}>주문하기</button><p/>
          <button className="btn btn-danger" onClick={()=>{ history.push('/'); }}>홈으로</button> 
        </div>
      </div>

      <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={()=>{ 스위치변경(false); 누른탭변경(0) }}>Option 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={()=>{ 스위치변경(false); 누른탭변경(1) }}>Option 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" onClick={()=>{ 스위치변경(false); 누른탭변경(2) }}>Option 3</Nav.Link>
        </Nav.Item>
      </Nav>

      <CSSTransition in={스위치} classNames="wow" timeout={500}>
        <TabContent 누른탭={누른탭} 스위치변경={스위치변경}/>
      </CSSTransition>

  </div> 
  )
}

function TabContent(props){
  
  useEffect( ()=>{
    props.스위치변경(true); //탭내용 컴포넌트가 로드될 때 true
  });

  if (props.누른탭 === 0) {
    return (
      <div>0번째 내용입니다</div>
    )
  }
  if (props.누른탭 === 1) {
    return (
      <div>1번째 내용입니다</div>
    )
  }
  if (props.누른탭 === 2) {
    return (
      <div>2번째 내용입니다</div>
    )
  }
}

function Info(props){
  return(
    <p>재고: {props.재고[0]}개</p>
  )
}

export default Detail