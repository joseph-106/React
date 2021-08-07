/* eslint-disable */
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';

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
          <button className="btn btn-danger">주문하기</button><p/>
          <button className="btn btn-danger" onClick={()=>{ history.push('/'); }}>홈으로</button> 
        </div>
      </div>
  </div> 
  )
}

export default Detail