import React, { Component } from 'react';
import UserList from '../components/UserList';
import UserForm from '../components/UserForm';
import logo from '../assets/uhugg.ico';
import '../assets/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { users: [
      {id: 1, name: "Manuel", email: "manolo_11_roc@hotmail.com"}

    ]

    };
  }

  handleOnAddUser (event) {
    event.preventDefault();
    let user = {
      name: event.target.name.value,
      email: event.target.email.value
    };
    this.setState({
      users: this.state.users.concat([user])
    });
  }

  render() {
    console.log(this.state.users);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Bienvenido a este nuestro proyecto</h2>
        </div>
        <div>
          <p><strong>Añade usuarios</strong></p>
          <p><strong>y les enviaremos un regalito... :)</strong></p>
          <UserList users={this.state.users}  />
          <UserForm onAddUser={this.handleOnAddUser.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;
