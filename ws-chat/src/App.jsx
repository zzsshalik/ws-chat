import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import ReconnectingWebSocket from 'reconnecting-websocket';
import { connect } from 'react-redux';

import { deleteMessages } from './store/actions/actionCreator';
import Layout from './components/Layout/Layout';
import Login from './components/Login/Login';
import './App.scss';

const MessagingPanel = lazy(() => import('./components/MessagingPanel/MessagingPanel'));
const Game = lazy(() => import('./components/Game/Game'));

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

  }

  connect = (username) => {
    if (username) {
      const connection = new ReconnectingWebSocket('wss://wssproxy.herokuapp.com/', null, { reconnectInterval: 3000 });
      this.setState({ connection, username });

      connection.onopen = () => {
        this.setState({ connectionStatus: 'online' });
      };

      connection.onclose = () => {
        this.setState({ connectionStatus: 'offline' });
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
    this.setState({ username: null, connection: null, connectionStatus: 'offline' });
    const { deleteMessages } = this.props;
    deleteMessages();
  }

  setOnOffline = (e) => {
    this.setState({ connectionStatus: e.type });
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
              <Suspense fallback={<div>Загрузка...</div>}>
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={() => (
                      <MessagingPanel
                        username={username}
                        connection={connection}
                        sendMessage={this.sendMessage}
                      />
                    )}
                  />
                  <Route path="/game" component={Game} />
                </Switch>
              </Suspense>
            </Layout>
          )}
      </div>
    );
  }
}

export default connect((state) => ({
  messages: state.messages,
}), { deleteMessages })(App);
