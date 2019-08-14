import React, {Component} from 'react'
import { connect } from 'react-redux';

import { addMessages } from '../../store/actions/actionCreator'

import ConversationBox from './ConversationBox/ConversationBox'
import MessagingBox from './MessagingBox/MessagingBox'
import Notifications from './Notifications/Notifications'
// import styles from './MessagingPanel.module.scss'

class MessagingPanel extends Component{

    state={
        messages:[],
    }
    blured = false
    
    componentDidMount(){
        Notification.requestPermission().then((result) => {
          })

        window.onblur = () =>{
            this.blured=true;
        }
        window.onfocus = () =>{
            this.blured=false;
        }

        this.props.connection.onmessage = (messages) => {
            const newMessages = JSON.parse(messages.data)
            const { addMessages } = this.props
            //this.setState({...this.state, messages:[ ...newMessages,...this.state.messages]})  
            addMessages(newMessages)           
            if(this.state.blured){
                Notifications(newMessages)
            }
        }
    }

    render(){
        return(
        <>
            <ConversationBox messages={this.props.messages.messages}/>
            <MessagingBox sendMessage={this.props.sendMessage}/>
        </>
        )
    }
}
export default connect(state => ({
    messages: state.messages,
  }), { addMessages })(MessagingPanel);