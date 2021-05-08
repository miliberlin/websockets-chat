import './App.css';
import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Login from './components/login.js';
import Chat from './components/chat.js';
import socketIOClient from 'socket.io-client'

const socket = socketIOClient('http://localhost:5000');

class App extends React.Component {
  state = {
    username: '',
    message: '',
    chat: ["hi"]
  }

  componentDidMount() {
    socket.on('new-response', data => {
      this.setState(state => ({
        chat: [...state.chat, data.message]
      }))
    })
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  sendMessage = () => {
    // get content from textfield
    let message = document.querySelector('.type_msg');
    // check if message is empty
    if (message.value.length > 0) {
      this.setState({
        message: message.value
      })
      socket.emit('new-message', {
        message: message.value
      })
      // reset field
      message.value = '';
    } else {
      // alert when user tries to send an empty message --> this could be sleeker ...
      alert('You can\'t send an empty message')
    }
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/"><Login userName={this.state.username} handleChange={this.handleChange} /></Route>
          <Route exact path="/chat"><Chat userName={this.state.username} message={this.state.message} sendMessage={this.sendMessage} chat={this.state.chat}/></Route>
        </Switch>
      </div>
    );
  }
}

export default App;


