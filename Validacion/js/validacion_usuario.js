var Mensaje = '';
function validarCamposObligatorios()
{
        var bandera= true
        for (var i = 0; i < document.forms[0].elements.length; i++){
            var elemento = document.forms[0].elements[i]
            if (elemento.value == '' && elemento.type == 'text' ){
                
                    if (elemento.id == 'cedula'){
                        document.getElementById('mensajeCedula').innerHTML= ' La cedula esta vacia <br>'
                    }


                    elemento.style.border  = '2px red solid'
                    /**LLAMAR A UN CLASE*/
                    elemento.className = 'error'


                    bandera=false
            }
        }

        if (!bandera){
            alert('Revise sus campos ingresados')
        }
        return bandera

}

function soloLetras(e){
    
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
    especiales = [8,37,39,46,64];
    tecla_especial = false
    for(var i in especiales){
        if(key == especiales[i]){
     tecla_especial = true;
     break;

          }
     Mensaje = 'Correcto';
    }

    if(letras.indexOf(tecla)==-1 && !tecla_especial)
    return false;


 }

function solonumeros(e){
    


    if(event.charCode >= 48 && event.charCode <= 57){
        return true;
        Mensaje = 'Correcto';
        document.getElementById('mensajeTelefono').innerHTML = Mensaje;
    
    }
        return false;
        }
  
  function varcedula() {

    var cad = document.getElementById("cedula").value.trim();
    var total = 0;
    var longitud = cad.length;
    var longcheck = longitud - 1;

    if (cad !== "" && longitud === 10) {
        for (i = 0; i < longcheck; i++) {
            if (i % 2 === 0) {
                var aux = cad.charAt(i) * 2;
                if (aux > 9) aux -= 9;
                total += aux;
            } else {
                total += parseInt(cad.charAt(i)); // parseInt o concatenará en lugar de sumar
            }
        }

        total = total % 10 ? 10 - total % 10 : 0;
		if (cad.charAt(longitud - 1) == total) {
            document.getElementById("mensajeCedula").innerHTML = ("Cedula Válida");
			//alert('Revise sus campos ingresados')

        } else {
            document.getElementById("mensajeCedula").innerHTML = ("Cedula Inválida");
        }
    }
	if ( cad.length<10){
		//alert("EL CAMPO CÉDULA DEBE TENER 10 CARACTERES ");
	    document.getElementById("mensajeCedula").innerHTML = ("Ingrese 10 digitos ");
   }
   

}

    
function ValidarFecha() {
    var Fecha = document.getElementById('fechaNacimiento').value;
    var Mensaje = '';
    document.getElementById('mensajeFecha').className = '';
    if (Fecha.length == 8) {
        var Anio = Fecha.substr(4,4);
        var Mes = Fecha.substr(2, 2) - 1;
        var Dia = Fecha.substr(0, 2);
        var VFecha = new Date(Anio, Mes, Dia);
        if ((VFecha.getFullYear() == Anio) && (VFecha.getMonth() == Mes) && (VFecha.getDate() == Dia)) {
            Mensaje = 'Fecha correcta';
            document.getElementById('mensajeFecha').className = 'mensajeFecha';
        }
        else {
            Mensaje = 'Fecha incorrecta';
            document.getElementById('mensajeFecha').className = 'mensajeFecha';
        }
    }
    document.getElementById('mensajeFecha').innerHTML = Mensaje;
}

/*
function validarCorreo(){

    var est="est.ups.edu.ec";
	var pro="@ups.edu.ec";
	
	var correo = document.getElementById("correo").value.trim();
	
	var corr1 = correo.substr(correo.length-15);
	var corr2 = correo.substr(correo.length-11);
	
	if (corr1== est ){
	
			if( correo.length < 18 ){
				//alert(correo.length);
				document.getElementById("mensajeCorreo").innerHTML = ("LA DIRECCION DEBE CONTENER AL MENOS 3 VALORES ALFANUMÉRICOS ");
			}else{
				document.getElementById("mensajeCorreo").innerHTML = ("Direccion correcta");
			}
			
	}	
	else{
			document.getElementById("mensajeCorreo").innerHTML = ("Direccion incorrecta");
	}
	
	
	if (corr2== pro ){

			if( correo.length<14 ){
				document.getElementById("mensajeCorreo").innerHTML = ("LA DIRECCION DEBE CONTENER AL MENOS 3 VALORES ALFANUMÉRICOS ");
			}else{
				document.getElementById("mensajeCorreo").innerHTML = ("Direccion correcta ");
			}	
	}	
	else{
			document.getElementById("mensajeCorreo").innerHTML = ("Direccion incorrecta ");
	}	
}
*/
function validarCorreo() {
    var correo = document.getElementById("correo").value;
    var long = correo.length
    var val = correo.substring(correo.length - 15)
    var val2 = correo.substring(correo.length - 11)
    if (val != "@est.ups.edu.ec" && val2 != "@est.ups.ec") {
        for (var i = 0; i < document.forms[0].elements.length; i++) {
            var elemento = document.forms[0].elements[i]
            if (elemento.id == 'correo') {
                document.getElementById('mensajeCorreo').innerHTML = ("Correo Incorrecto");
                elemento.style.border = '1px red solid'
                        }
        }
    } else if (long > 70) {
        for (var i = 0; i < document.forms[0].elements.length; i++) {
            var elemento = document.forms[0].elements[i]
            if (elemento.id == 'correo') {
                document.getElementById('mensajeCorreo').innerHTML = ("No puede tener mas de 70 caracteres");
                elemento.style.border = '1px red solid'
            }
        }
    }
}


