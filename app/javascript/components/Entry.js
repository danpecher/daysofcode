import React from 'react'
import PropTypes from 'prop-types'
import styles from './Entry.css'
import moment from 'moment'

const Entry = ({ date, text, day, round }) => {
  return (
    <div className={styles.entry}>
      <div className={styles.dateWrap}>
        <div className={styles.bullet} />
        <strong>
          R{round}D{day}
        </strong>&emsp;
        <small>{moment(date).format('MMMM Do YYYY, h:mm:ss a')}</small>
      </div>
      <div className={styles.bordered}>
        <div className={styles.text}>{text}</div>
        {/*<div><strong>-- Optional screenshot of app --</strong></div>
        <div className={styles.commits}>
          <div><a href="">4abe8df</a> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, exercitationem?</div>
          <div><a href="">a82akwl</a> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
          <div><a href="">91kwnsy</a> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque iste nisi quis similique voluptas.</div>
        </div>
        <div className={styles.socialLinks}>
          <a className={styles.twitter} href=""><i className="fa fa-twitter"></i></a>
          <a className={styles.github} href=""><i className="fa fa-github"></i></a>
        </div>*/}
      </div>
    </div>
  )
}

Entry.propTypes = {
  date: PropTypes.string,
  text: PropTypes.string,
  day: PropTypes.number,
  round: PropTypes.number
}

export default Entry
