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
            <tr>
            <td>1</td>
            <td>{props.자유작명[0].name}</td>
            <td>{props.자유작명[0].quan}</td>
            <td>#</td>
            </tr>
        </tbody>
      </Table>
    </div>
  )
}

function 함수(state){
    return {
        자유작명 : state
    }
}

export default connect(함수)(Cart)