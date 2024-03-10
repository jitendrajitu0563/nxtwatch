import {Component} from 'react'
import Cookies from 'js-cookie'
import {useNavigate} from 'react-router-dom'
import './index.css'
class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showSubmitError: false,
    errorMsg: '',
  }
  
  onChangeHandler = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  OnShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="InputLabel" htmlFor="username">USERNAME</label>
        <input className="UserInput"
          type="text"
          id="username"
          value={username}
          name="username"
          onChange={this.onChangeHandler}
          placeholder="Username"
        />
      </>
    )
  }

  renderPasswordField = () => {
    const {password, showPassword} = this.state
    const inputType = showPassword ? 'text' : 'password'
    return (
      <>
        <label className="InputLabel" htmlFor="password">PASSWORD</label>
        <input className="UserInput"
          type={inputType}
          id="password"
          value={password}
          name="password"
          onChange={this.onChangeHandler}
          placeholder="Password"
        />
        <div className="CheckboxContainer">
          <input className="Checkbox"
            type="checkbox"
            id="checkbox"
            onChange={this.OnShowPassword}
          />
          <label className="ShowPassword" htmlFor="checkbox">Show Password</label>
        </div>
      </>
    )
  }

  render() {
    const navigate=useNavigate();
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <navigate to="/" />
    }
    return (
      <div className="AppContainer">
        <form className="FormContainer" onSubmit={this.submitForm}>
          <img className="LoginLogo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <div className="InputContainer">{this.renderUsernameField()}</div>
          <div className="InputContainer">{this.renderPasswordField()}</div>
          <button className="LoginButton" type="submit">Login</button>
          {showSubmitError && <p className="SubmitError">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm

