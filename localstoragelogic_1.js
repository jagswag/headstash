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
                var render = "<table><thead>";
                render += "<tr><th>Date</th><th>Strain</th><th>Weight</th><th>Type</th><th>Affects</th></tr>";
                for (i = 0; i < datacount; i++) {
                    var key = localStorage.key(i);
                    var bud = localStorage.getItem(key);
                    var data = JSON.parse(bud);
                    render += "<tr><td>" + data.Date + " </td>";
                    render += "<td>" + data.Strain + "</td>";
                    render += "<td>" + data.Weight + "</td>";
                    render += "<td>" + data.Type + "</td>";
                    render += "<td>" + data.Affects + "</td></tr>";
                }
                render += "</thead></table>";
                dvcontainer.innerHTML = render;
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
        }
    };


    //Clear all UI Elements
    //var btnclear = document.getElementById('btnclear');
    //btnclear.addEventListener('click', applogic.clearuielements, false);

    //Clear LocalStorage
    //var btnclearstorage = document.getElementById('btnclearstorage');
    //btnclearstorage.addEventListener('click', applogic.clearstorage, false);

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
//