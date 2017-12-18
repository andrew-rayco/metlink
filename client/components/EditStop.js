import React from 'react'

class EditStop extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      homeStop: '15',
      townStop: '1111'
     }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    let id = e.target.id
    let value = e.target.value
    this.setState( { [id]: value } )
  }

  render() {
    return (
      <form>
        <label htmlFor="homeStop">
          Home stop #
          <input id="homeStop" type="number" value={this.state.homeStop} onChange={this.handleChange}/>
          <button id="home-update" value="Update">Update</button>
        </label>
        <label htmlFor="townStop">
          Town stop #
          <input id="townStop" type="number" value={this.state.townStop} onChange={this.handleChange}/>
          <button type="submit" value="Update">Update</button>
        </label>
      </form>
    )
  }
}

export default EditStop
