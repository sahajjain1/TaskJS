
const parent = document.querySelector("#parent")

parent.onclick = function (e) {

    const classList = e.target.classList;
    
    if (classList.contains('box')) {
        if (!classList.contains('red') && !classList.contains('green')) {
            classList.add('red');
        }
        else if (classList.contains('red')) {
            classList.replace('red', 'green');

        }
        else if (classList.contains('green')) {
            classList.remove('green');
        }
    }
}

