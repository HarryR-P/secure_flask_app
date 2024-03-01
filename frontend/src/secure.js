import React from 'react'

const Secure = (props) => {

  const onButtonClick = () => {
    props.onLogout()
  }

  return (
    <div className="mainContainer">
      <div className={'titleContainer'}>
        <div>This page is Secure</div>
      </div>
      
      <div className={'buttonContainer'}>
        <div>Account: {props.user}</div>
        <input
          className={'inputButton'}
          type="button"
          onClick={onButtonClick}
          value={'Sign out'}
        />
      </div>
    </div>
  )
}

export default Secure