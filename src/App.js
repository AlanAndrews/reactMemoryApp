import React, { Component } from 'react';
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import georges from "./georges.json";
// import logo from './logo.svg';
import './App.css';

function shuffleGeorges(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};


class App extends Component {

  state = {
    georges,
    highScore: 0,
    score: 0,
  }

  Shuffle = () => {
    console.log("hello");
    let newGeorges = shuffleGeorges(georges);
    this.setState({ georges: newGeorges });
  };

  render() {
    return (
      <Wrapper>
      <Title>Georges</Title>
          {this.state.georges.map(george => (
              <Card
                Shuffle={this.Shuffle}
                
                id={george.id}
                key={george.id}
                image={george.image}
              />
            ))}
      </Wrapper>
    );
  }
}

export default App;
