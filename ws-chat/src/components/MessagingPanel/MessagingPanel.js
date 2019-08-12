import React, {Component} from 'react'

import ConversationBox from './ConversationBox/ConversationBox'
import MessagingBox from './MessagingBox/MessagingBox'
// import styles from './MessagingPanel.module.scss'

class MessagingPanel extends Component{

    state={
        messages:[]
    }
    
    componentDidMount(){
        this.props.connection.onmessage = (messages) => {
            const newMessages = JSON.parse(messages.data)
            this.setState({messages:[ ...newMessages,...this.state.messages]})
        }
    }

    render(){
        return(
        <>
            <ConversationBox messages={this.state.messages}/>
            <MessagingBox sendMessage={this.props.sendMessage}/>
        </>
        )
    }
}
export default MessagingPanel