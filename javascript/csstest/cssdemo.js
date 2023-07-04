// Change table style to style 1
function setStyle1() {
    // obtain references to HTML elements
    const oTable = document.getElementById("table");
    const oTableHead = document.getElementById("tableHead");
    const oTableFirstLine = document.getElementById("tableFirstLine");
    const oTableSecondLine = document.getElementById("tableSecondLine");
    const oElementArray = [oTable,oTableHead,oTableFirstLine,oTableSecondLine]
    const oValueArray = ["Table1","TableHead1","TableContet1"];
    // set styles
    
   /* function addClass(element,value) {
        if (!element.className) {
            element.className = value;
        } else {
            const newClassName = element.className;
            newClassName += " ";
            newClassName += value;
            element.className = newClassName;
        }
    }
    addClass(oTable,"Table1");
    addClass(oTableHead,"TableHead1");
    addClass(oTableFirstLine,"TableConten1");
    addClass(oTableSecondLine,"TableContent1");*/
    oTable.className = "Table1";
    oTableHead.className = "TableHead1";
    oTableFirstLine.className = "TableContent1";
    oTableSecondLine.className = "TableContent1";
}

// Change table style to style 2
function setStyle2() {
    // obtain references to HTML elements
    const oTable = document.getElementById("table");
    const oTableHead = document.getElementById("tableHead");
    const oTableFirstLine = document.getElementById("tableFirstLine");
    const oTableSecondLine = document.getElementById("tableSecondLine");
    // Set style
    oTable.className = "Table2";
    oTableHead.className = "TableHead2";
    oTableFirstLine.className = "TableContent2";
    oTableSecondLine.className = "TableContent2";
}