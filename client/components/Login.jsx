import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.name = React.createRef();
    this.password = React.createRef();
    this.state = {
      errorMessage: '',
    };
    this.handleClick = this.handleClick.bind(this);
    
  }

  handleClick(event) {
    event.preventDefault();
    const username = this.name.value;
    const password = this.password.value;
    //console.log("username: " + username, "password: " + password);
  
    // fetch user info by sending username and password
    fetch('/api/login', {
      method: 'POST',
      'Content-Type': 'multipart/form-data',
      data: {
        username, 
        password,
      },
    }).then((data) => {
      const { isLoggedIn } = data;
      // if user is logged in
      // redirect to main page
      if (isLoggedIn) return push('/chatroom');
      // else
      // set error message to 'Wrong username or password!'
      this.setState((prevState) => {
        return {
          ...prevState,
          errorMessage: 'Wrong username or password!',
        }
      });
      // redirect to login page
      return push('/login');
    }).catch((err) => console.log(err));
  }
  render() {
    return (
      <>
        <p>{this.state.errorMessage}</p>
        <h3>Login</h3>
        <form onSubmit={this.handleClick} >
          <input
            type="text"
            placeholder="username"
            ref={(name) => this.name = name}
            />
          <input
            type="password"
            placeholder="password"
            ref ={(password) => this.password = password}  
          />
          <button
            type="button"
            onClick={this.handleClick}
          >
            Log In
          </button>
        </form>
        <p>Don't have an account? <Link to='/signup'>Sign Up</Link></p>
      </>
    );
  }
}



export default Login;
