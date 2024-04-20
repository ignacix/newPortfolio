// ANIMACÓNES

function animar(id) {
    var elemento = document.getElementById(id);
    elemento.style.opacity = '1';
}

// Llama a la función animar después de un tiempo específico para cada elemento
let intervaloCard = setTimeout(function() {
    animar("principalCard");
}, 1000);

let intervaloText = setTimeout(function() {
    animar("textChanged");
}, 1500);

let intervaloTechnologies = setTimeout(function() {
    animar("technologies");
}, 2000);
//CAMBIAR IDIOMA
const botonCambiarIdioma = document.getElementById('changeLanguage');
const textoCambiante = document.getElementById('textChanged');

let idiomaActual = 'en'; 

botonCambiarIdioma.addEventListener('click', () => {
    if (idiomaActual === 'es') {
        textoCambiante.innerHTML = `<h1>¡<mark class="highlight-yellow texto-con-zoom">Hola</mark> I'm <strong>Ignacio Jerez</strong>, a Developer from <mark class="highlight-green texto-con-zoom">Argentina</mark>.</h1>
        <p>I'm currently in the fifth semester of the University Technician degree in Informatic Systems at the <mark class="highlight-yellow" >National Technological University - FRGP</mark> , in <b>Buenos Aires</b>. Throughout my academic journey, I've worked with various technologies to develop applications, including console, desktop, and web applications.</p>
        <p>I would love to be part of a work team where <mark class="highlight-purple texto-con-zoom">communication</mark>, <mark class="highlight-blue texto-con-zoom">collaboration</mark>, and <mark class="highlight-green texto-con-zoom">teamwork</mark> are <mark class="highlight-pink texto-con-zoom">essential</mark> to create innovative technological solutions. I'm known for my <mark class="highlight-yellow texto-con-zoom">curious attitude</mark> and my <mark class="highlight-yellow texto-con-zoom">commitment</mark> to <mark class="highlight-yellow texto-con-zoom">learning</mark> and <mark class="highlight-yellow texto-con-zoom">continuous improvement</mark>.</p>
        <p>If you're interested in getting to know me, feel free to <mark class="highlight-pink texto-con-zoom">contact me</mark>!</p>`;
        botonCambiarIdioma.textContent = 'EN';
        idiomaActual = 'en'; 
    } else {
        textoCambiante.innerHTML =`<h1>¡<mark class="highlight-yellow texto-con-zoom">Hi</mark>, soy <strong>Ignacio Jerez</strong>, un desarrollador de <mark class="highlight-green texto-con-zoom">Argentina</mark>.</h1>
        <p>Actualmente estoy en el quinto semestre de la carrera de Técnico universitario en Sistemas informáticos de la <mark class="highlight-yellow" >Universidad Tecnológica Nacional - FRGP</mark>, en <b>Buenos Aires</b>. A lo largo de mi trayectoria académica, he trabajado con diversas tecnologías para desarrollar aplicaciones, incluyendo aplicaciones de consola, escritorio y web.</p>
        <p>Me encantaría formar parte de un equipo de trabajo donde la <mark class="highlight-purple texto-con-zoom">comunicación</mark>, la <mark class="highlight-blue texto-con-zoom">colaboración</mark> y el <mark class="highlight-green texto-con-zoom">trabajo en equipo</mark> sean <mark class="highlight-pink texto-con-zoom">esenciales</mark> para crear soluciones tecnológicas innovadoras. Me caracterizo por mi <mark class="highlight-yellow texto-con-zoom">actitud curiosa</mark> y mi <mark class="highlight-yellow texto-con-zoom">compromiso</mark> con el <mark class="highlight-yellow texto-con-zoom">aprendizaje</mark> y la <mark class="highlight-yellow texto-con-zoom">mejora continua</mark>.</p>
        <p>Si estás interesado en conocerme, no dudes en <mark class="highlight-pink texto-con-zoom">contactarme</mark>!</p>`;
        botonCambiarIdioma.textContent = 'ES';
        idiomaActual = 'es'; 
    }
});

//EASTEREGG 
document.addEventListener('click', function(event) {
    const letraEspecifica = '❤️'; 
    
    if (event.target.textContent.toLowerCase() === letraEspecifica) {
        const corazon = document.createElement('span');
        corazon.classList.add('corazon');
        corazon.innerHTML = '&hearts;';
        corazon.style.left = Math.random() * window.innerWidth + 'px';
        corazon.style.animationDuration = Math.random() * 2 + 1 + 's';
        document.body.appendChild(corazon);

        setTimeout(() => {
            corazon.remove();
        }, 1500); 
    }
});


