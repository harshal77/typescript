var iRow = 9;
var iColoumn = (iRow + 1) / 2;
var i = 1;
var j = 1;
var K = 0;
var sPrint = "";
for (i = 1; i <= iRow; i++) {
    if (i <= (iRow + 1) / 2)
        K++;
    else
        K--;
    sPrint = "";
    for (j = 1; j <= iColoumn; j++) {
        if (j <= K) {
            sPrint = sPrint + "*";
        }
        else {
            sPrint = sPrint + " ";
        }
    }
    console.log(sPrint);
}
