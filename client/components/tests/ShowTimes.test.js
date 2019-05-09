import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import ShowTimes from '../ShowTimes'

Enzyme.configure({ adapter: new EnzymeAdapter() })

const data = {
    Services: [
        { ServiceID: '14', isRealtime: true, DisplayDepartureSeconds: 60 },
        { ServiceID: '14', isRealtime: false, DisplayDepartureSeconds: 180 }
    ],
    Stop: {
        Name: 'Sexy stop name'
    }
}

describe('ShowTimes component', () => {
    test('renders', () => {
        const wrapper = shallow(<ShowTimes data={ data } />)

        expect(wrapper).toMatchSnapshot()
    })

    test('`secondsToTime` method directly invoked', () => {
        const wrapper = shallow(<ShowTimes data={ data } />)
        const instance = wrapper.instance()
        expect(instance.secondsToTime(1000)).toEqual({ h: 0, m: 16, s: 40 })
    })

    test('`countDown` method directly invoked', () => {
        const wrapper = shallow(<ShowTimes data={ data } />)
        const instance = wrapper.instance()
        instance.refs = { myRef: true }
        instance.countDown()
        expect(wrapper.state().seconds).toEqual(59)
    })

    test('`countDown method directly invoked with 1 second`', () => {
        const wrapper = shallow(<ShowTimes data={ data } />)
        const instance = wrapper.instance()
        instance.refs = { myRef: true }
        wrapper.setState({ seconds: 1 })
        instance.countDown()
        expect(wrapper.state().seconds).toEqual(0)
    })

    test('Handles no services in props', () => {
        const stopOnlyData = {Stop: {Name: 'Sexy stop name'}}
        const wrapper = shallow(<ShowTimes data={stopOnlyData} />)
        expect(wrapper.state().seconds).toEqual(9999)
    })
})
