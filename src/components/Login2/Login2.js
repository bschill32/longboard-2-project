import React, { Component } from "react"
import axios from "axios"
import { connect } from "react-redux"
import { getData, killUser } from "./../../ducks/reducers/userReducer"

class Login2 extends Component {
  constructor() {
    super()

    this.state = {
      login_email: "",
      login_password: "",
      name: "",
      email: "",
      password: "",
      signup: false,
      login: false
    }
  }

  componentDidMount() {
    this.props.getData()
  }

  toggleLogin = () => {
    this.setState({
      login: !this.state.login
    })
  }

  toggleSignUp = () => {
    this.setState({
      signup: !this.state.signup
    })
  }

  handleChange(name, value) {
    this.setState({
      [name]: value
    })
  }

  async register() {
    const { name, email, password } = this.state
    const response = await axios.post(`/auth/register`, {
      name,
      email,
      password
    })
    if (response.data.loggedIn) {
      console.log("Registered Account")
    } else {
      console.log("Email in use.")
    }
    this.setState({
      name: "",
      email: "",
      password: "",
      signup: false,
      login: false
    })
  }

  async login() {
    const { login_email, login_password } = this.state
    const res = await axios.post(`/auth/login`, { login_email, login_password })
    if (res.data.loggedIn) {
      this.componentDidMount()
    } else {
      alert("Incorrect login")
    }
    this.setState({
      login_email: "",
      login_password: "",
      login: false
    })

    console.log(this.props)
    // alert(this.props.user.firstName)
    console.log(res.data)
  }

  logout = () => {
    this.props.killUser()
  }

  render() {
    let { signup, login } = this.state
    let { name } = this.props.user
    return name ? (
      <div className="body">
        <div className="top-header">
          {name ? <div className="welcome">Welcome, {name}</div> : <div />}
          <div className="top-header-links">
            <button onClick={() => this.logout()} className="button">
              Logout
            </button>
          </div>
        </div>
      </div>
    ) : (
      <div className="body">
        <div className="top-header">
          {name ? <div className="welcome">Welcome, {name}</div> : <div />}
          <div>
            <button onClick={this.toggleSignUp} className="button">
              SIGN UP
            </button>

            <button onClick={this.toggleLogin} className="button">
              LOGIN
            </button>
          </div>
        </div>
        {/* //SIGN UP CONDITIONAL RENDERING */}
        <div className={signup ? "sign-up" : "sign-up gone"}>
          <input
            value={this.state.name}
            name="name"
            onChange={e => this.handleChange("name", e.target.value)}
            className="input-style"
            placeholder="First Name"
          />
          <input
            value={this.state.email}
            name="email"
            onChange={e => this.handleChange("email", e.target.value)}
            className="input-style"
            placeholder="Email"
          />
          <input
            value={this.state.password}
            name="password"
            onChange={e => this.handleChange("password", e.target.value)}
            className="input-style"
            placeholder="Password"
          />
          <button
            onClick={() => this.register()}
            className="button input-style"
          >
            Sign Up
          </button>
        </div>
        {/* //LOGIN CONDITIONAL RENDERING */}
        <div className={login ? "login" : "login gone2"}>
          <input
            value={this.state.login_email}
            name="login_email"
            onChange={e => this.handleChange("login_email", e.target.value)}
            className="input-style"
            placeholder="Email"
          />
          <input
            value={this.state.login_password}
            name="login_password"
            onChange={e => this.handleChange("login_password", e.target.value)}
            placeholder="Password"
          />
          <button onClick={() => this.login()} className="button space">
            Login
          </button>
        </div>
      </div>
    )
  }
}

let mapToState = reduxState => reduxState

export default connect(
  mapToState,
  { killUser, getData }
)(Login2)
