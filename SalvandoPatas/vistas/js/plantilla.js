/*
plantilla

*/
//solicitar el ajax


			

var rutaOculta=$("#rutaOculta").val();
$('[data-toggle="tooltip"]').tooltip();
var ruta = "http://localhost/camilo/";
$.ajax({
	//url de donde se va a solicitar el llamado(crear carpeta ajax en el controlador)
	

url:ruta+"ajax/plantilla.ajax.php",
//segunda propiedad
success:function(respuesta){
	//console.log===verificar como systemOutPrnt
	//console.log(JSON.parse(respuesta));//aca puedo concatenar una propiedad que quiera q me devuelva
	//y almacenarlo como una variable. Por ejemplo:
//var colorFondo=	JSON.parse(respuesta).colorFondo; 
//console.log("colorFondo", colorFondo);   ;D


/* ahora a declarar las variables */

var   color_texto=JSON.parse(respuesta).color_texto;
var   color_fondo=JSON.parse(respuesta).color_fondo;
var  barra_superior =JSON.parse(respuesta).barra_superior;
var   texto_superior =JSON.parse(respuesta).texto_superior ;
/*var    =JSON.parse(respuesta.). ;
var    =JSON.parse(respuesta.). ;
var    =JSON.parse(respuesta.). ;
var    =JSON.parse(respuesta.). ;
var    =JSON.parse(respuesta.). ;	
*/
//aplicar los estilos a la hoja css
$(".backColor, .backColor a").css({"background":color_fondo, "color": color_texto})

	//convertir la cadena de texto a formato json= json.parse
$(".barraSuperior").css({"background":barra_superior, "color":texto_superior})
}




}
	)

var principaldiv= $("#principaldiv");
/*==========================================
=            cuadricula o lista            =
==========================================*/
 var btnList = $(".btnList");

 for(var i=0; i<btnList.length; i++){

 $("#btnGrid"+i).click(function(){
 	
var numero=$(this).attr("id").substr(-1);

 	$(".list"+numero).hide();
 		$(".grid"+numero).show();
 		$("#btnGrid"+numero).addClass("backColor");
 			$("#btnList"+numero).removeClass("backColor");

 })
 $("#btnList"+i).click(function(){
var numero=$(this).attr("id").substr(-1);
$(".grid"+numero).hide();
$(".list"+numero).show();
 		$("#btnList"+numero).addClass("backColor");
 			$("#btnGrid"+numero).removeClass("backColor");

 })


 }

$('[data-toggle="tooltip"]').tooltip();

/*=====  End of cuadricula o lista  ======*/

/*====================================
=            migas de pan            =
====================================*/

var pagActiva=$(".pagActiva").html();
if (pagActiva!=null) {
var regPagActiva= pagActiva.replace(/-/g, " ");
$(".pagActiva").html(regPagActiva);
}
/*=====  End of migas de pan g es para el ´lural de --- ======*/
/*====================================
=           enlaces paginacion       =
====================================*/
