import React from 'react'

const Refresh = () => {
  return (
    <button className='btn-small' onClick={refreshPage}>Refresh</button>
  )
}

const refreshPage = () => {
  window.location.reload()
}

export default Refresh
