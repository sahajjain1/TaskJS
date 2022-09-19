function myfunction() {
    const x = document.getElementById("books").value;
    let con = ['content of book1 = xyzzzzzzzzzzzzzzzzzzzzzzz', 'content of book2 = zzzzzzzzzzzzzzzzzzzzzzzz', 'content of book3 = yayayayayya', 'content of book4 = sanaunasuna', 'content of book5 = sdsjsaiaiaii']
    document.getElementById("showHere").innerHTML = (con[x])
}