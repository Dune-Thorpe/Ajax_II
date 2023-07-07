const xmlHttp = createXmlHttpRequestObject();

function createXmlHttpRequestObject() {
    let xmlHttp;
    try {
        return xmlHttp = new XMLHttpRequest();
    }
    catch(e)
    {
        alert(`Error creating Object: ${e.toString()}`);
    }
}

function process() {
    if (!xmlHttp) {
        alert( `Cannot access the server`)
    } try {
        let firstNumber = document.getElementById("firstNumber").value;
        let secondNumber = document.getElementById("secondNumber").value;

        let params = "firstNumber=" + firstNumber + "&secondNumber=" + secondNumber;
        xmlHttp.open("GET","divide.php?"+params, true);
        xmlHttp.onreadystatechange = handleRequestStateChange;
        xmlHttp.send(null);
    }
    catch(e)
    {
        alert(`Cannot connect to the server: ${e.toString()}`);
    }
}

function handleRequestStateChange()
{
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) 
        try
        {
            handleServerResponse();
        }
        catch(e) 
        {
            alert(`Error reading the response: ${e.toString()}`);
        }
}

function handleServerResponse() {
    const xmlResponse = xmlHttp.responseXML;
    
    if (!xmlResponse || !xmlResponse.documentElement)
        throw(`Invalid XML structure: ${xmlHttp.responseText}`);
        let rootNodeName = xmlResponse.documentElement.nodeName;
        if (rootNodeName == "parsererror")
            throw(`Invalid XML structure: ${xmlHttp.responseText}`);
            xmlRoot = xmlResponse.documentElement;
            if (rootNodeName != "response" || !xmlRoot.firstChild)
            throw(`Invalid XML structure: ${xmlHttp.responseText}`)
             let responseText = xmlRoot.firstChild.data;

             const myDiv = document.getElementById("myDivElement");
             myDiv.innerHTML = `Server says the answer is: ${responseText}`;
}