/*

Baul de funciones generales javascript para segutienda
09 01 2019 - A Zavala
Cargar solo al cargar el modulo de segutienda...

Para identificar elementos se usa su selector javascript $(#)

*/

var selector_modulo = document.getElementById("selector_de_modulo");

/*
Esta funcion configura un nuevo empresa id a usarse
*/

function CambiarEmpresa(empresa_id)
{
    //Cambia el RFC
    CargarModulo('sistema_punto_de_venta_contenido_principal','segutienda','', 'punto_de_venta',{accion: 'CambiarEmpresa', empresa_id: empresa_id } );
}

//Funcion para realizar get/post ajax de manera rapida y segura
function cargar(url, metodo , variables_post, elemento_receptor , funcion_al_terminar,funcion_error,tiempo_espera, opciones)
{

if (tiempo_espera===undefined) tiempo_espera=60;
if (elemento_receptor ===undefined) elemento_receptor ="";

$.ajax({

type: metodo,
url: url,
data: variables_post,
timeout: tiempo_espera *1000,
success: function(respuesta){

		if ( $(elemento_receptor ).length ) {

			$(elemento_receptor ).html(respuesta);
	
		}
		//Ejecuta el javascript si lo hubiera
                var arr = document.querySelector(elemento_receptor ).getElementsByTagName('script');
                for (var n = 0; n < arr.length; n++)
                {

                    eval(arr[n].innerHTML);
                }

/*
funcion_al_terminar debe meterse con solo el nombre de la funcion, sin parentesis ni argumentos, ej: mi_funcion
*/

                if (funcion_al_terminar)  funcion_al_terminar(respuesta); 



},

error: function(jqXHR,textStatus,errorThrown){

	if (funcion_error)  funcion_error(jqXHR);

}


});


}



