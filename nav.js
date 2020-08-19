 
 var clicked= false;
 function rajesh(){
var icon = document.querySelector("#toggleicn");
var menue = document.querySelector(".menue");
menue.classList.toggle("active");
var banner = document.querySelector(".banner");
banner.classList.toggle("left_banner");

if( clicked ==false)
{
    clicked =true;
    icon.classList.add("fa-times");
    icon.classList.remove("fa-bars");

     
}
else{
    clicked =false;
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
    


}







 }
