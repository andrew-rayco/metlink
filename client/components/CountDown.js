import React from 'react'

const CountDown = (props) => {
  return (
    <div className="expected">
      <img src="/img/duration.svg" alt="clock icon"/>
      <p>
        <span><strong>{props.min}</strong> mins</span> <span><strong>{props.sec}</strong> seconds</span>
      </p>
    </div>
  )
}

export default CountDown
