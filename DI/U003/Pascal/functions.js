let boton = document.getElementById("boton");
boton.addEventListener("click",()=>{
    let numFilas = parseInt(document.getElementById("input").value);
    

    //Creamos una matriz cuadrada segun el grado elegido para el numero de Pascal
    let m = new Array(numFilas +1);

    for(i=0;i<m.length;i++){
        m[i] = new Array(numFilas +1); 
    }

    //Rellenamos con ceros toda la matriz
    for(i=0;i<m.length;i++){
        for(j=0;j<m.length;j++){
            m[i][j]=0;
        }
    }
    //Rellenamos con 1 la primera columna
    for(i=0;i<numFilas+1;i++){
        m[i][0]=1;
    }
    
    //Generamos los numeros del triangulo según la formula indicada 
    for(i=1;i<m.length;i++){
        for(j=1;j<m.length;j++){
            m[i][j]=m[i-1][j]+m[i-1][j-1];
        }
    }

    //Mostramos el triangulo en el html

    let tabla = '<table class="table-striped"><tbody>';
    for (let i = 0; i < numFilas; i++) {
        //espacios en blanco iniciales
        tabla += "<tr>";
        for (let z = 0; z < (numFilas - i); z++) tabla += "<td>&nbsp;</td>";
        for (let j = 0; j <= i; j++) {
            tabla += "<td>" + m[i][j] + "</td><td>&nbsp;</td>";
        }
        for (let z = 0; z < (numFilas - i); z++) tabla += "<td>&nbsp;</td>";
        tabla += "</tr>";
    }
    document.getElementById("triangulo").innerHTML = tabla + "</tbody></table>";

    console.log(m);
    console.log(n);
   

})