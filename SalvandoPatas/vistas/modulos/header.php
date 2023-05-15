<!--===========================
=            rutas            =
============================-->
<?php 
 
$url = Ruta::frontRuta();

?>
 
<!--=====================================
=            tope            =
======================================-->
 
<div class="container-fluid barraSuperior" id="top">
<div class="container" id="contenedordelogos">
 


<!--=====================================
=           social     Y LOGO      =
======================================-->	
 

    
        <div class="col-lg-4 col-sm-4 col-xs-12" id="logotipo">

<a href="<?php echo $url?>">
     
 <img src="<?php echo $url?>vistas/images/plantilla/logocorazon.png." id="logocorazon"	class="img-responsive" ></a> 
</div>
  <div class="col-lg-3 col-md-6 col-sm-3 col-xs-6 social">
<ul>

 	<li>
		<a href="http://www.facebook.com/" class="iconos" target="_blank">
			<img class="redSocial" src="<?php echo $url?>vistas/images/plantilla/face.png"> 
		</a>
	</li>

	<li>
		<a href="http://www.twitter.com/" class="iconos" target="_blank">
			<img class="redSocial" src="<?php echo $url?>vistas/images/plantilla/twi.png">
		</a>
	</li>
	<li>
		<a href="http://www.instagram.com/" class="iconos" target="_blank">
			<img class="redSocial" src="<?php echo $url?>vistas/images/plantilla/insta.png" class="redSocial">
		</a>
	</li>
</ul>
</div>
 <div class="col-lg-3 col-md-3 col-sm-7 col-xs-6 logo" id="logonombre">
 <h1>Salvando Patas</h1>


 

</ul></div></div> </div>  

<!--=============================================================================
=                   segunda parte-<img src="<?php echo $url?>vistas/images/plantilla/titulo.png ?>" class="img-responsive"></a>                       header            =
==============================================================================-->

<!-- ***************************************************************************** -->


<header class="container-fluid">
<div class="container menu">
<div class="raw" id="cabezote">
 
  
<!--===========================================
=        
=
      columnas: grande mediano pequeño movil
============================================-->
<div class="col-lg-8  col-md-12 col-sm-12 col-xs-12" id="menubarcategorias">

<div class="navbar">
  <a href="#home">Home</a>
  <div class="subnav">
    <button class="subnavbtn">Fundaciones</button>
    <div class="subnav-content">
      <a href="#refugios">Refugios</a>
      <a href="#listas">Listas</a>
      <a href="#donaciones">Donaciones</a>
      <a href="#apadrinar">Apadrinar</a>
    </div>
  </div> 
  <div class="subnav">
    <button class="subnavbtn">Cuidados</button>
    <div class="subnav-content">
      <a href="#">Veterinarias</a>
      <a href="#">Particulares</a>
      <a href="#">Tiendas de mascotas</a>
      <a href="#">Peluquerias</a>
      <a href="#">Datos de interés</a>
    </div>
  </div> 
  <div class="subnav">
    <button class="subnavbtn">Quienes somos?</button>
    <div class="subnav-content">
      <a href="#">Visión</a>
      <a href="#">Equipo</a>
      <a href="#">Contacto</a>
    
    </div>
  </div>
    <div class="subnav">
  <button class="subnavbtn">Adopciones</button> </div>
</div>
</div>
<!--==============================
=            buscador            =
===============================-->
			

</div>
	<div class="input-group col-lg-3 col-md-12 col-sm-12 col-xs-12" id="buscador">
<input type="search" name="buscar" class="form-control" placeholder="Buscar...">
<span class="input-group-btn">
<a href="<?php echo $url;?>buscador/1/orden">
<button class="btn btn-default backColor" type="submit">
<p>Buscar</p>
</button>
</a>
</span>
</div>  	
</div>
</header>

 
<!--==============================
=        fin header         =
===============================-->

