// holds the remote server address
const serverAddress = "validate.php";
// when set to true,display detailed error messages
let showErrors = true;
//the function handles the validation for any form field
function validate(inputValue,fieldId)
{
    // the data to sent to the server through POST
    let data = "validationType=ajax&inputValue=" + inputValue +
                "&fieldId=" + fieldId;
    // build the settings object for the XmlHttp object
    let settings = 
    {
        url: serverAddress,
        type: "POST",
        async: true,
        complete: function (xhr, response, status)
        {
            if (xhr.responseText.indexOf("ERRNO") >= 0
            || xhr.responseText.indexOf("error:") >= 0
            || xhr.responseText.length == 0)
            {
                alert(xhr.responseText.length == 0 ?
                    "server error." : response);
            }
            result = response.result;
            fieldId = response.fieldid;
            // find the HTML element that displays the error
            message = document.getElementById(fieldId + "Failed");
            // show the error or hide the error
            message.className = (result == "0") ? "error" : "hidden";
        },
        data: data,
        showErrors: showErrors
    };
    // make a server request to validate the input data
    let xmlHttp = new XmlHttp(settings);
}
// sets focus on the first field of the form
function setFocus()
{
    document.getElementById("txtUserName").focus();
}
window.onload = init;

function init()
{
    const txtUserName = document.getElementById('txtUserName');
    txtUserName.onblur = function() {validate( this.value,this.id);};

    const txtName = document.getElementById('txtName');
    txtName.onblur = function() {validate( this.value,this.id);};

    const selGender = document.getElementById('selGender');
    selGender.onblur = function() {validate( this.value,this.id);};

    const txtBthYear = document.getElementById('txtBthYear');
    txtBthYear.onblur=function()
    {
        const selBthMonth = document.getElementById('selBthMonth');
        validate(selBthMonth.options[selBthMonth.selectedIndex].value +
            '#' + document.getElementById('txtBthDay').value + '#' + this.value,this.id);
    };

    const selBthMonth = document.getElementById('selBthMonth');
    selBthMonth.onblur = function() {validate( this.value,this.id);};

    const txtBthDay = document.getElementById('txtBthDay');
    txtBthDay.onblur = function() {validate( this.value,this.id);};

    const txtEmail = document.getElementById('txtEmail');
    txtEmail.onblur = function() {validate( this.value,this.id);};

    const txtPhone = document.getElementById('txtPhone');
    txtPhone.onblur = function() {validate( this.value,this.id);};

    const chkReadTerms = document.getElementById('chkReadTerms');
    chkReadTerms.onblur = function() {validate( this.value,this.id);};
}