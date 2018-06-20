var iRow:number = 9;
var iColoumn:number = (iRow+1)/2;
var i:number = 1;
var j:number = 1;
var K:number = 0;
var sPrint:String = "";
for(i=1;i<=iRow;i++)
{
    if(i<=(iRow+1)/2)
        K++;
    else    
        K--;
    sPrint = "";
      for(j=1;j<=iColoumn;j++){
         if(j<=K){
            sPrint=sPrint+"*";
         }
        else{
            sPrint=sPrint+" ";
            
        }
    }      
        console.log(sPrint);
 }