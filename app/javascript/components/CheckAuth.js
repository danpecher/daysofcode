import React from 'react'
import css from './App.css'
import { connect } from 'react-redux'

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)

const CheckAuth = ({ authStatus, children, isRepoLoading }) => {
  if (authStatus.twitter && authStatus.github && authStatus.hasRepo) {
    return children
  }
  const unauthenticated = ['twitter', 'github'].find(
    service => authStatus[service] === false
  )
  return (
    <div className={css.authOverlay}>
      {unauthenticated && (
        <div>
          <h2>Welcome, please authenticate {capitalize(unauthenticated)}:</h2>
          <a
            href={`/auth/${unauthenticated}${unauthenticated === 'twitter' ? '?x_auth_access_type=write' : ''}`}
            className={`${css.authLink} ${css.linkGithub}`}
          >
            <img
              src={require(`../assets/${unauthenticated}.png`)}
              alt={unauthenticated}
            />
            Connect with {capitalize(unauthenticated)}
          </a>
        </div>
      )}
      {authStatus.github &&
        !authStatus.hasRepo &&
        !isRepoLoading && (
          <p>
            It looks like you haven't forked the 100-days-of-code repository.
            Please do it{' '}
            <a
              href="https://github.com/Kallaway/100-days-of-code"
              target="_blank"
            >
              here
            </a>{' '}
            and refresh this page.
          </p>
        )}
    </div>
  )
}

const stateToProps = ({ authStatus, isRepoLoading }) => {
  return {
    authStatus,
    isRepoLoading
  }
}

export default connect(stateToProps, undefined)(CheckAuth)
