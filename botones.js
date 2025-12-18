const clasesFondo = ["color1", "color2", "color3", "color4", "color5"];
const clasesTexto = ["color-letra1", "color-letra2", "color-letra3", "color-letra4", "color-letra5"];

export async function loadFragment(id, file) {
  const res = await fetch(file);
  if (!res.ok) {
    console.error("Error cargando", file, res.status);
    return;
  }
  const text = await res.text();
  document.getElementById(id).innerHTML = text;

  const botones = document.querySelectorAll("button:not(.no-hover)");
  const enlaces = document.querySelectorAll("a:not(.no-hover)");

  botones.forEach(boton => {
    boton.addEventListener("mouseover", () => {
    
      clasesFondo.forEach(c => boton.classList.remove(c));
      const claseAleatoriaFondo = clasesFondo[Math.floor(Math.random() * clasesFondo.length)];
      boton.classList.add(claseAleatoriaFondo);
    });
    boton.addEventListener("mouseout", () => {
      clasesFondo.forEach(c => boton.classList.remove(c));
    });
  });

  enlaces.forEach(enlace => {
    enlace.addEventListener("mouseover", () => {
      console.log("hover en botón del footer");

      clasesTexto.forEach(c => enlace.classList.remove(c));
      const claseAleatoriaTexto = clasesTexto[Math.floor(Math.random() * clasesTexto.length)];
      enlace.classList.add(claseAleatoriaTexto);
    });
    enlace.addEventListener("mouseout", () => {
      clasesTexto.forEach(c => enlace.classList.remove(c));
    });
  });
}

loadFragment("header", "header.html");
loadFragment("footer", "footer.html");


export default loadFragment;