import React from 'react'
import 'normalize.css'
import styles from './App.css'
import DayInput from './DayInput.js'
import { connect } from 'react-redux'
import { postEntry } from '../store/actions'
import Entry from './Entry.js'

const App = ({ entries, onEntryPosted }) => {
  return (
    <div className={styles.container}>
      <h1>100 days of code</h1>
      <DayInput onEntryPosted={onEntryPosted} />
      <div className={styles.entries}>
        {entries.map(entry => (
          <Entry key={entry.id} date={entry.created_at} text={entry.content} />
        ))}
      </div>
    </div>
  )
}

const stateToProps = ({ entries }) => {
  return {
    entries
  }
}

const propsToDispatch = dispatch => {
  return {
    onEntryPosted: content => dispatch(postEntry(content))
  }
}

export default connect(stateToProps, propsToDispatch)(App)
