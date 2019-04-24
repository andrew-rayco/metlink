import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import ShowTimes from './ShowTimes'

Enzyme.configure({ adapter: new EnzymeAdapter() })

const data = {
  Services: [
    { ServiceID: '14', isRealtime: true },
    { ServiceID: '14', isRealtime: false }
  ],
  Stop: {
    Name: 'Sexy stop name'
  }
}

describe('ShowTimes component', () => {
  test('renders', () => {
    const wrapper = shallow(<ShowTimes data={ data } />)

    expect(wrapper.exists()).toBe(true)
  })

})
