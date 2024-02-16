import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "hechmi kchouk",
        bio: "Hi, I’m Hechmi! I’m a web developer with in-depth experience in React Js development. In a nutshell, I create websites that help organizations address business challenges and meet their needs. I manage everything from website navigation and layout to a company’s web hosting and security architecture",
        //imgSrc:
         // "/Myphoto.jpeg" alt="My Photo",
         imgSrc: "/Myphoto.jpeg",
         alt: "My Photo", // Ensure this line is added and properly assigned
         profession: "Web Developer",
      },
      count: 0
    };
  }


  componentDidMount(){
    setInterval(()=>{
        this.setState(prevState=>({
            count: prevState.count+0.5
        }))
      },1000)
}

  render() {
    return (
      <div style={{display:'flex',justifyContent: 'center',marginTop: '10%'}}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={this.state.person.imgSrc} />
      <Card.Body>
        <Card.Title>{this.state.person.fullName}</Card.Title>
        <Card.Text>{this.state.person.bio}</Card.Text>
        <Card.Text>{this.state.person.profession}</Card.Text>
      </Card.Body>
    </Card>
        <h2>{this.state.count} Sec...</h2>
      </div>
    )
  }
}
