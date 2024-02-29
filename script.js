window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY > 0);

    // Obtén las referencias de ambas imágenes de logo
    var logo1 = document.getElementById("logo1");
    var logo2 = document.getElementById("logo2");

    // Alterna la visibilidad de los logos
    if (window.scrollY > 0) {
        logo1.classList.add("hidden");
        logo2.classList.remove("hidden");
    } else {
        logo1.classList.remove("hidden");
        logo2.classList.add("hidden");
    }
});