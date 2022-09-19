const form = document.querySelector('form');
form.onsubmit = withFormElements;

function withFormElements(e) {
    e.preventDefault();
    const elements = form.elements;
    const obj = {};
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].tagName === 'option') {
            obj[elements[i].name] = elements[i].value
        }
    }
    console.log(obj);
}
