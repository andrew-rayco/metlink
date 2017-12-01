import request from 'superagent'

export function getData (destination, callback) {
  request
    .get('api-v1/' + destination)
    .end((err, result) => {
      err ? callback(err) : callback(result.body)
    })
}
