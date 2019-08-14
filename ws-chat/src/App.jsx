import React, { Component } from 'react';
import ReconnectingWebSocket from 'reconnecting-websocket';

import Layout from './components/Layout/Layout'
import MessagingPanel from './components/MessagingPanel/MessagingPanel'
import Login from './components/Login/Login'
import Logout from './components/Logout/Logout'

import './App.scss';


class App extends Component {
  state = {
    username:null,
    connection:null,
    connectionStatus:'offline',
  }

  componentDidMount() {
    const username = localStorage.getItem('username');
    if (username) {
      this.toConnect(username);
    }

    window.addEventListener('online', this.setOnOffline);
    window.addEventListener('offline', this.setOnOffline);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.setOnOffline);
    window.removeEventListener('offline', this.setOnOffline);
  }

  connect = (username) => {
    if (username) {
      const connection = new ReconnectingWebSocket('wss://wssproxy.herokuapp.com/', null, { reconnectInterval: 3000 });
      this.setState({ connection, username });

      connection.onopen = () => {
        this.setState({...this.state, connectionStatus: 'online' });
      };

      connection.onclose = () => {
        this.setState({...this.state, connectionStatus: 'offline' });
      };
    }
  }

  toConnect = (username) => {
    localStorage.setItem('username', username);
    this.connect(username);
  }

  closeConnection = () => {
    localStorage.removeItem('username');
    this.state.connection.close();
    this.setState({...this.state, username: null, connection: null, connectionStatus: 'offline' });
  }

  setOnOffline = (e) => {
    this.setState({...this.state, connectionStatus: e.type });
  }

  sendMessage = (message) => {
    const openConnectionCode = 1;
    if (this.state.username) {
      if (this.state.connection.readyState === openConnectionCode) {
        const data = {
          from: this.state.username,
          message,
        }
        this.state.connection.send(JSON.stringify(data))
      }
    }
  }

  render() {
    return (
      <div className="App">
        { !this.state.username && !this.state.connection
          ? <Login toConnect={this.toConnect} />
          : (
            <Layout connectionStatus={this.state.connectionStatus}>
              <div className="container">
              <Logout closeConnection={this.closeConnection}/>
              <MessagingPanel username={this.state.username} connection={this.state.connection} sendMessage={this.sendMessage} />
              </div>
            </Layout>
          )}
      </div>
    );
  }
}

export default App;
