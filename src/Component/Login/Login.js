import React,{Component} from 'react';
import {googleAuthProvider,firebase} from '../../Firebase/firebase';

class Login extends Component {
    componentWillMount() {
        document.title = 'Hummingbird | login'
    }
    loginHandler = () =>{
        firebase.auth().signInWithPopup(googleAuthProvider);
    }

    render(){
        return (
            <div>
                <button onClick={this.loginHandler}>Login with Google Account</button>
            </div>
        )
    }

}


export default Login;