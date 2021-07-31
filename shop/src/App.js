import './App.css';
import { Navbar,Nav,NavDropdown,Container,Button } from 'react-bootstrap';

function App(){
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
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
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            <h4>상품명</h4>
            <p>상품정보</p>
          </div>
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="100%" />
            <h4>상품명</h4>
            <p>상품정보</p>
          </div>
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="100%" />
            <h4>상품명</h4>
            <p>상품정보</p>
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default App;
