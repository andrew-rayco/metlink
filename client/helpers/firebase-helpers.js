// export function isLoggedIn(callback) {
//   // return firebase.auth().currentUser
//   firebase.auth().onAuthStateChanged(user => {
//     if (user) {
//       // console.log('from the realtime listener', user)
//       callback(user)
//     } else {
//       callback({ loggedIn: false })
//       // console.log('from the realtime listener - not logged in')
//     }
//   })
// }

export function getUserData(callback) {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      firebase.database().ref(user.uid).once('value')
        .then((data) => {
          let userData = data.val()
          userData.loggedIn = true
          callback(userData)
        })
        .catch((e) => {
          callback(e.message)
          console.log(e.message)
        })
    } else {
      callback({ loggedIn: false })
      // console.log('there is no user')
    }
  })
}
