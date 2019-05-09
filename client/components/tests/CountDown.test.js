import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

import { findByTestAttr } from '../../helpers/helpers'
import CountDown from '../CountDown'

Enzyme.configure({ adapter: new EnzymeAdapter() })

const props = { min: 25, sec: 10 }

describe('CountDown component', () => {
  test('Displays correct countdown time and text', () => {
    const wrapper = shallow(<CountDown {...props} />)

    const appComponent = findByTestAttr(wrapper, 'countdown-span')
    expect(appComponent.text()).toEqual(`${props.min} mins ${props.sec} seconds`)
  })
})