/*
Funcion exclusiva para segutiendia que envia un POST
*/
function CargarModulo(div, modulo, submodulo, componente, variables_post, funcion_al_terminar)
{

//$('#linea_global_divisoria').hide();
$('#imagen_en_proceso').show();

var query ="./index.php?cargar_solo_modulo=1";

if (modulo.length>0) query = query + "&modulo=" + modulo;
if (submodulo.length>0) query = query + "&submodulo=" + submodulo;
query = query + "&op2=" + componente;

//Variables globales a enviar siempre
query = query + ObtenerVariableDB();

//Fin de variables globales
$.post(query , variables_post,

    function(resp){

                $('#imagen_en_proceso').hide();
//                $('#linea_global_divisoria').show();

	           //Llena div con contenido
                $("#" + div).html(resp);


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


//Selecciona checkboxes
function SeleccionarCheckboxes(rango_de_nombres, valor)
	{
		checkboxes=document.getElementsByTagName('input'); //obtenemos todos los controles del tipo Input
		for(i=0;i<checkboxes.length;i++) //recoremos todos los controles
		{
			if(checkboxes[i].type == "checkbox" &&  checkboxes[i].name.indexOf(rango_de_nombres + "-")>0) //solo si es un checkbox entramos
			{
				checkboxes[i].checked=valor; //si es un checkbox le damos el valor del checkbox que lo llamó (Marcar/Desmarcar Todos)
			}
		}
	}



function ObtieneCheckboxes(rango_de_nombres, valor)
	{
        var a = [];

		checkboxes=document.getElementsByTagName('input'); //obtenemos todos los controles del tipo Input

		for(i=0;i<checkboxes.length;i++) //recoremos todos los controles
		{
			if(checkboxes[i].type == "checkbox" &&  checkboxes[i].checked &&  checkboxes[i].name.indexOf(rango_de_nombres + "-")>-1) //solo si es un checkbox entramos
			{
                a.push( checkboxes[i].name);
			}
		}

        return a;
	}


function ObtieneFechaHoy()
{
var hoy = new Date();
var dd = hoy.getDate();
var mm = hoy.getMonth()+1; //hoy es 0!
var yyyy = hoy.getFullYear();

if(dd<10) {
    dd='0'+dd
}

if(mm<10) {
    mm='0'+mm
}

hoy = dd+'-'+mm+'-'+yyyy;
return hoy;
}


function ObtenerVariableDB()
{
	var combo_empresas = window.top.document.getElementById('selector_global_de_empresa');
	return  "&st_global_empresa_id=" + combo_empresas.options[combo_empresas.selectedIndex].value;
}


function AbrirVentanaDeAgregarPolizas_global(accion, poliza_id_preexistente , fecha_poliza_preexistente , id_insercion ,prepoliza, contop_origen)
{
    //window.open('./index.php?cargar_solo_modulo=1&modulo=segutienda&submodulo=polizas&op2=agregar_modificar_poliza&accion=' + accion + "&contop_origen=" +  contop_origen  + "&poliza_id_preexistente=" +  poliza_id_preexistente +  "&fecha_poliza_preexistente=" +  fecha_poliza_preexistente +    "&id_insercion=" + id_insercion, 'AgregarPoliza_popup' ,  'left=50,top=50,width=1000,height=650,resizable=1,scrollbars=0,toolbar=0,status=0');
    document.getElementById('Form_crearpoliza').accion.value=accion;
    document.getElementById('Form_crearpoliza').contop_origen.value=contop_origen;
    document.getElementById('Form_crearpoliza').submit();
}


/*
Funciones de ventana
*/


var razon_de_cierre_de_ventana="";

function obtener_razon_de_cierre_de_ventana()
{
return razon_de_cierre_de_ventana;
}


function abrir_ventana( tipo,origen, titulo,  ancho, alto, modal,  opciones )
{

if (tipo=="objeto")
{

    var ventana_a_abrir = $(origen,top.document)[0];  //Busca div en el objeto prinicipal
	configurar_ventana(ventana_a_abrir.id,titulo,ancho, alto,modal,opciones);
   

}else if(tipo=="url")
{

    var ventana_a_abrir =ObtenerVentanaAAbrir();
    configurar_ventana(ventana_a_abrir.id,titulo,ancho, alto,modal,opciones);
    ventana_contenido_iframe(ventana_a_abrir.id,origen);

}else if (tipo=="codigo")
{

    var ventana_a_abrir =ObtenerVentanaAAbrir();
    configurar_ventana(ventana_a_abrir.id,titulo,ancho, alto,modal,opciones);
    ventana_contenido_html(ventana_a_abrir.id, origen);

}

window.top.$('#' + ventana_a_abrir.id).dialog('open');
razon_de_cierre_de_ventana = "";
}



function abrir_mensaje(html,titulo,width,height,modal,opciones)
{

abrir_ventana("codigo", html,titulo,width,height,modal,opciones);

}


function configurar_ventana(id,titulo,ancho, alto, modal,opciones)
{

//Dimensiones por default de la ventana, en caso de no ser precisados
if (alto === undefined || alto<1 ) alto =340;
if (ancho === undefined || ancho<1 ) ancho =340;
if (titulo === undefined || titulo.length<1  ) titulo ="Cuadro de diálogo";
if (modal===undefined) modal=true;

var cerrar_con_esc = false;
var funcion_al_presionar_boton_cerrar = function(){ };
//Deshabilita por defecto el cierre con escape
var funcion_al_presionar_esc = function(){ $('#' + id).closest('.ui-dialog').unbind("keydown");   };

var funcion_para_ocultar_boton_cerrar = function(event, ui) { $(".ui-dialog-titlebar-close").show(); };


var funcion_al_cerrar = function() { };

if ( ! ( opciones===undefined )  )
{

	if ( "mostrar_boton_cerrar" in opciones )
	{

		if (opciones["mostrar_boton_cerrar"]==false) 
		{
			funcion_para_ocultar_boton_cerrar = function(event, ui) { $(".ui-dialog-titlebar-close").hide(); }
		}

	}



	

	if ( "funcion_al_cerrar" in opciones )
	{

		
		funcion_al_cerrar=function(){ opciones["funcion_al_cerrar"](); };


	}


	if ( "cerrar_con_esc" in opciones )
	{

		

        if (opciones["cerrar_con_esc"]==true)
		{

			funcion_al_presionar_esc=	function() {

			$('#' + id).closest('.ui-dialog').keydown(function(ev) {

           		if (ev.keyCode == 27) {

					razon_de_cierre_de_ventana="esc";
					window.top.$('#' +  id).dialog('close');

           		}

	       	})

			};

		}


	}


}






var funcion_al_abrir = function(){



funcion_para_ocultar_boton_cerrar();
funcion_al_presionar_esc();
var objeto = $('#' + id).closest('div.ui-dialog').find('.ui-dialog-titlebar-close');

objeto.unbind();

objeto.click(function(e) {
razon_de_cierre_de_ventana="boton_cerrar";
window.top.$('#' +  id).dialog('close');
e.preventDefault();
});

};


var ventana_ya_inicializada =  window.top.$('#' + id).hasClass("ui-dialog-content");

if (! ventana_ya_inicializada )
{

//Inicializacion de la ventana (requerida)
window.top.$('#' + id).dialog({
closeOnEscape: cerrar_con_esc ,
resizable: true,
height: alto,
width: ancho,
close: funcion_al_cerrar ,
open: funcion_al_abrir, 
title: titulo,
modal: modal

});

}


//Se requiere cuando ya se abrio anteriormente el div
$('#' + id).dialog("option", "height", alto);
$('#' + id).dialog("option", "width", ancho);
$('#' + id).dialog("option", "title", titulo);
$('#' + id).dialog("option", "modal", modal);
$('#' + id).dialog("option", "closeOnEscape", cerrar_con_esc );
$('#' + id).dialog("option", "resizable", true);
$('#' + id).dialog("option", "close", funcion_al_cerrar);
$('#' + id).dialog("option", "open", funcion_al_abrir);



}



function ventana_contenido_iframe(id,src)
{

    ventana_contenido_html(id,'<div id="etiqueta_cargando" style="width:100%;text-align:center;">Cargando...</div><iframe id="' + id + '_iframe" onload="document.getElementById(\'etiqueta_cargando\').style.display=\'none\';" name="ModificarMovimiento_div_iframe" width="100%" height = "100%" frameborder="0" src="' +  src + '" ></iframe>');

}


function ventana_contenido_html(id,html)
{
    window.top.$('#' + id ).html(html);

}

//Probar esta funcion, ya que hasta el 11 02 19 no tiene uso
function dirigir_iframe_de_ventana_a_url(id_ventana,src)
{

      var iframe =  window.top.$('#' + id_ventana + '_iframe');
      if ( iframe.length ) iframe.attr('src',src);

}


//Obtiene una div disponible para abrir una ventana.
function ObtenerVentanaAAbrir()
{
    for (i = 0; i < 5; i++) {

    if (window.top.document.getElementById('n' + i +'_div') !==null)
    {

        if (! window.top.$('#n' + i +'_div').dialog('isOpen') || window.top.$('#n' + i +'_div').dialog('isOpen')===undefined ) return  window.top.document.getElementById('n' + i +'_div');
    }
    }
    return null;

}

function obtener_ventana_activa()
{

var objeto= null;

//.ui-dialog -> clase del primer contendor dialog

 $(".ui-dialog-content",parent.document).each(function()
 {
 

    //alert(this.id + " " +  document.getElementById(  this.id  ).dialog('isOpen') );

    if ( window.top.$('#' + this.id  ).dialog('isOpen')===true ) objeto =   window.top.document.getElementById(this.id);

 });

    return objeto;

}

function cerrar_ventana(id)
{

if (id === undefined)
{

     if (estoy_dentro_de_iframe()) {
     
        id =  window.parent.document.getElementById(window.frameElement.id).parentElement.id;
        dirigir_iframe_de_ventana_a_url(id, "about:blank"); //Evita que la ventana se vuelva a cargar al cerrarse (bug de jquery)
    	

     }else{

        id = obtener_ventana_activa().id;
    }


}

razon_de_cierre_de_ventana="codigo";

window.top.$('#' +  id).dialog('close');
console.log("ventana destruida");

}

//OBSOLETA, BORRAR al no usarse
function CerrarUltimaVentana()
{
    cerrar_ventana();
}

function CerrarTodasLasVentanas()
{

while ( ObtenerUltimaVentanaAbierta()!==null) {

    CerrarUltimaVentana();

}

}


function estoy_dentro_de_iframe()
{

try
{

    return window.self !== window.top;

}catch (e) {
    return true;
}

}


function inicializar_div_de_ventana(objeto_jquery)
{


objeto_javascript = objeto_jquery[0];

var box = window.top.document.body;
var clase_objeto = objeto_jquery.attr("class") ;

var objeto_ya_en_dom_principal = box.querySelector('#' + clase_objeto );
var objeto_ya_esta_en_ventana_principal = objeto_ya_en_dom_principal  !== null;

if (objeto_ya_esta_en_ventana_principal ) 
{

	objeto_javascript.remove();

} else {

	//Asigna el nombre de la clase al id del objeto origen
	objeto_jquery.attr("id", clase_objeto );

	//Quita el atributo de clase
	objeto_jquery.removeAttr("class"); 

	//Mueve objeto al body principal
	box.appendChild( objeto_javascript ); 

}


}

function asignar_funcion_al_presionar_boton_cerrar(id_de_ventana, funcion)
{

    window.top.$('#' + id_de_ventana ).unbind('dialogclose');

    window.top.$('#' + id_de_ventana ).bind('dialogclose', function (){

		funcion();

    });




}

function asignar_funcion_al_presionar_esc(objeto, funcion)
{

$(document).keydown(function(e){
if (e.keyCode == 27) //Al presionar ESCAPE
{

	cerrar_ventana();

}
});

}



//Invoca la accion del navegador de elementos a realizar
function OpcionesBasicasDeElemento(accion, tabla_elemento,titulo, width , height)
{
    if (width ===undefined) width = 500;
    if (height ===undefined) height = 500;
    if (titulo===undefined)titulo="Cuadro de diálogo";

    abrir_ventana('url','./index.php?cargar_solo_modulo=1&modulo=segutienda&submodulo=carrito&op2=agregar_modificar' + ObtenerVariableDB() +  '&accion=' +  accion + '&' + "elementos" + '=' + tabla_elemento, titulo, width, height); 
}

function obtener_elemento_padre(elemento)
{

    return elemento.parentNode;

}


//Ejecuta una funcion de la ventana padre
function llamar_evento(nombre_funcion, parametros, id_iframe)
{

if (window.parent.window[nombre_funcion] !== undefined) window.parent.window[nombre_funcion](parametros);

}




//FIN de Funciones de ventana


