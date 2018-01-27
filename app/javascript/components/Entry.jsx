import React from 'react'
import PropTypes from 'prop-types'
import styles from './Entry.css'

class Entry extends React.Component {
  render() {
    return <div className={styles.entry}>
      <div><small>{this.props.date}</small></div>
      <div>{this.props.text}</div>
    </div>
  }
}

Entry.propTypes = {
  date: PropTypes.string,
  text: PropTypes.string,
}

export default Entry