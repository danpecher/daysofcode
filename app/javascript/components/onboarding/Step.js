import React from 'react'
import PropTypes from 'prop-types'
import css from './App.css'

const Step = ({title, number, isActive, isCompleted, children}) => {
  return <div className={`${css.step} ${isActive ? '' : css.stepInactive} ${isCompleted ? css.stepCompleted : ''}`}>
    <strong>Step {number}</strong>: {title}
    {isActive && <div className={css.stepContent}>
      {children}
    </div>}
  </div>
}

Step.propTypes = {
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  number: PropTypes.number.isRequired,
  isCompleted: PropTypes.bool.isRequired,
}

export default Step