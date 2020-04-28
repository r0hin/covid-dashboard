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


        document.getElementById('signed').style.display = 'block'
        document.getElementById('unsigned').style.display = 'none'

        window.setTimeout(function() {
            document.getElementById('loader').classList.add('animated')
            document.getElementById('loader').classList.add('fadeOut')
            document.getElementById('rocket').classList.add('animated')
            document.getElementById('rocket').classList.add('fadeOutUpBig')
            window.setTimeout(function() {
                $('#loader').remove()
            }, 500)
        }, 1000)

    } else {
        document.getElementById('name1').style.display = 'none'
        document.getElementById('pfp1').style.display = 'none'
        document.getElementById('thebutton').style.display = 'inline-block'
        document.getElementById('thebutton').innerHTML = "Sign In / Sign Up"
        document.getElementById('thebutton').onclick = function() {
            $('#signmodal').modal('toggle')
        }
        document.getElementById('signed').style.display = 'none'
        document.getElementById('unsigned').style.display = 'block'

        window.setTimeout(function() {
            document.getElementById('rocket').classList.add('animated')
            document.getElementById('dynamicstyle1').innerHTML = ''
            document.getElementById('rocket').classList.add('fadeOutUpBig')
            window.setTimeout(function() {
                document.getElementById('loader').classList.add('animated')
                document.getElementById('loader').classList.add('fadeOut')
                window.setTimeout(function() {
                    $('#loader').remove()
                }, 500) 
            }, 1000)
        }, 1000)

        
        

    }
});

