let slide =0;
function controller(x){
 slide=slide+x;
 slideItems(slide);   
}
slideItems(slide);
function slideItems(receive){
 let slideItems =document.getElementsByClassName('div2');   

if (receive==slideItems.length){
slide=0;
receive=0;
}
if (receive<0){
 slide=slideItems.length-1;
 receive=slideItems.length-1;   
}
for(let y of slideItems){
 y.style.display="none";   
}
slideItems[receive].style.display= "block";
}