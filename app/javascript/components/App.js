import React from 'react'
import 'normalize.css'
import styles from './App.css'
import DayInput from './DayInput.js'
import { connect } from 'react-redux'
import { postEntry } from '../store/actions'
import Entry from './Entry.js'
import CheckAuth from './CheckAuth'
import MissedEntry from './MissedEntry'

const App = ({ entries, onEntryPosted, hasPostedToday, currentDay }) => {
  return (
    <div className={styles.container}>
      <h1>100 days of code</h1>
      <CheckAuth>
        {!hasPostedToday && (
          <DayInput currentDay={currentDay} onEntryPosted={onEntryPosted} />
        )}
        <div className={styles.entries}>
          {entries.map(
            entry =>
              entry.missed_day ? (
                <MissedEntry date={entry.created_at} />
              ) : (
                <Entry
                  key={entry.id}
                  date={entry.created_at}
                  text={entry.content}
                  round={entry.round}
                  day={entry.day}
                />
              )
          )}
        </div>
      </CheckAuth>
    </div>
  )
}

const stateToProps = ({ entries, hasPostedToday, currentDay }) => {
  return {
    entries,
    hasPostedToday,
    currentDay
  }
}

const dispatchToProps = dispatch => {
  return {
    onEntryPosted: content => dispatch(postEntry(content))
  }
}

export default connect(stateToProps, dispatchToProps)(App)
