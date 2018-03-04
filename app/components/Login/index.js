import { Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div class={style.home}>
        <form onSubmit={this.handleSubmit}>
          <h1>Login</h1>
          <div>
            <label>Email</label>
            <input
              autoFocus
              value={this.state.username}
              onChange={linkState(this, 'username')}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              autoFocus
              value={this.state.password}
              onChange={linkState(this, 'password')}
            />
          </div>
          <button
            block
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}
