export function isLoggedIn() {
  let user = firebase.auth().currentUser
  if (user) {
    return true
  } else {
    return false
  }
}

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
    }
  })
}
