import React from 'react'

const EditStop = () => {
  return (
    <form>
      <label for="home">Home stop #
        <input id="home" type="text" name="home-stop"/>
        <button id="home-update" value="Update">Update</button>
      </label>
      <label for="town">Town stop #
        <input id="town" type="text" name="town-stop"/>
        <button type="submit" value="Update">Update</button>
      </label>
    </form>
  )
}

export default EditStop
