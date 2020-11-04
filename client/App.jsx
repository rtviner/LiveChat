import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';
import Chatroom from './components/Chatroom.jsx';

class App extends React.Component {


  render() {
    return (
      <div >
        <Route exact path='/'>
          <Chatroom />
        </Route>
        <Route exact path='/login' >
          <Login />
        </Route>
        <Route path='/signup'>
          <SignUp />
        </Route>
      </div>
    )
  }
}

export default App;
