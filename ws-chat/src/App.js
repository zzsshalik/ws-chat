import React,{Component} from 'react';

import MessagingPanel from './components/MessagingPanel/MessagingPanel'
import Login from './components/Login/Login'
import Logout from './components/Logout/Logout'

import './App.scss';

class App extends Component{
constructor(props){
  super(props)
  this.toConnect=this.toConnect.bind(this)
}
  state = {
    username:null,
    connection:null,
  }

  connect = (username) => {
    if(username){
      const connection = new WebSocket('ws://st-chat.shas.tel')
      this.setState({connection,username})
      connection.onerror = (e) =>{
       console.log(e)
      }
    }
  }

  toConnect(username){
    localStorage.setItem('username', username)
    this.connect(username)
  }

  closeConnection = () =>{
    localStorage.removeItem('username')
    this.state.connection.close()
    this.setState({...this.state, username:null,connection:null})
  }

  componentDidMount(){
    const username=localStorage.getItem('username')
    if(username){
      this.toConnect(username)
    }
    setInterval(()=>{
      if(this.state.connection)
      {
        // console.log(this.state.connection.readyState)
        // console.log(navigator.connection)
      }
    },2000)
  }

  sendMessage = (message) => {
    const openConnectionCode=1
    if(this.state.username){
      if(this.state.connection.readyState === openConnectionCode){
      const data = {
        from: this.state.username,
        message
      }
      this.state.connection.send(JSON.stringify(data))
      }
    }
  }

  render(){
    return (
      <div className="App">
        { !this.state.username && !this.state.connection ?
          <Login toConnect={this.toConnect}/>
          :
          <>
            <Logout closeConnection={this.closeConnection}/>
            <MessagingPanel username={this.state.username} connection={this.state.connection} sendMessage={this.sendMessage} />
          </>
        }
      </div>
    );
  }
}

export default App;
