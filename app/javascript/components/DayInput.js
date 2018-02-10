import React, { Component } from 'react'
import styles from './DayInput.css'
import PropTypes from 'prop-types'

class DayInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      chars: 0,
      maxChars: 280 - props.currentDay.toString().length - 18
    }
  }
  updateCharCount(content) {
    this.setState({
      chars: content.length
    })
  }
  render() {
    return (
      <div className={styles.container}>
        <h4>Today's post:</h4>

        <textarea
          ref={'text'}
          className={styles.input}
          placeholder={'Today I ... '}
          onChange={e => this.updateCharCount(e.target.value)}
        />
        <span style={{color: this.state.chars >= this.state.maxChars ? 'red' : ''}}>{this.state.chars}</span>/{this.state.maxChars}
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
