db = firebase.firestore()

function check() {
 
    db.collection('app').doc("events").get().then(function(doc) {

        
        firebasedate = doc.data().news.toDate()
        currentdate = new Date()

        var diffMinutes = parseInt((currentdate - firebasedate) / (1000 * 60), 10); 
        console.log(diffMinutes);

        if (diffMinutes > 15) {

            // GET NEWS
            NEWS = {a: 'example map'}

















            db.collection("app").doc('events').update({
                newscache: NEWS,
                news: currentdate
            })

        }
        else {
            // USE CACHED NEWS

            db.collection("app").doc('events').get().then(function(doc) {
                thenews = doc.data().newscache




















                


            })
        }


        

        
    
        
        
    })
}