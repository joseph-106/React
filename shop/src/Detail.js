/* eslint-disable */
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';

let 박스 = styled.div`
  padding : 20px;
`;
let 제목 = styled.h4`
  font-size : 25px;
  color : ${ props => props.색상 };
`;


function Detail(props) {
    
    let { id } = useParams(); // URL의 /:id 파라미터 값

    let 찾은상품 = props.shoes.find(function(상품){ //find 함수로 Array 안에서 원하는 자료를 찾는다
      return 상품.id == id //현재 URL의 /:id 값과 상품의 고유 id가 일치한다면 변수로 저장
    });

    let history = useHistory();

    return(
      <div className="container">
        <박스>
          <제목 색상="blue">안녕하세요1</제목>   
          <제목 색상={'red'}>안녕하세요2</제목>   
        </박스>
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