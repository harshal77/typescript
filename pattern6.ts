var iRow:number = 8;
var iColoumn:number = iRow;
var i:number = 1;
var j:number = 1;
var K:number = 0;
var L:number = 0;
var sPrint:String = "";
for(i=1;i<=iRow;i++)
{
    if(i<=(iRow+1)/2)
        K++;
    else    
        K--;
    sPrint = "";
    L=1
      for(j=1;j<=iColoumn;j++){
         if(j>=(iRow+1)/2+1-K && j<=(iRow/2)+K && L){
            sPrint=sPrint+"*";
            L=0;
         }
        else{
            sPrint=sPrint+" ";
            L=1;
        }
    }      
        console.log(sPrint);
 }