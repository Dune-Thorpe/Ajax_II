// stores the reference to the XMLHttpRequest object
const xmlHttp = createXmlHttpRequestObject();

// retrieves the XMLHttpRequest object
function createXmlHttpRequestObject() {
    // stores the reference to the XMLHttpRequest object
    let xmlHttp;
    try {
        xmlHttp = new XMLHttpRequest();
    }
    catch (e) {
        xmlHttp = false;
    }
    // return the created object or return an error message
    if (!xmlHttp)
        alert("Error creating the XMLHttpRequest object.");
    else
        return xmlHttp;
}
// make asynchronous HTTP request using the XMLHttpRequest object
function process() {
    // proceed on if the xmlHttp object isn't busy
    if (xmlHttp.readyState == 4 || xmlHttp.readyState == 0) {
        // retrieve the nae typed by the user on the form
        let name = encodeURIComponent(document.getElementById("myName").value);
        // execute the quickstart.php page from the server
        xmlHttp.open("GET", "quickstart.php?name=" + name,true);
        // define the method to handle server responses
        xmlHttp.onreadystatechange = handleServerResponse;
        // make the server request
        xmlHttp.send(null);
    }
    else
        // if the connection is busy, try again after 1 second
        setTimeout('process()',1000);
}
// callback function executed when a message is received from the server
function handleServerResponse() {
    // move forward only if the transaction has completed successfully
    if (xmlHttp.readyState == 4) {
        // status of 200 indicates the transaction completed successfully
        if (xmlHttp.status == 200) {
            // extract the XML retrieved from the server
            xmlResponse = xmlHttp.responseXML;
            // obtain the document element (the root element) of the XML structure
            xmlDocumentElement = xmlResponse.documentElement;
            // get the text messega, which is the first child of the document element
            helloMessage = xmlDocumentElement.firstChild.data;
            // display the data received froma the server
            document.getElementById("divMessage").innerHTML = '<i>' + helloMessage + '</i>';
            // restart sequence
            setTimeout('process()',1000);
        }
        // a HTTP status different than 200 signals an error
        else {
            alert("There was a proble accessing the server: " + xmlHttp.statusText);
        }
    }
}