import React, { Component } from 'react'
import styles from './DayInput.css'
import PropTypes from 'prop-types'

// TODO: fetch from twitter api daily
const MAX_TWITTER_URL_LEN = 24

class DayInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      chars: 0,
      maxChars: 280 - props.currentDay.toString().length - 18
    }
  }
  updateCharCount(content) {
    const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    const urlCount = content.match(regex).length
    const chars = content.replace(regex, '').length + urlCount * MAX_TWITTER_URL_LEN

    this.setState({
      chars
    })
  }
  render() {
    return (
      <div className={styles.container}>
        <h4 className={styles.title}>Today's post:</h4>
        <textarea
          ref={'text'}
          className={styles.input}
          placeholder={'Today I ... '}
          onChange={e => this.updateCharCount(e.target.value)}
        />
        <div className={styles.charCount}>
          <span
            style={{
              color: this.state.chars >= this.state.maxChars ? 'red' : ''
            }}
          >
            {this.state.chars}
          </span>/{this.state.maxChars}
        </div>
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
            className={'post-button'}
            onClick={() => {
              if (this.state.chars >= this.state.maxChars) {
                return
              }
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
  onEntryPosted: PropTypes.func.isRequired,
  currentDay: PropTypes.number.isRequired
}

export default DayInput
