import React from 'react'
import PropTypes from 'prop-types'
import styles from './Entry.css'
import moment from 'moment'

const MissedDay = ({ date }) => {
  return (
    <div className={styles.entry}>
      <div className={styles.dateWrap}>
        <div className={styles.cross} />
        <span className={styles.missed}>Missed day</span>&emsp;
        <small>{moment(date).format('MMMM Do YYYY')}</small>
      </div>
      <div className={styles.bordered} />
    </div>
  )
}

MissedDay.propTypes = {
  date: PropTypes.string
}

export default MissedDay
