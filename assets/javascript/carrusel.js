/* SLIDER HOGAR */
const slides = document.querySelector(".slider").children;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const indicator = document.querySelector(".indicator");
let index = 0;

// Botón anterior
prev.addEventListener("click", function () {
    prevSlide();
    updateCircleIndicator();
    resetTimer();
});

// Botón siguiente
next.addEventListener("click", function () {
    nextSlide();
    updateCircleIndicator();
    resetTimer();
});

// Crear indicadores numerados
function circleIndicator() {
    indicator.innerHTML = "";
    for (let i = 0; i < slides.length; i++) {
        const div = document.createElement("div");
        div.innerHTML = i + 1;
        div.addEventListener("click", function () {
            index = i;
            changeSlide();
            updateCircleIndicator();
            resetTimer();
        });
        if (i === 0) {
            div.className = "active";
        }
        indicator.appendChild(div);
    }
}
circleIndicator();

// Actualizar el indicador activo
function updateCircleIndicator() {
    for (let i = 0; i < indicator.children.length; i++) {
        indicator.children[i].classList.remove("active");
    }
    indicator.children[index].classList.add("active");
}

// Slide anterior
function prevSlide() {
    if (index === 0) {
        index = slides.length - 1;
    } else {
        index--;
    }
    changeSlide();
}

// Slide siguiente
function nextSlide() {
    if (index === slides.length - 1) {
        index = 0;
    } else {
        index++;
    }
    changeSlide();
}

// Cambiar slide visible
function changeSlide() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slides[index].classList.add("active");
}

// Reiniciar temporizador de autoplay
function resetTimer() {
    clearInterval(timer);
    timer = setInterval(autoPlay, 8000);
}

// Autoplay
function autoPlay() {
    nextSlide();
    updateCircleIndicator();
}

let timer = setInterval(autoPlay, 8000);