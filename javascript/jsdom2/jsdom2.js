function process() {
    // create the <p> element
    const oP = document.createElement("p");
    // create the "Hello..." text node
    const oHelloText = document.createTextNode("Hey Dude! Here's a cool list colours for you:");
    // add the text node as a child element of <p>
    oP.appendChild(oHelloText);

    // create the <ul> element
    const oUl = document.createElement("ul")

    // create the first <li> element and add a text node to it
    const oLiBlack = document.createElement("li");
    const oBlack = document.createTextNode("Black");
    oLiBlack.appendChild(oBlack);

    // create the second <li> element and add a text node to it
    const oLiOrange = document.createElement("li");
    const oOrange = document.createTextNode("Orange");
    oLiOrange.appendChild(oOrange);

    // create the third <li> element and add text node to it
    const oLiPink = document.createElement("li");
    const oPink = document.createTextNode("Pink");
    oLiPink.appendChild(oPink);

    // add the <li> elements as children to the <ul> element
    oUl.appendChild(oLiBlack);
    oUl.appendChild(oLiOrange);
    oUl.appendChild(oLiPink);

    // obtain a reference to the <div> element on the page
    const myDiv = document.getElementById("myDivElement");

    // add content to the <div> element
    myDiv.appendChild(oHelloText);
    myDiv.appendChild(oUl);
}