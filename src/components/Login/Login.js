import React, { Component } from "react"
import axios from "axios"

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      password: ""
    }
  }

  async register() {
    const { name, email, password } = this.state
    const res = await axios.post("/auth/register", { name, email, password })
    if (res.data.loggedIn) this.props.history.push()
    else alert("Registration failed")
  }

  async login() {
    const { email, password } = this.state
    const res = await axios.post("/auth/login", { email, password })
    if (res.data.loggedIn) this.props.history.push()
    else alert("Login failed")
  }

  render() {
    return (
      <div>
        <p>
          <span>Email:</span>
          <input
            onChange={e => this.setState({ email: e.target.value })}
            value={this.state.email}
            type="text"
          />
        </p>
        <p>
          <span>Password:</span>
          <input
            onChange={e => this.setState({ password: e.target.value })}
            value={this.state.password}
            type="text"
          />
        </p>
        <button onClick={() => this.register()}>Register</button>
        <button onClick={() => this.login()}>Log in</button>
      </div>
    )
  }
}

export default Login
