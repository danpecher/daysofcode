import React from 'react'
import { connect } from 'react-redux'
import Authlink from './Authlink'
import css from './App.css'
import { updateGithubStatus, updateTwitterStatus } from '../store/actions'

const CheckAuth = ({
  authStatus,
  children,
  onGithubAuthenticated,
  onTwitterAuthenticated,
  isRepoLoading
}) => {
  let content
  if (authStatus.twitter && authStatus.github && authStatus.hasRepo) {
    content = children
  } else
    content = (
      <div className={css.authOverlay}>
        <h2>Welcome, please authenticate Twitter and Github:</h2>
        <Authlink
          success={authStatus.github}
          service={'github'}
          onWindowClosed={onGithubAuthenticated}
        />
        <Authlink
          success={authStatus.twitter}
          service={'twitter'}
          onWindowClosed={onTwitterAuthenticated}
        />
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

  return <div className={css.authContainer}>{content}</div>
}

const stateToProps = ({ authStatus, isRepoLoading }) => {
  return {
    authStatus,
    isRepoLoading
  }
}

const dispatchToProps = dispatch => {
  return {
    onGithubAuthenticated: success => dispatch(updateGithubStatus(success)),
    onTwitterAuthenticated: success => dispatch(updateTwitterStatus(success))
  }
}

export default connect(stateToProps, dispatchToProps)(CheckAuth)
