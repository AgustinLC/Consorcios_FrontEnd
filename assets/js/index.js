window.onscroll = function () {
  scroll = document.documentElement.scrollTop;
  header = document.getElementById("header");
  logoLight = document.querySelector(".logo-img.light");
  logoDark = document.querySelector(".logo-img.dark");
  parrafoHeader = document.querySelector(".logo p")

  if (scroll > 0) {
    header.classList.add("nav_mod");
    logoLight.style.display = "none";
    logoDark.style.display = "block";
  } else if (scroll < 20) {
    header.classList.remove("nav_mod");
    logoLight.style.display = "block";
    logoDark.style.display = "none";
  }
};


document.querySelector(".btn__menu").addEventListener("click", animateBars);

var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");

function animateBars() {
  line1__bars.classList.toggle("activeline1__bars-menu");
  line2__bars.classList.toggle("activeline2__bars-menu");
  line3__bars.classList.toggle("activeline3__bars-menu");
}




document.getElementById("btn_menu").addEventListener("click", mostrar_menu);

menu = document.getElementById("header");
body = document.getElementById("container__all");
nav = document.getElementById("nav");

function mostrar_menu() {
  body.classList.toggle("move_content");
  menu.classList.toggle("move_content");
  nav.classList.toggle("move_nav");
}

window.addEventListener("resize", function () {
  if (window.innerWidth > 760) {
    body.classList.remove("move_content");
    menu.classList.remove("move_content");
    nav.classList.remove("move_nav");
  }
});

// Gráficos

if (window.location.href.includes("consumo.html")) {
  // Esta función se ejecutará solo en la página "pagina-relevante.html"
  const ctx = document.getElementById("myChart");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ],
      datasets: [
        {
          label: "Consumo de Agua - 2023 ",
          data: [
            4168, 5185, 5200, 6188, 5200, 5180, 6190, 6200, 5176, 5178, 5190,
            5191,
          ],
          borderWidth: 1,
          borderColor: "black",
          backgroundColor: "#359EF9",
          hoverBackgroundColor: "transparent",
          pointBackgroundColor: "#359EF9",
          borderRadius: 5,
          tension: 0,
          fill: true,
          stepped: true,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      plugins: {
        title: {
          display: true,
          text: "Nombre Usuario - N°02113151",
        },
      },
    },
  });
}
