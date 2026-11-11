<!DOCTYPE html>
<html lang="es">
<script src="./js/main.js"></script>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PowerFit Gym</title>
    <link rel="stylesheet" href="./css/estilos.css">
</head>

<body>
<header class="header">
    <a href="index.php" class="logo">PowerFit Gym</a> 
    
    <!-- Checkbox oculto que controla el estado del menú -->
    <input type="checkbox" id="menu-toggle" class="menu-toggle">
    
    <!-- Etiqueta que actúa como el botón hamburguesa visual -->
    <label for="menu-toggle" class="hamburguesa">
        <span></span>
        <span></span>
        <span></span> 
    </label>

    <nav class="menu"> 
      <ul>
        <li><a href="index.php">Inicio</a></li>
        <li><a href="nosotros.php">Nosotros</a></li>
        <li><a href="servicio.php">Servicio</a></li>
        <li><a href="contacto.php">Contacto</a></li>
      </ul>
    </nav>
  </header>