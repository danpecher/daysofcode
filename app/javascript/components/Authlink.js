import React from 'react'
import PropTypes from 'prop-types'
import css from './Authlink.css'

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)

const Authlink = ({ service, success, onWindowClosed }) => {
  if (success) {
    return (
      <a
        href="#"
        onClick={e => e.preventDefault()}
        className={`${css.connected} ${css.authLink} ${css.linkGithub}`}
      >
        <img src={require(`../assets/${service}.png`)} alt={service} />
        {capitalize(service)} connected
      </a>
    )
  }
  return (
    <a
      onClick={e => {
        const $window = window.open(
          `/auth/${service}`,
          `${capitalize(service)} auth`,
          'width=600, height=800'
        )
        const interval = setInterval(() => {
          if ($window.closed) {
            clearInterval(interval)
            onWindowClosed(window.authSuccess)
          }
        }, 1000)
        e.preventDefault()
      }}
      href=""
      className={`${css.authLink} ${css.linkGithub}`}
    >
      <img src={require(`../assets/${service}.png`)} alt={service} />
      Connect with {capitalize(service)}
    </a>
  )
}

Authlink.propTypes = {
  service: PropTypes.string.isRequired,
  onWindowClosed: PropTypes.func.isRequired,
  success: PropTypes.bool.isRequired
}

export default Authlink
