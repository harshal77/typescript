var iRow:number = 5;
var iColoumn:number = iRow;
var i:number = 0;
var j:number = 0;
var sPrint:String = "";
for(i=0;i<iRow;i++)
{
    sPrint = "";
      for(j=0;j<iColoumn;j++)
        sPrint=sPrint+"*"
        console.log(sPrint);
        iColoumn--;
 }
