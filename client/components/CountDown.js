import React from 'react'

const CountDown = (props) => {
  const { min, sec } = props

  return (
    <div className="expected">
      <img src="/img/duration.svg" alt="clock icon"/>
      <p data-test="countdown-span">
        <span><strong>{min}</strong> mins</span> <span><strong>{sec}</strong> seconds</span>
      </p>
    </div>
  )
}

export default CountDown
