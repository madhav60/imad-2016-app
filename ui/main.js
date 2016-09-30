var button= document.getElementById('button');
var counter= 0;
button.onclick=fuction() ;{
    counter=counter +1;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
    
}
var request= new XMLHttp(){ 