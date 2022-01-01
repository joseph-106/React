/* eslint-disable */
import './App.css';
import { useState, useContext } from 'react';
import { Navbar,Nav,NavDropdown,Container, Button } from 'react-bootstrap';
import data from './data.js';
import Detail from './Detail.js';
import { Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import React from 'react';
import Cart from './Cart';

export let 재고context = React.createContext();

function App(){
  let [shoes, shoes변경] = useState(data);
  let [재고, 재고변경] = useState([10,8,12]);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Route exact path="/">
        <div>
          <div className="Jumbotron">
            <br/>
            <h1>20% Season Off</h1>
            <p>
              이 사이트는 React로 만들어보는 쇼핑몰 프로젝트입니다. <br/>
              React-Bootstrap에 Jumbotron이 없어져서 그냥 직접 만들었습니다.
            </p>
            <Button variant="primary">Primary</Button>{' '}
          </div> 
    
          <div className="container">

            <재고context.Provider value={재고}>

            <div className="row">
              {
                shoes.map((a,i)=>{
                  return(
                      <Card shoes={a} i={i}></Card>
                  )
                })
              }
            </div>

            </재고context.Provider>

            <button className="btn btn-primary" onClick={()=>{

              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((result)=>{
                shoes변경( [...shoes, ...result.data] )
              })
              .catch(()=>{})

            }}>더보기</button>
          </div>
          
        </div>
      </Route>

      <Route path="/detail/:id">
        <재고context.Provider value={재고}>
        <Detail shoes={shoes} 재고={재고} 재고변경={재고변경}/>
        </재고context.Provider>
      </Route>

      <Route path="/cart">
        <Cart></Cart>
      </Route>

    </div>
  )
}

function Card(props){

  return(
    <>
    <div className="col-md-4">
      <img src={ 'https://codingapple1.github.io/shop/shoes' + (props.i+1) + '.jpg' } width="100%" />
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.content } & { props.shoes.price }</p>
      <Test></Test>
    </div>
    </>
  )
}

function Test() {

  let 재고 = useContext(재고context);

  return(
    <p>재고:{재고[0]}</p>
  )
}

export default App;