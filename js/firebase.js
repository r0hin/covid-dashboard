var firebaseConfig = {
    apiKey: "AIzaSyBq5C3cnAk6XbF2UuEeI9HY3GNrutkGLIk",
    authDomain: "cdash-ff1e4.firebaseapp.com",
    databaseURL: "https://cdash-ff1e4.firebaseio.com",
    projectId: "cdash-ff1e4",
    storageBucket: "cdash-ff1e4.appspot.com",
    messagingSenderId: "18068404487",
    appId: "1:18068404487:web:b9ba545313e63c5a0c2da2"
  };

firebase.initializeApp(firebaseConfig);
db = firebase.firestore()

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {

        window.user = firebase.auth().currentUser
        loadprofile(true)
        loadmessages()

    } else {
        window.user = false
        loadprofile(false)

    }
});

function signin() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        window.location.reload()
      }).catch(function(error) {
        alert(error.message)
      });
}

function signout() {
    firebase.auth().signOut().then(function() {
      }).catch(function(error) {
          alert(error.message)
      });
}

function loadprofile(status) {
    if (status) {
        document.getElementById('usercardfalse').style.display = 'none'
        document.getElementById('usercardtrue').style.display = 'block'

        document.getElementById('pfp1').src = user.photoURL
        document.getElementById('pfptext').innerHTML = user.displayName

    }
    else {
        document.getElementById('usercardtrue').style.display = 'none'
        document.getElementById('usercardfalse').style.display = 'block'
    }


}

$(function () {
    $('[data-toggle="popover"]').popover({
        trigger: 'focus'
    })
})