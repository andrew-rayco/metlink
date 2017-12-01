import request from 'superagent'

export function getToTownData (callback) {
  request
    .get('api-v1/test')
    .end((err, result) => {
      console.log('from api.js')
      err ? callback(err) : callback(result.body)
    })
}
