const xmlHttp = createXmlRequestObject();

function createXmlRequestObject() {
    let xmlHttp;
    try {
         return new XMLHttpRequest();
    } catch(e){
        alert (`Error creating the XMLHttpRequest object: ${e.toString()}`);
    }
}

function process() {
    if (!xmlHttp) {
        alert (`Can't connect to the server: ${e.toString()}`)
    } else {
        try {
            xmlHttp.open("GET","books.xml",true);
            xmlHttp.onreadystatechange = handleRequestStateChange;
            xmlHttp.send(null);
        } catch(e) {
            alert (`Error retrieving data:Status-Text:${xmlHttp.statusText},Status:${xmlHttp.status}`);
        }
    }
}

function handleRequestStateChange() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        try {
            handleServerResponse();
        } catch(e) {
            alert (`Error reading the response: ${e.toString()}`);
        }
    }
}

function handleServerResponse() {
    const xmlResponse = xmlHttp.responseXML;
    const xmlRoot = xmlResponse.documentElement;
    const titleArray = xmlRoot.getElementsByTagName("title");
    const authorArray = xmlRoot.getElementsByTagName("author");
    const isbnArray = xmlRoot.getElementsByTagName("isbn");

    let html = "";
    for (let i = 0; titleArray.length; i++) {
        html += titleArray.item(i).firstChild.data + ", " + authorArray.item(i).firstChild.data +", "+isbnArray.item(i).firstChild.data + "<br>"
        const myDiv = document.getElementById("myDivElement");
        myDiv.innerHTML = "<p>Server says: </p>" + html;
    }
}


