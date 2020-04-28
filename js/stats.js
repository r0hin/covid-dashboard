var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://covid-193.p.rapidapi.com/statistics",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-193.p.rapidapi.com",
		"x-rapidapi-key": "f25776e273mshdeac69e2098339fp19fd7bjsne2f245613497"
	}
}

$.ajax(settings).done(function (response) {

    for (let i = 0; i < response.response.length; i++) {
        const element = response.response[i];

        a = document.createElement('a')
        a.classList.add('list-group-item')
        a.classList.add('flex-column')
        a.classList.add('animated')
        a.classList.add('fadeInUp')
        a.classList.add('align-items-start')

        if (element.deaths.new == null) {
            element.deaths.new = '+0'
        }
        if (element.cases.new == null) {
            element.cases.new = '+0'
        }

        favFunc = "star('" + element.country + "')"
        a.innerHTML = '<div class="d-flex w-100 justify-content-between">         <h5 class="mb-1"><b>' + element.country + '</b></h5>   <small>Updated on ' + element.day + '.</small>       </div>       <center>           <br>       <div class="row">           <div style="color: yellow" class="col-sm">               <h3 class="leadnum">' + element.cases.active + '</h3>               <p>Cases</p><h4>' + element.cases.new + '</h4>           </div>           <div style="color: lime;" class="col-sm">             <h3 class="leadnum">' + element.cases.recovered + '</h3>              <p>Recovered</p>      <button onclick="' + favFunc + '" class="eon-text"><i class="material-icons-round">star</i></button>    </div>         <div style="color: rgb(255, 96, 96);" class="col-sm">             <h3 class="leadnum">' + element.deaths.total + '</h3>   <p>Deaths</p> <h4>' + element.deaths.new + '</h4></div> </div></center>'
        document.getElementById('countries').appendChild(a)


    }
    addWaves()
});


function star() {

    if (user) {

    }
    else {
        Snackbar.show({text: 'Create an account or sign in to use this feature.'})
    }


}