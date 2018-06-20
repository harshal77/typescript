var iRow:number = 6;
var iColoumn:number = iRow*2 +1;
var i:number = 1;
var j:number = 1;
var K:number = 0;
var sPrint:String = "";
for(i=1;i<=iRow;i++)
{
    sPrint = "";
        K=1
      for(j=1;j<=iColoumn;j++){
         if(j>=i && j<=iRow*2-i&&K){
            sPrint=sPrint+"*";
                K=0;
         }
        else{
            sPrint=sPrint+" ";
            K=1;
        }
    }      
        console.log(sPrint);
 }
