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
            xmlHttp.open("GET","phptest.php",true);
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
    const responseJSON = JSON.parse(xmlHttp.responseText);

    let html = " ";
    //for (let i = 0; responseJSON.books.length; i++) {
        

       
        responseJSON.books.forEach(element => {
            
        html += "<b>Title:</b>" + responseJSON.books[i].title + ", <b>Author</b>:" + responseJSON.books[i].author  +",<b>ISBN</b>: "+responseJSON.books[i].isbn  + "<br>"});
        const myDiv = document.getElementById("myDivElement");
        myDiv.innerHTML = "<p>Server says: </p>" + html; )
       
   // }
}


