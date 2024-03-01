import React from 'react'
import { useNavigate } from 'react-router-dom'

const Secure = (props) => {
  const { email } = props
  const navigate = useNavigate()

  const onButtonClick = () => {
    props.setLoggedIn(false)
    navigate('/login')
  }

  return (
    <div className="mainContainer">
      <div className={'titleContainer'}>
        <div>Welcome!</div>
      </div>
      <div>This page is Secure</div>
      <div className={'buttonContainer'}>
        <input
          className={'inputButton'}
          type="button"
          onClick={onButtonClick}
          value={'Log out'}
        />
        <div>Your email address is {email}</div>
      </div>
    </div>
  )
}

export default Secure