function process() {
    // create the HTML code
    const string = "<ul>"
                + "<li>Black</li>"
                + "<li>Orange</li>"
                + "<li>Pink</li>"
                + "</ul>";
    // obtain a reference to the <div> element on the page
    const myDiv = document.getElementById("myDivElement");
    // add content to the <div> element
    myDiv.innerHTML = string;
}