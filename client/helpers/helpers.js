import React from 'react'
import moment from 'moment'

export function findFollowingServices(services) {
  let str = ''

  // If only single object in `services`, Object.keys will repeat
  // single following service 17 times (once for each key in single object).
  // So this:

  if (services.ServiceID) {   // Determines if single object (vs services[0].ServiceID)
    if (!services.IsRealtime) {
      return convertTimeHoursMins(services.AimedDeparture)
    } else {
      return convertTimeHoursMins(services.ExpectedDeparture)
    }
  } else {
      str = Object.keys(services).map((index) => {
        if (index > 0 && services[index].IsRealtime && index < 6) {
          const readableTime = convertTimeHoursMins(services[index].ExpectedDeparture)
          return <li key={index}>{readableTime}</li>
        } else if (index > 0 && !services[index].IsRealtime && index < 6) {
          const readableTime = convertTimeHoursMins(services[index].AimedDeparture)
          return <li key={index} className="mute"><em>{readableTime}</em></li>
        } else {
          return null
        }
      })
  }

  // Remove null entries
  const cleanStr = str.filter(item => item)

  return cleanStr
}

export function convertTimeHoursMins(time) {
  return moment(time).format('h:mm a')
}

export function convertTimeSeconds(time) {
  return moment(time).format('ss')
}

// Testing util
export const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`)
  return wrapper
}
