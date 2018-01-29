import React from 'react'
import 'normalize.css'
import styles from './App.css'
import Entry from "./Entry.jsx";
import DayInput from "./DayInput.jsx";

const dummyEntries = Array(10).fill().map(() => {
  return {date: '27. 1. 2017', text: 'Today I Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolorem optio quisquam! Aut deserunt, dicta dolore dolorem illum inventore ipsam, iure nobis quam quia quisquam sequi temporibus unde. Ab, omnis.'}
})

class App extends React.Component {
  render() {
    const entries = dummyEntries.map((entry, i) => <Entry key={i} {...entry} />)

    return <div className={styles.container}>
      <h1>100 days of code</h1>
      <DayInput/>
      <div className={styles.entries}>
        {entries}
      </div>
    </div>
  }
}

export default App