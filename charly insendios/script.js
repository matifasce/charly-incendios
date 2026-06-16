document.addEventListener("DOMContentLoaded", () => {
    console.log("Estructura de Barraza Montajes Industriales cargada correctamente.");

    const wrappers = document.querySelectorAll(".carousel-wrapper");

    wrappers.forEach((wrapper) => {
        const track = wrapper.querySelector(".carousel-track");
        const prevBtn = wrapper.querySelector(".prev-btn");
        const nextBtn = wrapper.querySelector(".next-btn");
        const slides = track.querySelectorAll(".carousel-slide");

        if (slides.length === 0) return;

        let currentIndex = 0;
        let autoPlayTimer;

        // Inicializamos forzando a que la primera foto tenga la clase active
        slides.forEach((slide, idx) => {
            if (idx === 0) {
                slide.classList.add("active");
            } else {
                slide.classList.remove("active");
            }
        });

        function showSlide(index) {
            // Quitamos la clase activa a la foto que se estaba mostrando
            slides[currentIndex].classList.remove("active");

            // Calculamos el próximo índice de forma segura
            if (index < 0) {
                currentIndex = slides.length - 1;
            } else if (index >= slides.length) {
                currentIndex = 0;
            } else {
                currentIndex = index;
            }

            // Le ponemos la clase activa a la nueva foto elegida
            slides[currentIndex].classList.add("active");
        }

        nextBtn.addEventListener("click", () => {
            showSlide(currentIndex + 1);
            resetAutoPlay();
        });

        prevBtn.addEventListener("click", () => {
            showSlide(currentIndex - 1);
            resetAutoPlay();
        });

        function startAutoPlay() {
            autoPlayTimer = setInterval(() => {
                showSlide(currentIndex + 1);
            }, 4000);
        }

        function resetAutoPlay() {
            clearInterval(autoPlayTimer);
            startAutoPlay();
        }

        startAutoPlay();
    });

    // Mantenemos tu diagnóstico activo por seguridad
    document.querySelectorAll('.carousel-slide img').forEach(img => {
        img.onerror = function() {
            console.error("❌ ERROR crítico de carga en:", this.src);
        };
    });
});


