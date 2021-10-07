import './App.css'
import MyTable from './components/MyTable'
import { Col, Container, Row } from 'react-bootstrap'
import MyAlert from './components/MyAlert'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row>
            <Col>
              <MyTable />
            </Col>
            <Col className="my-auto">
              <MyAlert />
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  )
}

export default App
