import React from 'react';
import {Table} from 'react-bootstrap';
import { connect } from 'react-redux';

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
    </div>
  )
}

function 함수(state){
    return {
        자유작명 : state // store 안의 모든 데이터
    }
}

export default connect(함수)(Cart)