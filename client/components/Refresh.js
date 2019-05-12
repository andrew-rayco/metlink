import React from 'react'

const Refresh = (props) => {
  return (
    <button
        className='btn-small'
        onClick={props.fetchData}
    >
        Refresh
    </button>
  )
}

export default Refresh
