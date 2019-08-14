import React, {Component} from 'react'

// import styles from './Login.module.scss'

class Login extends Component{

    login = (e) => {
        e.preventDefault()
        this.props.toConnect(e.target.username.value)
    }

    render(){
        return(
        <div id='login'>
            <form onSubmit={this.login}>
                <label>Username:</label><br/>
                <input type='text' id='username'/><br/>
                <input type='submit' value='Log in'/>
            </form>
        </div>)
    }
}
export default Login