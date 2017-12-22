import request from 'superagent'

export function getData (destination, payload, callback) {
  request
    .post('api-v1/' + destination)
    .send(payload)
    .end((err, result) => {
      err ? callback(err) : callback(result.body)
    })
}
