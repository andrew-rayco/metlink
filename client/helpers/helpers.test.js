import React from 'react'
import moment from 'moment'

import {
  findFollowingServices,
  convertTimeHoursMins,
  convertTimeSeconds,
  findCorrectRoute
} from './helpers'

const serviceSingle = {
  "ServiceID": "14",
  "IsRealtime": true,
  "AimedDeparture": "2019-04-24T14:37:00+12:00",
  "ExpectedDeparture": "2019-04-24T14:39:02+12:00",
}
const servicesMulti = [
  {
    "ServiceID": "14",
    "IsRealtime": true,
    "AimedDeparture": "2019-04-29T11:07:00+12:00",
    "ExpectedDeparture": "2019-04-29T11:09:39+12:00",
  },
  {
    "ServiceID": "14",
    "IsRealtime": true,
    "AimedDeparture": "2019-04-29T11:37:00+12:00",
    "ExpectedDeparture": "2019-04-29T11:39:39+12:00",
  },
  {
    "ServiceID": "14",
    "IsRealtime": false,
    "AimedDeparture": "2019-04-29T12:07:00+12:00",
    "ExpectedDeparture": null,
  },
  {
    "ServiceID": "14",
    "IsRealtime": false,
    "AimedDeparture": "2019-04-29T12:37:00+12:00",
    "ExpectedDeparture": null,
  }
]
const serviceSingleScheduled = {
  "ServiceID": "14",
  "IsRealtime": false,
  "AimedDeparture": "2019-04-24T14:37:00+12:00",
  "ExpectedDeparture": "2019-04-24T14:39:02+12:00",
}
const rawServices = [
  {
    ServiceID: '14'
  },
  {
    ServiceID: '23'
  },
  {
    ServiceID: '42'
  },
  {
    ServiceID: '14'
  },
  {
    ServiceID: '23'
  },
  {
    ServiceID: '48'
  },
  {
    ServiceID: '1'
  }
]

describe('helper/util functions', () => {
  test('`convertTimeHoursMins` returns correct time', () => {
    expect(convertTimeHoursMins('2019-04-29T11:39:39+12:00')).toEqual('11:39 am')
  })

  test('`convertTimeSeconds` returns correct seconds', () => {
    expect(convertTimeSeconds('2019-04-24T14:39:02+12:00')).toEqual('02')
  })

  test('`findCorrectRoute` returns only services that match selected route', () => {
    expect(findCorrectRoute(rawServices, '14').length).toEqual(2)
  })
})

describe('`findFollowingServices` helper function', () => {
  test('Returns correctly with single realtime service', () => {
    expect(findFollowingServices(serviceSingle)).toEqual('2:39 pm')
  })

  test('Returns correctly with single scheduled service', () => {
    expect(findFollowingServices(serviceSingleScheduled)).toEqual('2:37 pm')
  })
})
