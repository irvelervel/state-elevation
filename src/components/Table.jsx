import { Component } from "react";
import { ListGroup } from "react-bootstrap";

class Table extends Component {
  state = {
    selected: null,
  };

  render() {
    return (
      <>
        <ListGroup>
          <ListGroup.Item
            className="pointer"
            onClick={(e) => this.setState({ selected: e.target.innerText })}
          >
            Browny
          </ListGroup.Item>
          <ListGroup.Item
            className="pointer"
            onClick={(e) => this.setState({ selected: e.target.innerText })}
          >
            Whitey
          </ListGroup.Item>
          <ListGroup.Item
            className="pointer"
            onClick={(e) => this.setState({ selected: e.target.innerText })}
          >
            Blacky
          </ListGroup.Item>
          <ListGroup.Item
            className="pointer"
            onClick={(e) => this.setState({ selected: e.target.innerText })}
          >
            Wolf
          </ListGroup.Item>
        </ListGroup>
        <p className="mt-3">Local state is {this.state.selected || "null"}</p>
      </>
    );
  }
}

export default Table;
