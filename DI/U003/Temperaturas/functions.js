


let celsius=document.getElementById("celsius");
let kelvin=document.getElementById("kelvin");


document.getElementById("convert").addEventListener('click',()=>{
    
    if(celsius.value==""){
        celsius.value = parseFloat(kelvin.value)- 273.15;
    }else if(kelvin.value==""){
        kelvin.value = parseFloat(celsius.value)+ 273.15;
    }
    
    
});

document.getElementById("clean").addEventListener("click",()=>{
    celsius.value="";
    kelvin.value="";
});