var iRow = 6;
var iColoumn = iRow;
var i = 0;
var j = 0;
var sPrint = "";
for (i = 0; i < iRow; i++) {
    sPrint = "";
    for (j = 0; j < iColoumn; j++)
        if (j <= i)
            sPrint = sPrint + "*";
    console.log(sPrint);
}
