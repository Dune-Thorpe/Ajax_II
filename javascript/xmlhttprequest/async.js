// Creates an instance of the XMLHttpRequest object
const xmlHttp = createXmlHttpRequestObject();

function createXmlHttpRequestObject() {
    let xmlHttp;
    try {
       return xmlHttp = new XMLHttpRequest();
    } catch(e) {
        alert (`Error creating the XMLHttpRequest object. ${e.toString()}`);
    } 
       
    
}

function process() {
    if (xmlHttp) {
        try {
            xmlHttp.open("GET","async.txt",true);
            xmlHttp.onreadystatechange = handleRequestStateChange;
            xmlHttp.send(null);
            document.body.style.cursor = "wait";
        } catch(e) {
            alert(`Can't connect to the server: ${e.toString()}`);
            document.body.style.cursor = "default";
        }
    }
}

function handleRequestStateChange() {
    const myDiv = document.getElementById("myDivElement");
    if (xmlHttp.readyState == 1) {
        myDiv.innerHTML += `Request status: 1 (loading)<br>`;
    } else if (xmlHttp.readyState == 2) {
        myDiv.innerHTML += `Request Status: 2 (loaded)<br>.`;
    } else if (xmlHttp.readyState == 3) {
        myDiv.innerHTML += `Request Status: 3 (interactive)<br>`;
    } else if ( xmlHttp.readyState == 4) {
        document.body.style.cursor = "default";
        if (xmlHttp.status == 200) {
            try {
                const response = xmlHttp.responseText;
                myDiv.innerHTML += `Request status: 4 (complete).<br><br> Server said: ${response}`
            } catch (e) {
                alert (`Error reading the response: ${e.toString()}`);
            }
        } else {
            alert (`There was a problem retrieving the data: Status-Text:${xmlHttp.statusText},Status:${xmlHttp.status}`);
            document.body.style.cursor = "default";
        }
    }
}