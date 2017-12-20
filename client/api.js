import request from 'superagent'

export function getData (destination, callback) {
  request
    .post('api-v1/' + destination)
    .send({ "name": 'Andy' })
    .end((err, result) => {
      err ? callback(err) : callback(result.body)
    })
}
