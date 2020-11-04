import axios from 'axios';
import React from 'react';

class SignUp extends React.Component {
    constructor() {
        super();
        this.name = React.createRef();
        this.password = React.createRef();
        this.confirmedPassword = React.createRef();
        this.state = {
            errorMessage: '',
        };
        this.handleClick = this.handleClick.bind(this);
    }

   
handleClick(event) {
        event.preventDefault();
        const username = this.name.value;
        const password = this.password.value;
        const confirmedPassword = this.confirmedPassword.value;
        if (password !== confirmPassword) {

            const errorMessage = 'Please enter the same password in the "Confirm Password" field';
        // if not, display error message
            this.setState(() => ({
                errorMessage,
            }));
        } else {
            this.setState(() => ({
                errorMessage: '',
            }));
        }  
       // send username and password to server and wait for response from server
        // fetch('/api/signup', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'multipart/form-data',
        //     },
        //     body: {
        //         username,
        //         password,
        //     },
        // })
        axios.post('http://localhost:3000/api/signup',{
            username,
            password
        })
        //if all ok from server response, redirect to main page of app
        .then(data => {
        })
        .catch(err => console.log(err));

    }
    render() {
        return (
            <>
            <h3>Sign Up</h3>
            <form onSubmit={this.handleClick}>
                <input 
                    type="text"
                    placeholder="username"
                    ref={(name) => this.name = name}
                    required
                    />
                <input 
                    type="password"
                    placeholder="password"
                    ref ={(password) => this.password = password}  
                    required
                    />
                <input 
                    type="password"
                    placeholder="confirm password"
                    ref ={(confirmedPassword) => this.confirmedPassword = confirmedPassword}  
                    required
                    />
                <button type="button" onSubmit={this.handleClick} onClick={this.handleClick}>Sign Up</button>
                <h2>{this.state.errorMessage}</h2>
            </form>
        </>
        )
    }
}

export default SignUp;
