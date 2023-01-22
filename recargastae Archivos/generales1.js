function PonerDatepicker(id)
{

    $("#" + id).datepicker({
		showOn: 'both',
		buttonImage: './img/calendar.png',
		changeMonth: true,
		buttonImageOnly: false,
		dateFormat:'dd-mm-yy',
		changeYear: true,
        duration:'',
        showAnim: '',
		numberOfMonths: 1

        	});
}


function AjaxADiv(div, modulo, submodulo, componente, variables_post, funcion_al_terminar)
{

var query ="./index.php?cargar_solo_modulo=1";

if (modulo.length>0) query = query + "&modulo=" + modulo;
if (submodulo.length>0) query = query + "&submodulo=" + submodulo;
query = query + "&op2=" + componente;

$.post(query , variables_post,

    function(resp){

	           //Llena div con contenido
                $("#" + div).html(resp);

                //Ejecuta javascript si lo hubiera
                var Divi = document.getElementById(div);
                var arr = Divi.getElementsByTagName('script');
                for (var n = 0; n < arr.length; n++)
                {
                    eval(arr[n].innerHTML)//run script inside div
                }

				if (funcion_al_terminar) funcion_al_terminar();
            }

        );

}


function consola(texto)
{

    var fecha = new Date();
    var hora = fecha.getHours()+":" + fecha.getMinutes() + ":" +fecha.getSeconds();
    console.log("Consola [ " + hora + " ] " + texto);

}



/*
Area de Funcion de configuracion del time out de ajax
Pendiente:
1.Meterlo a una funcion
2. Llamar la funcion la primera vez para inicializar valores por defecto
*/

$.ajaxSetup({
    cache: false,
     timeout: (3 * 60) * 1000
});

$(function() {
    $.ajaxSetup({
        error: function(jqXHR, exception) {
            if (jqXHR.status === 0) {
               var ErrorResult = 'No se logró acceder a internet, por favor revisa si está disponible.';
            } else if (jqXHR.status == 404) {
                var ErrorResult = 'Página de recargas no disponible. [404]';
            } else if (jqXHR.status == 500) {
                var ErrorResult = 'Error interno del servidor [500].';
            } else if (exception === 'parsererror') {
                var ErrorResult = 'Solicito JSON falló.';
            } else if (exception === 'timeout') {
                var ErrorResult = 'Tiempo de espera superado, por favor consulta tu reporte de ventas si tienes duda de alguna transacción.';
            } else if (exception === 'abort') {
                var ErrorResult = 'Ajax request aborted.';
            } else {
               var ErrorResult = 'Uncaught Error.\n' + jqXHR.responseText;
            }

            alert(ErrorResult);

        }
    });

})
/*
Fin Area de Funcion de configuracion del time out de ajax
*/

function MostrarSaldosCortos(saldo)
{

var frase_de_magnitud = "";

saldo = saldo.replace(/,/g,"");

if (Math.abs(saldo)>1000000)
{
    saldo= Math.round(saldo /1000000);
    frase_de_magnitud = "m";

}else if (Math.abs(saldo)>100000)
{
    saldo= Math.round(saldo /1000);
     frase_de_magnitud="K";
}



saldo  =   numberWithCommas(saldo) + frase_de_magnitud;
return saldo;
}
function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");




}


var filtro_input_objeto_activo;
var filtro_input_cadena_de_filtros;
var filtro_input_posicion_cursor_anterior;

function permitir_caracteres(elemento,filtro)
{

elemento.onkeypress=function(e) {
    filtrar_caracteres(elemento,filtro);
};

elemento.onkeydown =function(e) {
    filtrar_caracteres(elemento,filtro);
};

}


function filtrar_caracteres(objeto, filtro ) {
    
    filtro_input_objeto_activo=objeto;
    filtro_input_posicion_cursor_anterior = objeto.selectionStart; 

    filtro_input_cadena_de_filtros=filtro;
    setTimeout("filtra_caracteres_asincrono();", 20);
    
}




//Por temporizador se limpia la cadena
function filtra_caracteres_asincrono()
{

var i;
var	caracter_analizando;
var posicion_en_filtro;
for (i=0;i< filtro_input_objeto_activo.value.length ;i++) { 

caracter_analizando= filtro_input_objeto_activo.value.substr(i,1);   
posicion_en_filtro = filtro_input_cadena_de_filtros.toLowerCase().indexOf( caracter_analizando.toLowerCase() );

if (posicion_en_filtro == -1)
{

	filtro_input_objeto_activo.value = filtro_input_objeto_activo.value.replace(caracter_analizando, "");
    filtro_input_objeto_activo.selectionStart = filtro_input_posicion_cursor_anterior;        
    filtro_input_objeto_activo.selectionEnd = filtro_input_posicion_cursor_anterior;
	i=-1;

}
    
}



}




function enfocar(objeto, contexto)
{


if (contexto===undefined)
{

	$(objeto).focus();

}else{

	contexto.top.$(objeto).focus();

}


}



function habilitar(objeto, contexto)
{


if (contexto===undefined)
{

	$(objeto).attr("disabled",false);

}else{

	contexto.top.attr("disabled",false)

}


}

function deshabilitar(objeto, contexto)
{


if (contexto===undefined)
{

	$(objeto).attr("disabled",true);

}else{

	contexto.top.attr("disabled",true)

}


}



