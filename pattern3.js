var iRow = 5;
var iColoumn = iRow * 2 + 1;
var i = 0;
var j = 0;
var K = 0;
var sPrint = "";
for (i = 1; i <= iRow; i++) {
    sPrint = "";
    K = 1;
    for (j = 1; j <= iColoumn; j++) {
        if (j >= iRow - i + 1 && j <= iRow + i - 1 && K) {
            sPrint = sPrint + "*";
            K = 0;
        }
        else {
            sPrint = sPrint + " ";
            K = 1;
        }
    }
    console.log(sPrint);
}
