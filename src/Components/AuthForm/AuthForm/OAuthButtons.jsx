import React from 'react'

const OAuthButtons = () => {
  return (
    <div className="OAuth-Icons">
      <a
        className="google__oauth__icon"
        href=""
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/128/2875/2875404.png"
          alt="Sign in with Google"
          className="google-icon"
        />
      </a>
      <a
        className="github__oauth__icon"
        href=""
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png"
          alt="Sign in with Github"
          className="github-icon"
        />
      </a>
    </div>
  )
}

export default OAuthButtons
