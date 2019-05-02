import request from 'superagent'
import { findCorrectRoute } from './helpers/helpers'

export function getData (destination, payload, callback) {
  request
    .post('api-v1/' + destination)
    .send(payload)
    .end((err, result) => {
      err ? callback(err) : callback({
        LastModified: result.body.LastModified,
        Services: findCorrectRoute(result.body.Services, payload.serviceId),
        Stop: result.body.Stop
      })
    })
}
