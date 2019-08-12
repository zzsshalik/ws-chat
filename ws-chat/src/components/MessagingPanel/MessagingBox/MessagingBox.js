import React, {Component} from 'react'

class MessagingBox extends Component{
    enterKeyCode = 13
    typingHandler = (e) => {
        if(e.keyCode === this.enterKeyCode){
            e.preventDefault()
            this.props.sendMessage(e.target.value)
            e.target.value=''
        }
    }

    render(){
        return(
        <>
            <textarea onKeyDown={this.typingHandler}></textarea>
        </>
        )
    }
}
export default MessagingBox