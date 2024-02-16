import React, { Component } from 'react'
import './App.css';
import Profile from './Component/Profile';
import { Button, Card, Col, Row } from 'react-bootstrap';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      showCounter: false
    };
  }
  toggle = () => {
    this.setState({show: !this.state.show});
  };

  render() {
    return (
      
          <div style={{justifyContent: 'center'}} className="App">
            <Card className='center'>
           <Card.Body> 
            <Button style={{justifyContent: 'center'}} variant='primary' onClick={this.toggle}>{this.state.show? 'Hide Profile' : 'Show Profile'}</Button>
            <div>
            <Row > 
              <Col className="display">{ this.state.show && <Profile />}</Col>
            </Row>
            </div>
            </Card.Body>
            </Card>
          </div>
       
    )
  }
}



//<Button onClick={()=> this.toggle()}>{this.state.show ? 'Hide' : 'show'}</Button