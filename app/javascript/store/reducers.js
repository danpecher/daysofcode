import {
  DISPLAY_ENTRIES,
  DISPLAY_REPO_RESULT,
  PREPEND_ENTRY,
  START_REPO_CHECK,
  UPDATE_GITHUB_AUTH_STATUS,
  UPDATE_TWITTER_AUTH_STATUS
} from './actions'

const initialState = {
  authStatus: window.INIT.authStatus,
  entries: [],
  isRepoLoading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_ENTRIES:
      return {
        ...state,
        entries: action.entries
      }
    case PREPEND_ENTRY:
      return {
        ...state,
        entries: [action.entry, ...state.entries]
      }
    case UPDATE_GITHUB_AUTH_STATUS:
      return {
        ...state,
        authStatus: {
          ...state.authStatus,
          github: action.success
        }
      }
    case UPDATE_TWITTER_AUTH_STATUS:
      return {
        ...state,
        authStatus: {
          ...state.authStatus,
          twitter: action.success
        }
      }
    case START_REPO_CHECK:
      return {
        ...state,
        isRepoLoading: true
      }
    case DISPLAY_REPO_RESULT:
      return {
        ...state,
        isRepoLoading: false,
        authStatus: {
          ...state.authStatus,
          hasRepo: action.success
        }
      }
    default:
      return state
  }
}
