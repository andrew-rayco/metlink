export function isLoggedIn() {
  let user = firebase.auth().currentUser // eslint-disable-line no-undef
  if (user) {
    return true
  } else {
    return false
  }
}

export function getUserData(callback) {
  // eslint-disable-next-line no-undef
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // eslint-disable-next-line no-undef
      firebase.database().ref(user.uid).once('value')
        .then((data) => {
          let userData = data.val()
          userData.loggedIn = true
          callback(userData)
        })
        .catch((e) => {
          callback(e.message)
        })
    } else {
      callback({ loggedIn: false })
    }
  })
}
