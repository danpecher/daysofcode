import React from 'react'
import PropTypes from 'prop-types'
import styles from './Entry.css'

class Entry extends React.Component {
  render() {
    return <div className={styles.entry}>
      <div><small>{this.props.date}</small></div>
      <div className={styles.text}>{this.props.text}</div>
      <div><strong>-- Optional screenshot of app --</strong></div>
      <div><strong>-- List of commits here --</strong></div>
      <div><a href="">Link to tweet</a></div>
      <div><a href="">Link to github repo</a></div>
    </div>
  }
}

Entry.propTypes = {
  date: PropTypes.string,
  text: PropTypes.string,
}

export default Entry