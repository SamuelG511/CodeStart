const boton = document.getElementById('btn-cita');
const caja  = document.getElementById('caja-cita');

const datos = [
  "Python fue creado en 1991. El nombre viene de Monty Python, no de la serpiente.",
  "JavaScript fue creado en solo 10 días por Brendan Eich en 1995.",
  "El primer bug informático fue una polilla real encontrada en un computador en 1947.",
  "Java fue diseñado originalmente para televisores, no para internet.",
  "El 70% del código que se escribe es para mantener código viejo, no para crear cosas nuevas.",
  "Linux tiene más de 27 millones de líneas de código.",
  "HTML no es un lenguaje de programación, es un lenguaje de marcado.",
  "Git fue creado por Linus Torvalds en solo 2 semanas en 2005.",
  "La primera programadora de la historia fue Ada Lovelace, una mujer, en 1843.",
  "El 92% de los proyectos de IA usan Python como lenguaje principal.",
  "Un desarrollador promedio escribe entre 10 y 50 líneas de código productivo al día.",
  "El 99% de los sitios web usan JavaScript en el frontend.",
  "CSS no es un lenguaje de programación, es un lenguaje de estilos.",
  "Stack Overflow recibe más de 50 millones de visitas al mes.",
  "Google fue escrito originalmente en Python antes de migrar a C++."
];

async function obtenerCita() {

  boton.disabled = true;
  caja.innerHTML = `
    <p class="texto-normal" style="opacity: 0.5; font-style: italic;">
      Cargando dato curioso...
    </p>`;

  const respuesta = await fetch('https://raw.githubusercontent.com/SamuelG511/CodeStart/main/script.js');

  const aleatorio = datos[Math.floor(Math.random() * datos.length)];

  caja.innerHTML = `
    <div class="caja-gris" style="max-width: 650px; margin: 0 auto; text-align: left;">
      <p class="texto-resaltado" style="font-style: italic; font-size: 1.15rem;">
        💡 ${aleatorio}
      </p>
      <p class="texto-pequeno" style="margin-top: 8px; opacity: 0.6;">
        Fuente: CodeStart API &nbsp;·&nbsp; fetch a GitHub
      </p>
    </div>`;

  boton.disabled = false;
}

boton.addEventListener('click', obtenerCita);
