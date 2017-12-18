
export function isLoggedIn() {
  return firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in.
      // var displayName = user.displayName;
      // var email = user.email;
      // var emailVerified = user.emailVerified;
      // var photoURL = user.photoURL;
      // var isAnonymous = user.isAnonymous;
      // var uid = user.uid;
      // var providerData = user.providerData;
      return {user}
      // ...
    } else {
      console.log('user is signed out')
      return false
      // User is signed out.
      // ...
    }
  })
}

export function test() {
  return true
}
