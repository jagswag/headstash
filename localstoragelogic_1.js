(function () {
    var myBud = {}

    if (localStorage.getItem('myBud')) {
        myBud = JSON.parse(localStorage.getItem('myBud'))
    };

    var applogic = {
        clearuielements: function () {
            var inputs = document.getElementsByClassName("c1");
            for (i = 0; i < inputs.length; i++) {
                inputs[i].value = "";
            }
        },

        saveitem: function (e) {
            e.preventDefault()
            //Get length of local storage
            var lscount = localStorage.length
            //Read all elements on UI using class name
            var inputs = document.getElementsByClassName("c1");
            //myBud.Id = inputs[0].value;
            myBud.Date = inputs[0].value;
            myBud.Strain = inputs[1].value;
            myBud.Weight = inputs[2].value;
            myBud.Type = inputs[3].value;
            myBud.Affects = inputs[4].value;
            console.log(myBud);
            localStorage.setItem("myBud_" + lscount, JSON.stringify(myBud));
            applogic.loaddata();
        },
        loaddata: function () {
            var datacount = localStorage.length;
            if (datacount > 0) {
                var render = ""
                //var render = "<table><thead>";
                //render += "<tr><th>Date</th><th>Strain</th><th>Weight</th><th>Type</th><th>Affects</th></tr>";
                for (i = 0; i < datacount; i++) {
                    var key = localStorage.key(i);
                    var bud = localStorage.getItem(key);
                    var data = JSON.parse(bud);
                    render += "<div class='column'>";
                    render += "<div class='card'>";
                    render += "<h2 class='card-title'>" + data.Strain + "</h2>";
                    render += "<strong>Type</strong><br/><p>" + data.Type + "</p>";
                    render += "<strong>Weight</strong><br/><p>" + data.Weight + "</p>";
                    render += "<strong>Purchase Date</strong><br/><p>" + data.Date + "</p>";
                    render += "<strong>Affects</strong><br/><p>" + data.Affects + "</p>";
                    render += '<button type="submit" class="clear" id="btnclearstorage">Clear</button>'
                    render += "</div>";
                    render += "</div>";
                }
                cardbody.innerHTML = render;
            }
        },

        clearstorage: function () {
            var storagecount = localStorage.length;
            if (storagecount > 0) {
                for (i = 0; i < storagecount; i++) {
                    localStorage.clear();
                }
            }
            applogic.loaddata();
        }//,

        //removecard: function (cardId) {
        //    var cardElement = localStorage.key()
        //    var cardElement = document.getElementById(cardId);
        //    cardElement.parentNode.removeChild(cardElement);
        //}
    };


    //Clear all UI Elements
    //var btnclear = document.getElementById('btnclear');
    //btnclear.addEventListener('click', applogic.clearuielements, false);


    //On Load of window load data from local storage
    window.onload = function () {
        //Save object into the localstorage
        var submit = document.getElementsByClassName('submit');
        submit[0].addEventListener('click', applogic.saveitem);
        applogic.loaddata();
    };

})();

//What I was doing wrong
// I was using  the myBud object as an array but treating it like an obejct
// Javascript needs to load ALL html documents first, so need to include the eventlisteners AFTER everything has been loaded (inside .onload)
// Instead of looping through arrays in getellemt by class, you can get element by ID, and set variables containinig the values.