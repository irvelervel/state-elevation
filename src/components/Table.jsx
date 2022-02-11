import { Component } from 'react'
import { ListGroup } from 'react-bootstrap'

class Table extends Component {
  state = {
    selected: undefined,
  }

  checkSelected = (value) => (value === this.state.selected ? 'selected' : '')

  render() {
    return (
      <>
        <ListGroup>
          <ListGroup.Item
            onClick={(e) => this.setState({ selected: 'First' })}
            className={this.checkSelected('First')}
          >
            First
          </ListGroup.Item>
          <ListGroup.Item
            onClick={(e) => this.setState({ selected: 'Second' })}
            className={this.checkSelected('Second')}
          >
            Second
          </ListGroup.Item>
          <ListGroup.Item
            onClick={(e) => this.setState({ selected: 'Third' })}
            className={this.checkSelected('Third')}
          >
            Third
          </ListGroup.Item>
        </ListGroup>
        <p className='mt-3'>
          Local state is {this.state.selected || 'undefined'}
        </p>
      </>
    )
  }
}

export default Table
