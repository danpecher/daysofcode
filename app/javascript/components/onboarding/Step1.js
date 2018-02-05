import React from 'react'
import css from './App.css'

const Step1 = ({}) => {
  return <div>
    <a onClick={(e) => {
      window.open('/auth/github', 'Github auth', 'width=600, height=800')
      e.preventDefault()
    }} href="" className={`${css.authLink} ${css.linkGithub}`}>
      <img src={require('../../assets/github.png')} alt=""/>
      Sign in using Github
    </a>
    <a onClick={(e) => {
      window.open('/auth/twitter', 'Twitter auth', 'width=600, height=800')
      e.preventDefault()
    }} href="" className={`${css.authLink} ${css.linkTwitter}`}>
      <img src={require('../../assets/twitter.png')} alt=""/>
      Sign in using Twitter
    </a>
  </div>
}

Step1.propTypes = {

}

export default Step1