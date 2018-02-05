import React from 'react'
import { connect } from 'react-redux'
import css from './App.css'
import Step from "./Step";
import Step1 from "./Step1";

const App = ({activeStep}) => {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <h1 className={css.title}>Welcome to 100 Days of Code!</h1>
        <div className={css.steps}>
          <Step title={'Sign in using one of these services'} number={1} isActive={activeStep === 1} isCompleted={activeStep > 1}>
            <Step1/>
          </Step>
          <Step title={'Connect with the other service'} number={2}  isActive={activeStep === 2} isCompleted={activeStep > 2} />
          <Step title={'Select a Github repo to be used as your log'} number={3}  isActive={activeStep === 3} isCompleted={activeStep > 3} />
        </div>
      </div>
    </div>
  )
}

const stateToProps = ({ activeStep }) => {
  return {
    activeStep
  }
}

const propsToDispatch = dispatch => {
  return {
  }
}

export default connect(stateToProps, propsToDispatch)(App)
