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

firebase.auth().onAuthStateChanged(function (user) {
    check()
    if (user) {

        window.user = firebase.auth().currentUser
        console.log("User is signed in: " + user.displayName);
        document.getElementById('thebutton').style.display = 'none'
        document.getElementById('name1').style.display = 'inline-block'
        document.getElementById('pfp1').style.display = 'inline-block'
        document.getElementById('name1').innerHTML = user.displayName

    } else {
        document.getElementById('name1').style.display = 'none'
        document.getElementById('pfp1').style.display = 'none'
        document.getElementById('thebutton').style.display = 'inline-block'
        document.getElementById('thebutton').innerHTML = "Sign In / Sign Up"
        document.getElementById('thebutton').onclick = function() {
            $('#signmodal').modal('toggle')
        }

    }
});

