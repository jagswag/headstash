document.getElementById("myForm").addEventListener("submit", storeBud);
document.getElementById("myForm").addEventListener("submit", clearui);

function storeBud(e) {
    var lscount = localStorage.length
    //Get length of local storage
    var Date = document.getElementById("date").value;
    //Read all elements on UI using class name
    //myBud.Date = inputs[0].value;
    //myBud.Id = inputs[0].value;
    var Strain = document.getElementById("strain").value;
    var Weight = document.getElementById("weight").value;
    var Price = document.getElementById("price").value;
    var Brand = document.getElementById("brand").value;
    var Form = document.getElementById("form").value;
    var Type = document.getElementById("type").value;
    var Affects = document.getElementById("affects").value;
    //Set your fire bud
    var myBud = {
        purchase_date: Date,
        strain: Strain,
        weight: Weight,
        price: Price,
        brand: Brand,
        form: Form,
        type: Type,
        affects: Affects
    }
    console.log(myBud)


    if (localStorage.getItem("myBuds") === null) {
        //mybud array initialization
        var myBuds = [];
        //add to mybud array
        myBuds.push(myBud);
        //set to local storage
        localStorage.setItem("myBuds", JSON.stringify(myBuds));
    } else {
        //get myBuds from local storage
        var myBuds = JSON.parse(localStorage.getItem("myBuds"));
        //add myBud to array
        myBuds.push(myBud);
        //reset to local storage
        localStorage.setItem("myBuds", JSON.stringify(myBuds));
    }


    //refetch buds
    fetchBuds();

    //prevent form from submitting
    e.preventDefault();
}

function deleteBud(strain) {
    var myBuds = JSON.parse(localStorage.getItem("myBuds"));
    for (var i = 0; i < myBuds.length; i++) {
        if (myBuds[i].strain == strain) {
            myBuds.splice(i, 1);
        }
    }
    localStorage.setItem("myBuds", JSON.stringify(myBuds));
    //refetch buds
    fetchBuds();
}

function fetchBuds() {
    var myBuds = JSON.parse(localStorage.getItem("myBuds"));
    var cardbody = document.getElementById("cardbody");
    //set html object
    cardbody.innerHTML = "";

    for (var i = 0; i < myBuds.length; i++) {
        var Date = myBuds[i].purchase_date;
        var Strain = myBuds[i].strain;
        var Weight = myBuds[i].weight;
        var Price = myBuds[i].price;
        var Brand = myBuds[i].brand;
        var Form = myBuds[i].form;
        var Type = myBuds[i].type;
        var Affects = myBuds[i].affects;

        //cardbody.innerHTML += "<div class='column'>";
        //cardbody.innerHTML += "<div class='card'>";
        //cardbody.innerHTML += "<h2 class='card-title'>" + Strain + "</h2>";
        //cardbody.innerHTML += "<strong>Form</strong><br/><p>" + Form + "</h2>";
        //cardbody.innerHTML += "<strong>Type</strong><br/><p>" + Type + "</p>";
        //cardbody.innerHTML += "<strong>Weight</strong><br/><p>" + Weight + "</p>";
        //cardbody.innerHTML += "<strong>Purchase Date</strong><br/><p>" + Date + "</p>";
        //cardbody.innerHTML += "<strong>Affects</strong><br/><p>" + Affects + "</p>";
        //cardbody.innerHTML += "<a onClick='deleteBud(\"" + Strain + "\")' class='btn btn-danger'  href='#'>Delete</a>"
        //cardbody.innerHTML += "</div>";
        //cardbody.innerHTML += "</div>";


        cardbody.innerHTML += "<div class='column'>" +
            "<div class='card'>" +
            "<h2 class='card-title'>" + Strain + "</h2>" +
            "<strong>Form</strong><br/><p>" + Form + "</p>" +
            "<strong>Type</strong><br/><p>" + Type + "</p>" +
            "<strong>Weight</strong><br/><p>" + Weight + "</p>" +
            "<strong>Price</strong><br/><p>" + Price + "</p>" +
            "<strong>Brand</strong><br/><p>" + Brand + "</p>" +
            "<strong>Purchase Date</strong><br/><p>" + Date + "</p>" +
            "<strong>Affects</strong><br/><p>" + Affects + "</p>" +
            "<a onClick='deleteBud(\"" + Strain + "\")' class='btn btn-danger'  href='#'>Delete</a>" +
            "</div>" +
            "</div>";
    }
}

function clearui() {
    var inputs = document.getElementById("myForm")
    for (var i = 1; i < inputs.length; i++) {
        inputs[i].value = "";
    }
}

//
window.onload = function () {
    //Save object into the localstorage
    //document.getElementById("myForm").addEventListener("submit", storeBud);
    //Clear UI elements after submitting
    //  var submit = document.getElementById('submit');
    //submit.addEventListener('click', clearui);
    fetchBuds();
};