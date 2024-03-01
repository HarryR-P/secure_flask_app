import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const navigate = useNavigate()

  const onButtonClick = () => {

    setEmailError('')
    setPasswordError('')
    
    if ('' === email) {
      setEmailError('Email is required')
      return
    }

    if ('' === password) {
      setPasswordError('Password is required')
      return
    }

    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        setEmailError('Please enter a valid email')
        return
    }

    if (password.length < 2) {
      setPasswordError('Password must be at least 8 characters long')
      return
    }

    Login()

  }

  const Login = () => {
    fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 'username': email, 'password' : password }),
        })
        .then((response) => response.json())
        .then((response) => {
            if (response.message === 'success') {
                props.setEmail(email)
                props.setLoggedIn(true)
                navigate('/')
            } else {
                window.alert('Wrong email or password')
            }
        })
        .catch((error) => {
            console.error('Error:', error)
        })
    }

  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>Login</div>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={email}
          placeholder="Enter your email"
          onChange={(ev) => setEmail(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          type = "password"
          value={password}
          placeholder="Enter your password"
          onChange={(ev) => setPassword(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Log in'} />
      </div>
    </div>
  )
}

export default Login