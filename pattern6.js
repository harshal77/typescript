var iRow = 8;
var iColoumn = iRow;
var i = 1;
var j = 1;
var K = 0;
var L = 0;
var sPrint = "";
for (i = 1; i <= iRow; i++) {
    if (i <= (iRow + 1) / 2)
        K++;
    else
        K--;
    sPrint = "";
    L = 1;
    for (j = 1; j <= iColoumn; j++) {
        if (j >= (iRow + 1) / 2 + 1 - K && j <= (iRow / 2) + K && L) {
            sPrint = sPrint + "*";
            L = 0;
        }
        else {
            sPrint = sPrint + " ";
            L = 1;
        }
    }
    console.log(sPrint);
}
