export function isLoggedIn(callback) {
  // return firebase.auth().currentUser
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      console.log('from the realtime listener', user)
      callback(user)
    } else {
      console.log('from the realtime listener - not logged in')
    }
  })
}

export function getUserData(callback) {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      firebase.database().ref(user.uid).once('value')
        .then((data) => {
          let userData = data.val()
          callback(userData)
        })
        .catch((e) => {
          console.log(e.message)
        })
    }
  })
}
