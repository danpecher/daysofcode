import React, { Component } from 'react'
import styles from './DayInput.css'
import PropTypes from 'prop-types'

class DayInput extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h4>Today's post:</h4>

        <textarea
          ref={'text'}
          className={styles.input}
          placeholder={'Today I ... '}
        />
        <br />

        <div className={styles.submit}>
          <div>
            <select className={styles.select}>
              <option value="">-- Select project --</option>
              <option value="">Project 1</option>
              <option value="">Project 2</option>
              <option value="">Project 3</option>
            </select>
            <a href="" className={styles.newProject}>
              Add new project
            </a>
          </div>
          <button
            onClick={() => {
              this.props.onEntryPosted(this.refs.text.value)
              this.refs.text.value = ''
            }}
          >
            Post
          </button>
        </div>
      </div>
    )
  }
}

DayInput.propTypes = {
  onEntryPosted: PropTypes.func.isRequired
}

export default DayInput
