import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import { findByTestAttr } from '../../helpers/helpers'

import Header from '../Header'

Enzyme.configure({ adapter: new EnzymeAdapter() })

describe('Header component', () => {
  test('renders correctly', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot()
  })


  test('h1 displays correct title', () => {
    const wrapper = shallow(<Header />)

    const appComponent = wrapper.find('h1')
    expect(appComponent.text()).toEqual('Sexy Metlink App')
  })
})
