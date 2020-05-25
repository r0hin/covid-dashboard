$(window).ready(function () {

    sessionStorage.setItem('first-time-home', 'true')
    sessionStorage.setItem('first-time-data', 'true')
    // ADD THIS FOR EACH TAB ADDED 👀

    var urlParams = new URLSearchParams(window.location.search);
    tab = urlParams.get('tab')

    if (tab == null || tab == undefined) {

        urlParams = new URLSearchParams(window.location.search);
        sessionStorage.setItem('viewPost', urlParams.get('post'))
        sessionStorage.setItem('viewInfo', urlParams.get('info'))
        sessionStorage.setItem('fullInfo', urlParams.get('fullscreen'))
        sessionStorage.setItem('viewUser', urlParams.get('user'))
        document.getElementById('home-tab').click()
        checkUrls()
        
    }
    else {
        $('#' + tab + '-tab').tab('show');
        tabe(tab)
    }

})

function tabe(tab) {
    //sessionStorage.setItem("currentviewingdm", 'not')
    //unshowdm()

    sessionStorage.setItem("currentab", tab)
    $('#justifiedTab').children('a').each(function () { this.classList.remove('navthing'); })
    $('.iconactive').each(function(i, obj) {
        obj.classList.remove('iconactive')
    })
    $('#justifiedTab').children('h4').each(function () { this.classList.remove('navbarbuttontextactive'); })
    document.getElementById(tab + '-tab').classList.add('navthing')
    document.getElementById(tab + '-icon').classList.add('iconactive')


    Waves.ripple('#' + tab + '-tab');
    history.pushState(null, '', '/new.html?tab=' + tab);

    val = sessionStorage.getItem('first-time-' + tab)
    if (val == 'true') {
        sessionStorage.setItem('first-time-' + tab, 'false')

        switch (tab) {
            case "home":
                // Load home stuff
                break;
            case "data":
                // Load data stuff
                break;
            case "map":
                // Load map stuff
                break;
            case "news":
                // Load news stuff
                break;
            case "list":
                // Load list stuff
                break;
            case "info":
                // Load info stuff
                break;

            default:
                break;
        }
    }
}

function openNav() {
    document.getElementById("overlaychat").style.width = "280px";
    document.getElementById("overlaychat").classList.add('overlaypadding')
    document.getElementById("tabs").style.marginRight = "280px";
    document.getElementById('chatbtnicon').innerHTML = 'keyboard_arrow_right'
    document.getElementById('chatbtn').classList.add('chatbtnactive')
    document.getElementById('chatbtn').onclick = function() {
        closeNav()
    }
  }
  
  function closeNav() {
    document.getElementById("overlaychat").style.width = "0";
    document.getElementById("overlaychat").classList.remove('overlaypadding')
    document.getElementById("tabs").style.marginRight= "0";
    document.getElementById('chatbtnicon').innerHTML = 'keyboard_arrow_left'
    document.getElementById('chatbtn').classList.remove('chatbtnactive')
    document.getElementById('chatbtn').onclick = function() {
        openNav()
    }
  }