const boton = document.getElementById('btn-cita');
const caja  = document.getElementById('caja-cita');

async function obtenerCita() {

  boton.disabled = true;
  caja.innerHTML = `
    <p class="texto-normal" style="opacity: 0.5; font-style: italic;">
      Conectando con la API...
    </p>`;

  try {
    const respuesta = await fetch('https://zenquotes.io/api/random');
    const datos = await respuesta.json();

    caja.innerHTML = `
      <div class="caja-gris" style="max-width: 650px; margin: 0 auto; text-align: left;">
        <p class="texto-resaltado" style="font-style: italic; font-size: 1.15rem;">
          "${datos[0].q}"
        </p>
        <p class="texto-normal" style="margin-top: 12px;">
          — <strong>${datos[0].a}</strong>
        </p>
        <p class="texto-pequeno" style="margin-top: 8px; opacity: 0.6;">
          Fuente: ZenQuotes API &nbsp;·&nbsp; datos[0].q / datos[0].a
        </p>
      </div>`;

  } catch (error) {
    caja.innerHTML = `
      <p class="texto-normal" style="color: #dc2626;">
        ⚠️ No se pudo conectar con la API. Verifica tu conexión.
      </p>`;
    console.error('Error en fetch:', error);
  }

  boton.disabled = false;
}

boton.addEventListener('click', obtenerCita);
