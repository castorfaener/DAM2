let N = 20;

let st;

console.log("Diagonal inversa con N=" + N);
for(var i = N; i>0; i--){
    st="*";
    for(var j=0;j<i;j++){
        st=" " + st;
    }
    console.log(st);
}


