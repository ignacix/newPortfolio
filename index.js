const botonCambiarIdioma = document.getElementById('changeLanguage');
const textoCambiante = document.getElementById('textChanged');

let idiomaActual = 'en'; // Español por defecto

botonCambiarIdioma.addEventListener('click', () => {
    if (idiomaActual === 'es') {
        textoCambiante.innerHTML = `<h1>¡<mark class="highlight-yellow">Hola</mark> I'm <strong>Ignacio Jerez</strong>, a Developer from <mark class="highlight-green">Argentina</mark>.</h1>
                <p>I'm currently in the fifth semester of the University Technician degree in Informatic Systems at the <mark class="highlight-yellow" >National Technological University - FRGP</mark> , in Buenos Aires. Throughout my academic journey, I've worked with various technologies to develop applications, including console, desktop, and web applications.</p>
                <p>I would love to be part of a work team where <mark class="highlight-purple">communication</mark>, <mark class="highlight-blue">collaboration</mark>, and <mark class="highlight-green">teamwork</mark> are <mark class="highlight-pink">essential</mark> to create innovative technological solutions. I'm known for my <mark class="highlight-yellow">curious attitude</mark> and my <mark class="highlight-yellow">commitment</mark> to <mark class="highlight-yellow">learning</mark> and <mark class="highlight-yellow">continuous improvement</mark>.</p>
                <p>If you're interested in getting to know me, feel free to <mark class="highlight-pink">contact me</mark>!</p>`;
        botonCambiarIdioma.textContent = 'EN';
        idiomaActual = 'en'; // Cambiar a inglés
    } else {
        textoCambiante.innerHTML =`<h1>¡<mark class="highlight-yellow">Hi</mark>, soy <strong>Ignacio Jerez</strong>, un desarrollador de <mark class="highlight-green">Argentina</mark>.</h1>
        <p>Actualmente estoy en el quinto semestre de la carrera de Técnico universitario en Sistemas informáticos de la Universidad Tecnológica Nacional - FRGP, en Buenos Aires. A lo largo de mi trayectoria académica, he trabajado con diversas tecnologías para desarrollar aplicaciones, incluyendo aplicaciones de consola, escritorio y web.</p>
        <p>Me encantaría formar parte de un equipo de trabajo donde la <mark class="highlight-purple">comunicación</mark>, la <mark class="highlight-blue">colaboración</mark> y el <mark class="highlight-green">trabajo en equipo</mark> sean <mark class="highlight-pink">esenciales</mark> para crear soluciones tecnológicas innovadoras. Me caracterizo por mi <mark class="highlight-yellow">actitud curiosa</mark> y mi <mark class="highlight-yellow">compromiso</mark> con el <mark class="highlight-yellow">aprendizaje</mark> y la <mark class="highlight-yellow">mejora continua</mark>.</p>
        <p>Si estás interesado en conocerme, no dudes en <mark class="highlight-pink">contactarme</mark>!</p>`;
        botonCambiarIdioma.textContent = 'ES';
        idiomaActual = 'es'; // Cambiar a español                        
    }
});
