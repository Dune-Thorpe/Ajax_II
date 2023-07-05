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
            xmlHttp.open("GET","books.txt",true);
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
    const jsonResponse = eval ('(' + xmlHttp.responseText + ')');

    let html = "";
    try {
        for (let i = 0; jsonResponse.books.length; i++) {
            html += "<b>Title</b>:" + jsonResponse.books[i].title + ",<b>Author</b>: " + jsonResponse.books[i].author + ",<b>ISBN</b>: " + jsonResponse.books[i].isbn + "<br><br>";
            const myDiv = document.getElementById("myDivElement");
            myDiv.innerHTML = "<p>Server says: </p>" + html;
        }
    } catch(e)
        {};
   
}


