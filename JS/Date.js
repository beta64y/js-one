var time = new Date().getHours();
if (time > 12){
    document.body.style.backgroundColor = "yellow";
    window.alert((new Date().getHours() - 12)+"saat PM" )   
}
else{
    document.body.style.backgroundColor = "black";
    window.alert((new Date().getHours()) +"saat AM")   
}
  