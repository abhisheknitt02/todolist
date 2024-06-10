import { Col, Container, Row } from "react-bootstrap"
import { Navigate, Outlet, useLocation } from "react-router-dom"

function App() {
  const auth = window.auth || {};
  const currentLocation = useLocation();
  if (!auth.currentUser) {
    if (currentLocation.pathname !== '/login') {
      return <Navigate to='login' />
    }
    return (
      <Container fluid>
      <Row>
        <h1 className='bg-dark text-light p-2' >Todolist</h1>
      </Row>
      <Row>
        <Col>
          <Outlet />
        </Col>
      </Row>
    </Container>
    )
  } 
  return (
    <Container fluid>
      <Row>
        <h1 className='bg-dark text-light p-2' >Todolist</h1>
      </Row>
      <Row>
        <Col>
          <Outlet />
        </Col>
      </Row>
    </Container>
  )
}

export default App
