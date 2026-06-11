<!-- //aca ira el documento q va a visualizar el usuario -->
<!DOCTYPE html>
<html lang="es">
<head>

	<meta content="text/html;charset=utf-8" http-equiv="Content-Type">
<meta content="utf-8" http-equiv="encoding">	<meta charset="utf-8">
 	<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" >
	<meta name="title" content="SalvandoPatitas">

	<title>Salvando Patitas</title>
 <?php 
$url = Ruta::frontRuta();
?>

<link rel="stylesheet" href="<?php echo $url; ?>vistas/css/plugins/bootstrap.min.css">
<link href="https://fonts.googleapis.com/css?family=Mountains+of+Christmas&display=swap" 
 rel="stylesheet">
 <link href="https://fonts.googleapis.com/css?family=El+Messiri&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Cardo&display=swap" rel="stylesheet">

<link rel="stylesheet" href="<?php echo $url; ?>vistas/css/plugins/font-awesome.min.css">
<link rel="stylesheet" href="<?php echo $url; ?>vistas/css/plugins/flexslider.css">
<link rel="stylesheet" href="<?php echo $url; ?>vistas/css/plugins/sweetalert.css">
<link rel="stylesheet" type="text/css" href="<?php echo $url ?>vistas/css/plugins/flexslider.css
">

<script src="<?php echo $url; ?>vistas/js/plugins/jquery.min.js"></script>
<script src="<?php echo $url; ?>vistas/js/plugins/bootstrap.min.js"></script>
<script src="<?php echo $url; ?>vistas/js/plugins/jquery.easing.js"></script>
<script src="<?php echo $url; ?>vistas/js/plugins/jquery.scrollUp.js"></script>
<script src="<?php echo $url; ?>vistas/js/plugins/jquery.flexslider.js"></script>
<script src="<?php echo $url; ?>vistas/js/plugins/sweetalert.min.js"></script> 


<link rel="stylesheet" type="text/css" href="<?php echo $url ?>vistas/css/plantilla.css">
<link rel="stylesheet" type="text/css" href="<?php echo $url ?>vistas/css/header.css">
<link rel="stylesheet" type="text/css" href="<?php echo $url ?>vistas/css/aside.css">
<link rel="stylesheet" type="text/css" href="<?php echo $url ?>vistas/css/moduloprincipal.css">
<link rel="stylesheet" type="text/css" href="<?php echo $url ?>vistas/css/footer.css">
 
</head>
<body>
	

<?php 
 
include 'modulos/header.php';

 include "modulos/aside.php"; 

 
   ?>
  <div class="container contenedorplantilla">
  <div class="row">
<?php 
 
$ruta_vacia=null;
$rutas=array();
if (isset($_GET["ruta"])){
$rutas=explode("/",$_GET["ruta"]);	
$item= "ruta";
$valor=$rutas[0]; 

 

if ($ruta_vacia!=null|| $rutas[0]== "texto"|| $rutas[0]=="texto"|| $rutas[0]=="texto") {
	include "modulos/".$rutas[0].".php";
	 
}else if("texto"!=null){
	include "modulos/".$rutas[0].".php";

}else if ($rutas[0]=="buscador"||$rutas[0]=="error") {
	
	include "modulos/".$rutas[0].".php";
}

else{ 

include "modulos/futurapaginadeerror.php";
}

}else{
 
	include "modulos/moduloprincipal.php";
}
include "modulos/footer.php";
?>

<!--====  End of control de rutas  ====-->
</div></div>

<script src="<?php echo $url ?>vistas/js/header.js"></script>
<script src="<?php echo $url ?>vistas/js/plantilla.js"></script>
<script src="<?php echo $url ?>vistas/js/buscador.js"></script>
<script src="<?php echo $url ?>vistas/js/plugins/jquery.flexslider.js"></script>
<script src="<?php echo $url ?>vistas/js/plugins/sweetalert.min.js"></script>

</body>
</html>