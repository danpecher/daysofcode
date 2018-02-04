import { DISPLAY_ENTRIES, PREPEND_ENTRY } from './actions'

export default (state = { entries: [] }, action) => {
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
    default:
      return state
  }
}
