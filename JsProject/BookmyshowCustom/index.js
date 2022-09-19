const abc = document.getElementById("second");
const abcd = document.getElementById("third");
abc.style.display = "none";
abcd.style.display = "none";

const btnn = document.getElementById("btnn");
const bar = document.getElementById("myProgress");
bar.style.display = "none";
btnn.disabled = true;


var subjectObject = {
    "Hyderabad ": {
        "PVR": ["11:00 AM", "4:00 PM", "7:00 PM", "9:00 PM"],
        "IMAX": ["11:30 AM", "4:30 PM", "7:30 PM", "9:30 PM"],
    },
    "Secunderabad": {
        "IMAX": ["10:00 AM", "3:00 PM", "6:00 PM", "7:00 PM"],
        "INOX": ["10:30 AM", "3:30 PM", "6:30 PM", "7:30 PM"]
    }
}
window.onload = function () {
    var LocationsSel = document.getElementById("Location");
    var ThreatersSel = document.getElementById("Threaters");
    var TimesSel = document.getElementById("Time");
    for (var x in subjectObject) {
        LocationsSel.options[LocationsSel.options.length] = new Option(x, x); // first part givrs length of the opbject and 2nd part create objects
    }
    LocationsSel.onchange = function () {
        abc.style.display = "block";
        TimesSel.length = 1;
        ThreatersSel.length = 1;

        for (var y in subjectObject[this.value]) {
            ThreatersSel.options[ThreatersSel.options.length] = new Option(y, y);
        }
        btnn.disabled = true;
    }
    ThreatersSel.onchange = function () {
        abcd.style.display = "block";
        TimesSel.length = 1;

        var z = subjectObject[LocationsSel.value][this.value];
        for (var i = 0; i < z.length; i++) {
            TimesSel.options[TimesSel.options.length] = new Option(z[i], z[i]);
        }
        btnn.disabled = true;
    }
    TimesSel.onchange = function () {
        btnn.disabled = false;
    }
}


const form = document.getElementById('form');

form.addEventListener('submit', callbackFunction);

function callbackFunction(event) {
    event.preventDefault();
    const myFormData = new FormData(event.target);

    const formDataObj = {};
    myFormData.forEach((value, key) => (formDataObj[key] = value));
    console.log(formDataObj);

    // document.getElementById('out').innerHTML = formDataObj;
    let outputString = '';
    Object.keys(formDataObj).forEach(key => {
        outputString += key + ": " + formDataObj[key] + "<br>";
    });

        var i = 0;
        function move() {
            if (i == 0) {
                i = 1;
                var elem = document.getElementById("myBar");
                var width = 1;
                var id = setInterval(frame, 15);
                function frame() {
                    if (width >= 100) {
                        clearInterval(id);
                        i = 0;
                    } else {
                        width++;
                        elem.style.width = width + "%";
                    }
                }
            }
        }

        setTimeout(function(){
            $(formMessages).removeClass('container');
    }, 3000);

    setTimeout(barr, 200);
    setTimeout(myFunction,1600);
    function barr(){
    bar.style.display = "block";
    move() }

    function myFunction() {
       
        document.getElementById("out").innerHTML = outputString;
    }

}
