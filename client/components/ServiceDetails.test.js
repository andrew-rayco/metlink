import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import ServiceDetails from './ServiceDetails'

Enzyme.configure({ adapter: new EnzymeAdapter() })

const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`)
  return wrapper
}

const date = "2019-04-24T14:19:53+12:00"
const nextService = {
  "ServiceID": "14",
  "IsRealtime": true,
  "VehicleRef": "3041",
  "Direction": "Inbound",
  "OperatorRef": "NBM",
  "OriginStopID": "4136",
  "OriginStopName": "Wilton-SurreySt",
  "DestinationStopID": "6224",
  "DestinationStopName": "Kilbirnie",
  "AimedArrival": "2019-04-24T14:37:00+12:00",
  "AimedDeparture": "2019-04-24T14:37:00+12:00",
  "VehicleFeature": "lowFloor",
  "DepartureStatus": "delayed",
  "ExpectedDeparture": "2019-04-24T14:39:02+12:00",
  "DisplayDeparture": "2019-04-24T14:39:02+12:00",
  "DisplayDepartureSeconds": 1149,
  "Service": {
    "Code": "14",
    "TrimmedCode": "14",
    "Name": "Wilton - Wellington - Roseneath - Hataitai - Kilbirnie",
    "Mode": "Bus",
    "Link": "/timetables/bus/14"
  }
}
const followingService = {
  "ServiceID": "14",
  "IsRealtime": true,
  "VehicleRef": "3041",
  "Direction": "Inbound",
  "OperatorRef": "NBM",
  "OriginStopID": "4136",
  "OriginStopName": "Wilton-SurreySt",
  "DestinationStopID": "6224",
  "DestinationStopName": "Kilbirnie",
  "AimedArrival": "2019-04-24T14:37:00+12:00",
  "AimedDeparture": "2019-04-24T14:37:00+12:00",
  "VehicleFeature": "lowFloor",
  "DepartureStatus": "delayed",
  "ExpectedDeparture": "2019-04-24T14:39:02+12:00",
  "DisplayDeparture": "2019-04-24T14:39:02+12:00",
  "DisplayDepartureSeconds": 1149,
  "Service": {
    "Code": "14",
    "TrimmedCode": "14",
    "Name": "Wilton - Wellington - Roseneath - Hataitai - Kilbirnie",
    "Mode": "Bus",
    "Link": "/timetables/bus/14"
  }
}

describe('ServiceDetails component', () => {
  test('Displays `following service` if passsed followingService', () => {
    const wrapper = shallow(
      <ServiceDetails
        date={date}
        nextService={nextService}
        followingService={followingService}
      />
    )
    const appComponent = findByTestAttr(wrapper, 'following-content')
    expect(
      appComponent.text()
    ).toEqual('2:39 pm')
  })

  test('Handles missing `following service` with message', () => {
    const wrapper = shallow(
      <ServiceDetails
        date={date}
        nextService={nextService}
        followingService={{}}
      />
    )
    const appComponent = findByTestAttr(wrapper, 'following-content')
    expect(
      appComponent.text()
    ).toEqual('None expected yet')

  })

})
