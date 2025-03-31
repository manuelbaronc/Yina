// Textos en español y chino
const textos = {
    es: {
        titulo: "Para Chen Yina, Mi Novia De China",
        mensajeInicial: "¿Cuál es la probabilidad de que alguien como tú exista en mi vida? Casi cero. Y sin embargo, aquí estás.",
        btnMensaje: "Siguiente mensaje",
        btnDistancia: "Distancia entre nosotros",
        btnCuriosidad: "Dato curioso",
        mensajes: [
            "¿Cuál es la probabilidad de que alguien como tú exista en mi vida? Casi cero. Y sin embargo, aquí estás.",
            "Tu existencia, Yina, es mi regalo más preciado.",
            "Prometo ser la lámpara que ilumina tus días oscuros, Yina.",
            "El mundo es grande, pero mi lugar está a tu lado.",
            "Siempre sabes cómo tocar mi corazón.",
            "Te amo, Yina."
        ],
        distancia: "La distancia entre Nanchang y Guadalajara es de aproximadamente 13,500 km ✈️",
        curiosidades: [
            "Ambas ciudades tienen un clima húmedo en verano ☀️",
            "¡Tú y yo amamos la comida picante! 🌶️",
            "Tenemos 14 horas de diferencia horaria ⏰",
            "Los dos tenemos la voz sexy 🎤"
        ]
    },
    zh: {
        titulo: "致陈伊娜，我的中国女朋友",
        mensajeInicial: "像你这样的人出现在我生命中的概率有多大？几乎为零。但你却在这里。",
        btnMensaje: "下一条消息",
        btnDistancia: "我们之间的距离",
        btnCuriosidad: "有趣的事实",
        mensajes: [
            "像你这样的人出现在我生命中的概率有多大？几乎为零。但你却在这里。",
            "伊娜，你的存在是我最珍贵的礼物。",
            "我承诺成为照亮你黑暗日子的灯，伊娜。",
            "世界很大，但我的位置就在你身边。",
            "你总是知道如何触动我的心。",
            "我爱你，伊娜。"
        ],
        distancia: "南昌到瓜达拉哈拉的距离大约是13,500公里 ✈️",
        curiosidades: [
            "两座城市夏天都很潮湿 ☀️",
            "你和我都爱吃辣！ 🌶️",
            "我们有14小时的时差 ⏰",
            "我们都有性感的声音 🎤"
        ]
    }
};

let idiomaActual = 'es';
const musica = document.getElementById('musica');

// Crear koalas flotantes
function crearKoalas() {
    const koalasContainer = document.getElementById('koalas-container');
    const numKoalas = 8;
    
    for (let i = 0; i < numKoalas; i++) {
        const koala = document.createElement('div');
        koala.innerHTML = '🐨';
        koala.classList.add('koala');
        koala.style.left = Math.random() * 100 + 'vw';
        koala.style.animationDuration = 10 + Math.random() * 20 + 's';
        koala.style.opacity = 0.7;
        koalasContainer.appendChild(koala);
    }
}

// Cambiar idioma
document.getElementById('btnIdioma').addEventListener('click', function() {
    idiomaActual = idiomaActual === 'es' ? 'zh' : 'es';
    actualizarTextos();
});

// Actualizar textos
function actualizarTextos() {
    document.getElementById('titulo').textContent = textos[idiomaActual].titulo;
    document.getElementById('mensaje').textContent = textos[idiomaActual].mensajeInicial;
    document.getElementById('btnMensaje').textContent = textos[idiomaActual].btnMensaje;
    document.getElementById('btnDistancia').textContent = textos[idiomaActual].btnDistancia;
    document.getElementById('btnCuriosidad').textContent = textos[idiomaActual].btnCuriosidad;
    document.getElementById('extraInfo').textContent = '';
}

// Efecto de iluminación
function iluminarPagina() {
    const container = document.querySelector('.container');
    const titulo = document.getElementById('titulo');
    const mensaje = document.getElementById('mensaje');
    const lampara = document.getElementById('lampara');
    
    container.classList.add('iluminar');
    titulo.classList.add('iluminar-texto');
    mensaje.classList.add('iluminar-texto');
    lampara.style.opacity = '1';
    
    setTimeout(() => {
        container.classList.remove('iluminar');
        titulo.classList.remove('iluminar-texto');
        mensaje.classList.remove('iluminar-texto');
        lampara.style.opacity = '0';
    }, 2000);
}

// Botones interactivos
document.getElementById('btnMensaje').addEventListener('click', function() {
    const mensajeAleatorio = textos[idiomaActual].mensajes[Math.floor(Math.random() * textos[idiomaActual].mensajes.length)];
    document.getElementById('mensaje').textContent = mensajeAleatorio;
    iluminarPagina();
});

document.getElementById('btnDistancia').addEventListener('click', function() {
    document.getElementById('extraInfo').textContent = textos[idiomaActual].distancia;
    iluminarPagina();
});

document.getElementById('btnCuriosidad').addEventListener('click', function() {
    const curiosidadAleatoria = textos[idiomaActual].curiosidades[Math.floor(Math.random() * textos[idiomaActual].curiosidades.length)];
    document.getElementById('extraInfo').textContent = curiosidadAleatoria;
    iluminarPagina();
});

// Iniciar música al hacer clic (requerido por algunos navegadores)
document.body.addEventListener('click', function() {
    musica.play().catch(e => console.log("Click para activar audio"));
}, { once: true });

// Inicializar
crearKoalas();
actualizarTextos();