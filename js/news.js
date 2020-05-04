db = firebase.firestore()

function check() {
 
    db.collection('app').doc("events").get().then(function(doc) {

        
        firebasedate = doc.data().news.toDate()
        currentdate = new Date()

        var diffMinutes = parseInt((currentdate - firebasedate) / (1000 * 60), 10); 
        console.log(diffMinutes);

        if (diffMinutes > 15) {

            $.getJSON( "https://newsapi.org/v2/top-headlines?q=covid&apiKey=33209c657ff84ba7bd8278680ffba1c0", function( json ) {
            NEWS = json
            buildNews(NEWS)

            db.collection("app").doc('events').update({
                newscache: NEWS,
                news: currentdate
            })

            });

        }
        else {
            // USE CACHED NEWS
            db.collection("app").doc('events').get().then(function(doc) {
                NEWS = doc.data().newscache
                buildNews(NEWS)
            })
        }    
        
    })
}

function buildNews(NEWS) {
    

        for (let i = 0; i < NEWS.articles.length; i++) {

            article = NEWS.articles[i];

            

            e = document.createElement('div')
            e.classList.add('card')
            e.classList.add('card-body')
            e.classList.add('newscard')

            viewFunc = "viewArticle('" + i + "')"
            e.innerHTML = '<h4>' + article.title + '</h4> <button onclick="' + viewFunc + '" class="eon-text">More Info</button>'




            document.getElementById('news').appendChild(e)                    
            document.getElementById('news').appendChild(document.createElement("br"))                    

            if (i == NEWS.articles.length) {
                // LOOP FINISHED
                addWaves()
            }

        }
        addWaves()
    
}

function viewArticle(num) {

    $('#newsmodal').modal('toggle')

    document.getElementById('newstitle').innerHTML = NEWS.articles[num].title
    document.getElementById('newscontent').innerHTML = NEWS.articles[num].content
    document.getElementById('newsdate').innerHTML = NEWS.articles[num].publishedAt
    document.getElementById('newsauthor').innerHTML = NEWS.articles[num].author
    document.getElementById('newsdescription').innerHTML = NEWS.articles[num].description
    document.getElementById('newsbanner').src = NEWS.articles[num].urlToImage
    document.getElementById('newsbutton').onclick = function() {
        window.open(NEWS.articles[num].url)
    }
    
}

function closenews() {
    $('#newsmodal').modal('toggle')
}