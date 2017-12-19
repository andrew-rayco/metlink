export function isLoggedIn() {
  // firebase.auth().onAuthStateChanged((user) => {
  //   if (user) {
  //     // User is signed in.
  //     // var displayName = user.displayName;
  //     // var email = user.email;
  //     // var emailVerified = user.emailVerified;
  //     // var photoURL = user.photoURL;
  //     // var isAnonymous = user.isAnonymous;
  //     // var uid = user.uid;
  //     // var providerData = user.providerData;
  //     console.log('user is logged in')
  //     return data
  //     // return true
  //     // ...
  //   } else {
  //     // console.log('user is signed out')
  //     return false
  //     // User is signed out.
  //     // ...
  //   }
  // })

  // var user = firebase.auth().currentUser;
  //
  // if (user) {
  //   // User is signed in.
  //   console.log('user is signed in')
  //   return user
  // } else {
  //   console.log('no user is signed in')
  //   // No user is signed in.
  // }
  return firebase.auth().currentUser

}

export function test() {
  return true
}
