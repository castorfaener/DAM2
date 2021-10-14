let N = 20;
let M;

let st="*";

console.log("Triangulo inferior con N=" + N);

    
    

    
    for(var i=N;i>0;i--){
        st="*";

        for(var j=0;j<i;j++){
            st="*" + st;
            
        }
        console.log(st);
    }
    
    

