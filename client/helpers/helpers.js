import moment from 'moment'

export function labelServices(services) {
  let str = ''

  // If only single object in `services`, Object.keys will repeat
  // single following service 17 times (once for each key in single object).
  // So this:
  if (services.ServiceID) {
    if (!services.IsRealtime) {
      return convertTimeHoursMins(services.AimedDeparture)
    } else {
      return convertTimeHoursMins(services.ExpectedDeparture)
    }
  } else {
    Object.keys(services).forEach(serviceIndex => {
      if (!services[serviceIndex].IsRealtime && serviceIndex != 0) {
        const readableDate = convertTimeHoursMins(services[serviceIndex].AimedDeparture)
        str += `${readableDate} (SCHED), `
      } else if (serviceIndex != 0) {
        const readableDate = convertTimeHoursMins(services[serviceIndex].ExpectedDeparture)
        str += `${readableDate}, `
      }
    })
  }

  return str
}

export function convertTimeHoursMins(time) {
  return moment(time).format('h:mm a')
}

export function convertTimeSeconds(time) {
  return moment(time).format('ss')
}
