import React from 'react';
import {Table} from 'react-bootstrap';
import { connect } from 'react-redux';
import styled from 'styled-components';

let Alert = styled.div`
  background: #fcf9ca;
  padding : 20px;
  border-radius: 15px;
  max-width: 500px;
  width: 100%;
  margin: auto;
  margin-top: 20px;
`;

let AlertText = styled.p`
  margin-bottom: 10px;
`;

function Cart(props){
  return (
    <div>
      <Table responsive>
        <thead>
            <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경</th>
            </tr>
        </thead>
        <tbody>
        { props.자유작명.map((a,i)=>{
          return (
          <tr key={i}>
            <td>{a.id}</td>
            <td>{a.name}</td>
            <td>{a.quan}</td>
            <td>
              <button onClick={()=>{props.dispatch({ type : '수량증가' })}}>+</button>
              <button onClick={()=>{props.dispatch({ type : '수량감소' })}}>-</button>
            </td>
          </tr>
          )
        })  }
        </tbody>
      </Table>

      { 
        props.alert열렸니 === true 
        ? (<Alert>
            <AlertText>지금 구매하시면 신규 할인 20%</AlertText>
            <button onClick={()=>{props.dispatch({ type : 'alert닫기' })}} >닫기</button>
          </Alert>)
        : null
      }

    </div>
  )
}

function 함수(state){
    return {
        자유작명 : state.reducer, // 첫 reducer에 담긴 데이터
        alert열렸니 : state.reducer2, // reducer2에 담긴 데이터
    }
}

export default connect(함수)(Cart)