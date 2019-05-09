import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import ToTown from '../ToTown'

Enzyme.configure({ adapter: new EnzymeAdapter() })

describe('ToTown component', () => {
    // test('Renders', () => {
    //     const wrapper = shallow(<ToTown />)
    //     expect(wrapper).toMatchSnapshot()
    // })
})
