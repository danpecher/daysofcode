import axios from 'axios'

export const PREPEND_ENTRY = 'PREPEND_ENTRY'
export const DISPLAY_ENTRIES = 'DISPLAY_ENTRIES'

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
