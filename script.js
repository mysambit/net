document.getElementById("mensaje-inicial").addEventListener("click", function() {
    // Ocultar el mensaje inicial
    this.style.display = "none";

    // Mostrar las animaciones
    const animaciones = document.getElementById("animaciones");
    animaciones.classList.remove("hidden");

    // Cambiar el fondo para un efecto más festivo
    document.body.style.background = "linear-gradient(135deg, #ff6f61, #ffcccb)";
});