<?php include 'header.php'; ?>

  <main>
    <section class="portada contenedor">
      <h1>Ponte en Contacto</h1>
      <p>¿Tienes dudas o deseas inscribirte? Envíanos un mensaje y te responderemos pronto.</p>
    </section>

    <section class="contenedor">
      <div style="max-width: 600px; margin: 0 auto; background: #fff; padding: 2rem; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
        <form action="#" method="POST" style="display: flex; flex-direction: column; gap: 1rem;">
          <div>
            <label for="nombre" style="display: block; margin-bottom: 0.5rem; font-weight: bold;">Nombre completo:</label>
            <input type="text" id="nombre" name="nombre" required style="width: 100%; padding: 0.7rem; border: 1px solid #ccc; border-radius: 4px;">
          </div>

          <div>
            <label for="email" style="display: block; margin-bottom: 0.5rem; font-weight: bold;">Correo electrónico:</label>
            <input type="email" id="email" name="email" required style="width: 100%; padding: 0.7rem; border: 1px solid #ccc; border-radius: 4px;">
          </div>

          <div>
            <label for="mensaje" style="display: block; margin-bottom: 0.5rem; font-weight: bold;">Mensaje:</label>
            <textarea id="mensaje" name="mensaje" rows="4" required style="width: 100%; padding: 0.7rem; border: 1px solid #ccc; border-radius: 4px;"></textarea>
          </div>

          <button type="submit" class="boton" style="border: none; cursor: pointer; margin-top: 1rem;">Enviar mensaje</button>
        </form>
      </div>
    </section>
  </main>
  
  <footer>
    <div>
      <p><strong>PowerFit Gym</strong></p>
      <p>Teléfono: 4000-5000</p>
    </div>
    <ul class="redes">
      <li><a href="https://www.facebook.com/" target="_blank">Facebook</a></li>
      <li><a href="https://www.instagram.com/" target="_blank">Instagram</a></li>
    </ul>
    <p>&copy; 2026 PowerFit Gym. Todos los derechos reservados.</p>
  </footer>
</body>
</html>
<?php include 'footer.php'; ?>