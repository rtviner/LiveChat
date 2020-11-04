import axios from 'axios';
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

    axios.post('http://localhost:3000/api/login',{
        username,
        password
      
    })
    .then((data) => {
      const { isLoggedIn } = data;
  
      // else
      // set error message to 'Wrong username or password!'
      this.setState((prevState) => {
        return {
          ...prevState,
          errorMessage: 'Wrong username or password!',
        }
      });
      // redirect to login page
      // return push('/login');
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
            ref={this.name}
            />
          <input
            type="password"
            placeholder="password"
            ref ={this.password}  
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
