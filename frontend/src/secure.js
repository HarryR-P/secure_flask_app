import React from 'react'

const Secure = (props) => {

  const onButtonClick = () => {
    props.onLogout()
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
        <div>Your email address is {props.user}</div>
      </div>
    </div>
  )
}

export default Secure