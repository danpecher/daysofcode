import axios from 'axios'

export const PREPEND_ENTRY = 'PREPEND_ENTRY'
export const DISPLAY_ENTRIES = 'DISPLAY_ENTRIES'
export const DISPLAY_REPO_RESULT = 'DISPLAY_REPO_RESULT'
export const START_REPO_CHECK = 'START_REPO_CHECK'
export const UPDATE_TWITTER_AUTH_STATUS = 'UPDATE_TWITTER_AUTH_STATUS'
export const UPDATE_GITHUB_AUTH_STATUS = 'UPDATE_GITHUB_AUTH_STATUS'

export const displayEntries = entries => {
  return {
    type: DISPLAY_ENTRIES,
    entries
  }
}

export const fetchEntries = () => {
  return dispatch => {
    axios.get('/posts.json').then(res => dispatch(displayEntries(res.data)))
  }
}

export const prependEntry = entry => {
  return {
    type: PREPEND_ENTRY,
    entry
  }
}

export const postEntry = content => {
  return dispatch => {
    axios
      .post('/posts.json', {
        post: { content }
      })
      .then(res => dispatch(prependEntry(res.data)))
  }
}

export const updateGithubStatus = success => {
  return dispatch => {
    dispatch({
      type: UPDATE_GITHUB_AUTH_STATUS,
      success
    })

    if (success) {
      dispatch(checkGithubRepo())
    }
  }
}

export const updateTwitterStatus = success => {
  return {
    type: UPDATE_TWITTER_AUTH_STATUS,
    success
  }
}

export const checkGithubRepo = () => {
  return dispatch => {
    dispatch({
      type: START_REPO_CHECK
    })
    axios
      .get('/has-repo')
      .then(res => dispatch(displayRepoResult(res.data.hasRepo)))
  }
}

export const displayRepoResult = success => {
  return {
    type: DISPLAY_REPO_RESULT,
    success
  }
}
