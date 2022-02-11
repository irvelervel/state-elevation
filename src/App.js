import './App.css'
import { Col, Container, Row } from 'react-bootstrap'
import Table from './components/Table'
import Detail from './components/Detail'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Container>
          <Row>
            <Col>
              <Table />
            </Col>
            <Col className='my-auto'>
              <Detail />
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  )
}

export default App
