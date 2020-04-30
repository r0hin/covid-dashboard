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

// kc ku

$.ajax(settings).done(function (response) {

//     let data = { "2010-01": { "item1": 324, "item2": 1075, "item3": 940, "item4": 441, "item5": 1040, "item6": 898, "item7": 1343 }, "2011-02": { "item1": 295, "item2": 958, "item3": 904, "item4": 434, "item5": 1038, "item6": 793, "item7": 1246 }, "2012-03": { "item1": 314, "item2": 1062, "item3": 980, "item4": 494, "item5": 1158, "item6": 914, "item7": 1461 }, "2008-04": { "item1": 336, "item2": 1022, "item3": 987, "item4": 488, "item5": 1014, "item6": 792, "item7": 1382 }, "2007-05": { "item1": 332, "item2": 1073, "item3": 1002, "item4": 512, "item5": 1104, "item6": 840, "item7": 1368 }, "2005-06": { "item1": 311, "item2": 981, "item3": 837, "item4": 432, "item5": 1002, "item6": 801, "item7": 1265 }, "2014-07": { "item1": 321, "item2": 1049, "item3": 921, "item4": 489, "item5": 963, "item6": 881, "item7": 1340 }, "2015-08": { "item1": 294, "item2": 1071, "item3": 960, "item4": 506, "item5": 910, "item6": 885, "item7": 1312 }, "2016-09": { "item1": 281, "item2": 1020, "item3": 952, "item4": 502, "item5": 1068, "item6": 914, "item7": 1397 }, "2009-10": { "item1": 319, "item2": 1058, "item3": 985, "item4": 546, "item5": 1184, "item6": 1031, "item7": 1448 }, "2005-11": { "item1": 300, "item2": 1021, "item3": 967, "item4": 474, "item5": 1176, "item6": 1009, "item7": 1387 }, "2017-12": { "item1": 307, "item2": 1027, "item3": 924, "item4": 427, "item5": 1024, "item6": 844, "item7": 1300 } };
// // ----------------
// let byThis = 'cases.value';
// let compare = (k, kk) => response[k][byThis] - response[kk][byThis];

// let sorted = Object.keys(data).sort(compare).reduce((a, d) => ({ ...a, ...{ [d]: data[d] } }), {});

// console.log(sorted);

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
        a.innerHTML = '<div class="d-flex w-100 justify-content-between">         <h5 class="mb-1"><b>' + element.country + '</b></h5>   <small>Updated on ' + element.day + '.</small>       </div>       <center>           <br>       <div class="row">           <div style="color: yellow" class="col-sm">               <h3 class="leadnum">' + element.cases.active + '</h3>               <p>Active Cases</p><h4>' + element.cases.new + '</h4>           </div>           <div style="color: lime;" class="col-sm">             <h3 class="leadnum">' + element.cases.recovered + '</h3>              <p>Recovered</p>      <button onclick="' + favFunc + '" class="eon-text"><i class="material-icons-round">star</i></button>    </div>         <div style="color: rgb(255, 96, 96);" class="col-sm">             <h3 class="leadnum">' + element.deaths.total + '</h3>   <p>Deaths</p> <h4>' + element.deaths.new + '</h4></div> </div></center>'
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