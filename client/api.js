import request from 'superagent'

export function getToTownData (callback) {
  request
    .get('api-v1/test')
    .end((err, result) => {
      err ? callback(err) : callback(result.body)
    })
}
