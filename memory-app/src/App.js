import React, { Component } from 'react';
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./georges.json";
// import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    georges
  }

  render() {
    return (
      <Wrapper>
      <Title>Friends List</Title>
          {this.state.georges.map(friend => (
              <FriendCard
                removeFriend={this.removeFriend}

                id={card.id}
                key={card.id}
                image={friend.image}
              />
            ))}
      </Wrapper>
    );
  }
}

export default App;
