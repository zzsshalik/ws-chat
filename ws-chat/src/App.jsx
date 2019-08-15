import React, { Component } from 'react';
import ReconnectingWebSocket from 'reconnecting-websocket';

import Layout from './components/Layout/Layout';
import MessagingPanel from './components/MessagingPanel/MessagingPanel';
import Login from './components/Login/Login';

import './App.scss';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      connection: null,
      connectionStatus: 'offline',
    };
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
    const { connection } = this.state;
    connection.close();
    this.setState({...this.state, username: null, connection: null, connectionStatus: 'offline' });
  }

  setOnOffline = (e) => {
    this.setState({...this.state, connectionStatus: e.type });
  }

  sendMessage = (message) => {
    const openConnectionCode = 1;
    const { connection, username } = this.state;

    if (username) {
      if (connection.readyState === openConnectionCode) {
        const data = {
          from: username,
          message,
        };
        connection.send(JSON.stringify(data));
      }
    }
  }

  render() {
    const { connection, username, connectionStatus } = this.state;
    return (
      <div className="App">
        { !username && !connection
          ? <Login toConnect={this.toConnect} />
          : (
            <Layout connectionStatus={connectionStatus} closeConnection={this.closeConnection}>
              <div className="container">
                <MessagingPanel username={username} connection={connection} sendMessage={this.sendMessage} />
              </div>
            </Layout>
          )}
      </div>
    );
  }
}

export default App;
