function boton(num){
    var rep=document.calcu.resultado.value;
    document.calcu.resultado.value =rep+num;
}
function reset(){
    document.calcu.resultado.value ="";
}

function btncal(){
     document.calcu.resultado.value = eval(document.calcu.resultado.value);
}
function btnmas(){
document.calcu.resultado.value +="+";
}
  
function btnmenos(){
    document.calcu.resultado.value +="-";

}
function btnmul(){
    document.calcu.resultado.value +="*";

}
function btndiv(){
    document.calcu.resultado.value +="/";

}
function btnpor(){
    document.calcu.resultado.value +="%";
}
function btncoma(){
    document.calcu.resultado.value+=",";
}
function btnraiz(){
    var resultado = Number(document.getElementById("resultado").value);
    var res= Math.sqrt(resultado);
    document.getElementById("resultado").value=res;
}
function btnmasmenos(){
    var caja2 = document.calcu.resultado.value;
    if (caja2 > 0) {
        document.calcu.resultado.value = "(-" + caja2 + ")";
    }
    else {
        cajaplus = caja2.replace(/[-|(|)]/g, "");
        document.calcu.digitos2.value = cajaplus;
    }
}

function eliminarDigitos() {
    var x=(document.getElementById("resultado").value);
   var c=x.length; 
    var br=x.substr(c-1,c) 
    var x=x.substr(0,c-1) 
    document.getElementById("resultado").value=x;
}
function fracc() {
    var nx=Number(document.getElementById("resultado").value);
    var nx=(1/nx);
    var x=String(nx);		 
    document.getElementById("resultado").value=x;

    }
    