var bookingObj = {
    "cities": {
        "Hyderabad": {
            "TH1": {
                "timings": ["11:00 am", "3:00 pm", "7:00 pm", "11:00 pm"]
            },
            "TH2": {
                "timings": ["11:10 am", "3:10 pm", "7:10 pm", "11:10 pm"]
            }
        },
        "Secunderabad": {
            "TS1": {
                "timings": ["11:20 am", "3:20 pm", "7:20 pm", "11:20 pm"]
            },
            "TS2": {
                "timings": ["11:30 am", "3:30 pm", "7:30 pm", "11:30 pm"]
            }
        }
    }
};
var locationSelectBox;
var threaterSelectBox;
var timeSelectBox;
var city = null;
var theatre = null;
var time = null;
var result;
var LocationUserSelected;
var threaterUserSelected;

var timeUserSelected;
var array;

document.addEventListener('DOMContentLoaded', (event) => {
    locationSelectBox = document.querySelector("#location");
    threaterSelectBox = document.querySelector("#threaters");
    timeSelectBox = document.querySelector("#time");
    buttonSubmit = document.querySelector("#submit-button");

    disableElements();
    renderLocations();
    renderTheatres();
    renderTimes();

    locationSelectBox.onchange = handleLocation;
    threaterSelectBox.onchange = handleTheatre;
    timeSelectBox.onchange = handleTime;
});

function disableElements(value) {
    var arr = [threaterSelectBox, timeSelectBox, buttonSubmit];
    var start = value ? value : 0;
    var end = arr.length;
    for (var i = start; i < end; i++) {
        arr[i].disabled = true;
    }
}

function handleLocation(e) {
    city = e.target.value;
    var cityDetails = bookingObj.cities[city];

    if (cityDetails) {
        threaterSelectBox.disabled = false;
        var theatres = Object.keys(cityDetails);
        renderTheatres(theatres);
        disableElements(1);
    }
    else {
        renderTheatres();
        disableElements();
    }
    renderTimes();
}

function handleTheatre(e) {
    theatre = e.target.value;
    var theatreDetails = bookingObj.cities[city][theatre];
    if (theatreDetails) {
        timeSelectBox.disabled = false;
        renderTimes(theatreDetails.timings);
        disableElements(2);
    }
    else {
        renderTimes();
        disableElements(1);
    }
}

function handleTime(e) {
    disableElements(2);
    renderbutton()
}
function renderLocations() {
    var locations = Object.keys(bookingObj.cities);
    var locationData = '<option value="">Select Location</option>';
    for (var i = 0; i < locations.length; i++) {
        locationData += '<option value=' + locations[i] + '>' + locations[i] + '</option>';
    }
    locationSelectBox.innerHTML = locationData;
}

function renderTheatres(arr = []) {
    var theatreData = '<option value="">Select Threater</option>';
    if (arr.length > 0) {
        for (var i = 0; i < arr.length; i++) {
            theatreData += '<option value=' + arr[i] + '>' + arr[i] + '</option>';
        }
    }
    threaterSelectBox.innerHTML = theatreData;
}

function renderTimes(arr = []) {
    var theatreData = '<option value="">Select Time</option>';
    if (arr.length > 0) {
        for (var i = 0; i < arr.length; i++) {
            theatreData += '<option value=' + arr[i] + '>' + arr[i] + '</option>';
        }
    }
    timeSelectBox.innerHTML = theatreData;
}
function renderbutton() {
    buttonSubmit.disabled = false;
    buttonSubmit.onclick = function () {
        var LocationUserSelected = locationSelectBox.value
        var threaterUserSelected = threaterSelectBox.value
        var timeUserSelected = timeSelectBox.value;
        var obj = {
            city: LocationUserSelected,
            Theatre: threaterUserSelected,
            Time: timeUserSelected
        }
        console.log(obj);
    }
}
