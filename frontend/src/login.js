import React, { useState } from 'react'

const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const onButtonClick = () => {

    setEmailError('')
    setPasswordError('')
    
    if (email === '') {
      setEmailError('Email is required')
      return
    }
    if (password === '') {
      setPasswordError('Password is required')
      return
    }
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        setEmailError('Please enter a valid email')
        return
    }
    check_account()

  }

  const check_account = () => {
    fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 'username': email, 'password' : password }),
        })
        .then((response) => response.json())
        .then((response) => {
            if (response.message === 'success') {
                props.onLogin(email)
            } else {
                window.alert('Incorrect email or password')
            }
        })
        .catch((error) => {
            console.error('Error:', error)
        })
    }

  return (
    <div className={'mainContainer'}>
        <div className={'titleContainer'}>
            <div>Sign In</div>
        </div>
        <br />
        <div className={'inputContainer'}>
            <input
                value={email}
                placeholder="Enter email"
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
                placeholder="Enter password"
                onChange={(ev) => setPassword(ev.target.value)}
                className={'inputBox'}
            />
            <label className="errorLabel">{passwordError}</label>
        </div>
        <br />
        <div className={'inputContainer'}>
            <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Sign In'} />
        </div>
    </div>
  )
}

export default Login