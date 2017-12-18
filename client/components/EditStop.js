import React from 'react'

const EditStop = () => {
  return (
    <form>
      <label for="home">Home stop #
        <input id="home" type="text" name="home-stop"/>
        <input type="submit" value="Update"/>
      </label>
      <label for="town">Town stop #
        <input id="town" type="text" name="town-stop"/>
        <input type="submit" value="Update"/>
      </label>
    </form>
  )
}

export default EditStop
