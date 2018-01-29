import React from 'react'
import styles from './DayInput.css'

class DayInput extends React.Component {
  render() {
    return <div className={styles.container}>
      <h4>Today's post:</h4>

      <textarea className={styles.input} placeholder={"Today I ... "}/><br/>

      <div className={styles.submit}>
        <div>
          <select className={styles.select}>
            <option value="">-- Select project --</option>
            <option value="">Project 1</option>
            <option value="">Project 2</option>
            <option value="">Project 3</option>
          </select>
          <a href="" className={styles.newProject}>Add new project</a>
        </div>
        <button>Post</button>
      </div>
    </div>
  }
}

export default DayInput