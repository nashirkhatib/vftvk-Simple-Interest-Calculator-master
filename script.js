function check()               /*this function will keep focus
                                on principal input filed*/
{      
     document.getElementById("principal").focus();
   
}
function validate()           /*to validate principal input filed value*/
{ 
  p = document.getElementById("principal").value;
   if(parseInt(p)<=0)
   {
     alert("Enter a positive number");
     document.getElementById("principal").focus();
   }
}
function compute()               /* this function will calculate actaul
                                 interest and    dispaly final output */
{
    p = document.getElementById("principal").value;
 
    if(parseInt(p)>0 )          /*this condition will again validate 
                                principal input field after clicking on calculate interest button. */
    {
    r=document.getElementById("rate").value;   
    y=document.getElementById("years").value; 
    i=parseInt(p)*parseInt(r)*parseInt(y)/100;
    total = parseInt(p)+i;
    var d = new Date();
    var n = d.getFullYear();
    years=n+parseInt(y);
    str="<br/> If you deposit <span style='background-color:yellow;'>"+p+"</span>";
    str=str+"<br/> at an interset rate of <span style='background-color:yellow;'>"+r+"%.</span>";
    str=str+"<br/> you will receive amount of <span style='background-color:yellow;'>"+total+",</span>";
    str=str+"<br/> in the year <span style='background-color:yellow;'>"+years+"</span>";

    document.getElementById("result").innerHTML=str; 
    }
    else                  /*if this conditon gets failed, this case
                           will move focus to principal amount input field and alert a message though else condition */
    {
      alert("Enter a positive number");
     document.getElementById("principal").focus();
    }
}




function rangeShow()      /*this functio has been used to show interest
                           rate sliders value in the form itself */
 {
    var slider = document.getElementById("rate").value;
    document.getElementById("rval").innerHTML=slider+"%";
}        