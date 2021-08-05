/* eslint-disable */
import './App.css';
import { useState } from 'react';
import { Navbar,Nav,NavDropdown,Container, Button } from 'react-bootstrap';
import data from './data.js';
import Detail from './Detail.js';
import { Link, Route, Switch } from 'react-router-dom';

function App(){
  let [shoes, shoes변경] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link><Link to="/">Home</Link></Nav.Link>
              <Nav.Link><Link to="/detail">Detail</Link></Nav.Link>
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
            <div className="row">
              {
                shoes.map((a,i)=>{
                  return(
                      <Card shoes={a} i={i}></Card>
                  )
                })
              }
            </div>
          </div>
          
        </div>
      </Route>

      <Route path="/detail/:id">
        <Detail shoes={shoes}/>
      </Route>

    </div>
  )
}

function Card(props){
  return(
    <div className="col-md-4">
      <img src={ 'https://codingapple1.github.io/shop/shoes' + (props.i+1) + '.jpg' } width="100%" />
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.content } & { props.shoes.price }</p>
    </div>
  )
}

export default App;