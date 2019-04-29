import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

import { findByTestAttr } from '../helpers/helpers'
import ServiceDetails from './ServiceDetails'

Enzyme.configure({ adapter: new EnzymeAdapter() })

const date = "2019-04-24T14:19:53+12:00"
const nextService = {
  "ServiceID": "14",
  "IsRealtime": true,
  "AimedDeparture": "2019-04-24T14:37:00+12:00",
  "ExpectedDeparture": "2019-04-24T14:39:02+12:00"
}
const nextServiceScheduled = {
  "ServiceID": "14",
  "IsRealtime": false,
  "AimedDeparture": "2019-04-24T14:37:00+12:00",
  "ExpectedDeparture": "2019-04-24T14:39:02+12:00"
}
const followingServices = {
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
const followingServicesMulti = [
  {
    "ServiceID": "14",
    "IsRealtime": true,
    "VehicleRef": "1461",
    "Direction": "Inbound",
    "OperatorRef": "NBM",
    "OriginStopID": "4136",
    "OriginStopName": "Wilton-SurreySt",
    "DestinationStopID": "6224",
    "DestinationStopName": "Kilbirnie",
    "AimedArrival": "2019-04-29T11:07:00+12:00",
    "AimedDeparture": "2019-04-29T11:07:00+12:00",
    "VehicleFeature": "lowFloor",
    "DepartureStatus": "delayed",
    "ExpectedDeparture": "2019-04-29T11:09:39+12:00",
    "DisplayDeparture": "2019-04-29T11:09:39+12:00",
    "DisplayDepartureSeconds": 1558,
    "Service": {
      "Code": "14",
      "TrimmedCode": "14",
      "Name": "Wilton - Wellington - Roseneath - Hataitai - Kilbirnie",
      "Mode": "Bus",
      "Link": "/timetables/bus/14"
    }
  },
  {
    "ServiceID": "14",
    "IsRealtime": true,
    "VehicleRef": "2588",
    "Direction": "Inbound",
    "OperatorRef": "NBM",
    "OriginStopID": "4136",
    "OriginStopName": "Wilton-SurreySt",
    "DestinationStopID": "6224",
    "DestinationStopName": "Kilbirnie",
    "AimedArrival": "2019-04-29T11:37:00+12:00",
    "AimedDeparture": "2019-04-29T11:37:00+12:00",
    "VehicleFeature": "lowFloor",
    "DepartureStatus": "delayed",
    "ExpectedDeparture": "2019-04-29T11:39:39+12:00",
    "DisplayDeparture": "2019-04-29T11:39:39+12:00",
    "DisplayDepartureSeconds": 3358,
    "Service": {
      "Code": "14",
      "TrimmedCode": "14",
      "Name": "Wilton - Wellington - Roseneath - Hataitai - Kilbirnie",
      "Mode": "Bus",
      "Link": "/timetables/bus/14"
    }
  },
  {
    "ServiceID": "14",
    "IsRealtime": false,
    "VehicleRef": null,
    "Direction": "Inbound",
    "OperatorRef": "NBM",
    "OriginStopID": "4136",
    "OriginStopName": "Wilton-SurreySt",
    "DestinationStopID": "6224",
    "DestinationStopName": "Kilbirnie",
    "AimedArrival": "2019-04-29T12:07:00+12:00",
    "AimedDeparture": "2019-04-29T12:07:00+12:00",
    "VehicleFeature": null,
    "DepartureStatus": null,
    "ExpectedDeparture": null,
    "DisplayDeparture": "2019-04-29T12:07:00+12:00",
    "DisplayDepartureSeconds": 4999,
    "Service": {
      "Code": "14",
      "TrimmedCode": "14",
      "Name": "Wilton - Wellington - Roseneath - Hataitai - Kilbirnie",
      "Mode": "Bus",
      "Link": "/timetables/bus/14"
    }
  },
  {
    "ServiceID": "14",
    "IsRealtime": false,
    "VehicleRef": null,
    "Direction": "Inbound",
    "OperatorRef": "NBM",
    "OriginStopID": "4136",
    "OriginStopName": "Wilton-SurreySt",
    "DestinationStopID": "6224",
    "DestinationStopName": "Kilbirnie",
    "AimedArrival": "2019-04-29T12:37:00+12:00",
    "AimedDeparture": "2019-04-29T12:37:00+12:00",
    "VehicleFeature": null,
    "DepartureStatus": null,
    "ExpectedDeparture": null,
    "DisplayDeparture": "2019-04-29T12:37:00+12:00",
    "DisplayDepartureSeconds": 6799,
    "Service": {
      "Code": "14",
      "TrimmedCode": "14",
      "Name": "Wilton - Wellington - Roseneath - Hataitai - Kilbirnie",
      "Mode": "Bus",
      "Link": "/timetables/bus/14"
    }
  }
]

describe('ServiceDetails component', () => {
  test('Displays `following service` time if passed single followingService object', () => {
    const wrapper = shallow(
      <ServiceDetails
        date={date}
        nextService={nextService}
        followingServices={followingServices}
      />
    )

    const appComponent = findByTestAttr(wrapper, 'following-content')
    expect(
      appComponent.text()
    ).toContain('2:39 pm')
  })


  test('Displays `following service` time if passed multiple followingService objects', () => {
    const wrapper = shallow(
      <ServiceDetails
        date={date}
        nextService={nextService}
        followingServices={followingServicesMulti}
      />
    )

    const appComponent = findByTestAttr(wrapper, 'following-content')
    expect(
      appComponent.children().length
    ).toBeGreaterThan(1)
  })


  test('Handles missing `following service` with message', () => {
    const wrapper = shallow(
      <ServiceDetails
        date={date}
        nextService={nextService}
        followingServices={{}}
      />
    )

    const appComponent = findByTestAttr(wrapper, 'following-content')
    expect(
      appComponent.text()
    ).toEqual('None expected yet')
  })


  test('Error message displayed if no `nextService` props', () => {
    const wrapper = shallow(
      <ServiceDetails
        date={date}
        nextService={undefined}
        followingServices={followingServices}
      />
    )

    const appComponent = findByTestAttr(wrapper, 'no-data-error')
    expect(
      appComponent.text()
    ).toEqual('Problem getting data. Try in a few moments')
  })


  test('Displays correct `expected time` if `nextService` is scheduled', () => {
    const wrapper = shallow(
      <ServiceDetails
        date={date}
        nextService={nextServiceScheduled}
        followingServices={followingServices}
      />
    )

    const appComponent = findByTestAttr(wrapper, 'expected-time')
    expect(appComponent.text()).toEqual('2:39 pm and 02 seconds')
  })

})
