function validarCamposObligatorios(){
    var bandera = true
    for(var i=0; i< document.forms[0].elements.length; i++){
        var elemento = document.forms[0].elements[i]
        if(elemento.value==''&& elemento.type=='text')
        if(elemento.id=='cedula'){
            document.getElementById('mensajeCedula').innerHTML='<br> La cedula esta vacia'          
        }if(elemento.id=='nombres'){
            document.getElementById('mensajeNombre').innerHTML='<br> El nombre esta vacio '
        }if(elemento.id=='apellidos'){
            document.getElementById('mensajeApellido').innerHTML='<br> El apellido esta vacio '
        }if(elemento.id=='direccion'){
            document.getElementById('mensajeDireccion').innerHTML='<br> La direccion esta vacio '
        }if(elemento.id=='telefono'){
            document.getElementById('mensajeTelefono').innerHTML='<br> El telefono esta vacio '
        }if(elemento.id=='fechaNacimiento'){
            document.getElementById('mmensajeFechaNacimiento').innerHTML='<br> La Fecha de Nacimiento esta vacio '
        }if(elemento.id=='correo'){
            document.getElementById('mmensajeCorreo').innerHTML='<br> Falta el correo '
        }if(elemento.id=='contrasena'){
            document.getElementById('mensajeContraseña').innerHTML='<br> Falta la contraseña'
        }if(elemento.id=='Fecha'){
            
            elemento.style.border = '1px red solid'
            /* llama la clase */
            elemento.className = 'Error'
            bandera = false
    }
        if(!bandera){
            alert('CORRECTO')
        }
        return bandera
    }
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
    }
    
    if(letras.indexOf(tecla)==-1 && !tecla_especial)
    return false;
 }

function solonumeros(e){
    var keynum = window.event ? window.event.keyCode : e.which;
    if ((keynum == 8) || (keynum == 46))
    return true;
    return /\d/.test(String.fromCharCode(keynum));
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

