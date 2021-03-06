import {React, useEffect, memo} from 'react';
import {Table} from 'react-bootstrap';
import { connect, useDispatch, useSelector } from 'react-redux';
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

function Cart(){

  let reducer = useSelector((state)=> state.reducer ) 
  let reducer2 = useSelector((state)=> state.reducer2 ) 
  let dispatch = useDispatch();

  return (
    <div>
      <Table responsive>
        <thead>
            <tr>
            <th>id</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경</th>
            </tr>
        </thead>
        <tbody>
        { reducer.map((a,i)=>{
          return (
          <tr key={i}>
            <td>{a.id}</td>
            <td>{a.name}</td>
            <td>{a.quan}</td>
            <td>
              <button onClick={()=>{dispatch({ type : '수량증가', 데이터 : a.id })}}>+</button>
              <button onClick={()=>{dispatch({ type : '수량감소', 데이터 : a.id })}}>-</button>
            </td>
          </tr>
          )
        })  }
        </tbody>
      </Table>

      { 
        reducer2 === true 
        ? (<Alert>
            <AlertText>지금 구매하시면 신규 할인 20%</AlertText>
            <button onClick={()=>{dispatch({ type : 'alert닫기' })}} >닫기</button>
          </Alert>)
        : null
      }

    <Parent 이름="존박" 나이="20" />
    </div>
  )
}

function Parent(props){
  return (
    <div>
      <Child1 이름={props.이름}/>
      <Child2 나이={props.나이}/> 
    </div>
  )
}
function Child1(props){
  useEffect( ()=>{ console.log('렌더링됨1') } );
  return <div>{props.이름}</div>
}
let Child2 = memo(function(props){
  useEffect( ()=>{ console.log('렌더링됨2') } );
  return <div>{props.나이}</div>
})

// function 함수(state){
//     return {
//         자유작명 : state.reducer, // 첫 reducer에 담긴 데이터
//         alert열렸니 : state.reducer2, // reducer2에 담긴 데이터
//     }
// }

// export default connect(함수)(Cart)

export default Cart;