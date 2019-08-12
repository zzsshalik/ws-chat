import React, {Component} from 'react'

// import styles from './Login.module.scss'

class Logout extends Component{

    logout = (e) => {
        e.preventDefault()
        this.props.closeConnection()
    }

    render(){
        return(
        <div id='logout'>
            <button value="Logout" onClick={this.logout}>Logout</button>
        </div>)
    }
}
export default Logout