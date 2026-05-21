
//FUNCION PARA DESAPARECER CUBIERTA
const Vanish = document.querySelectorAll(".vanish-off");/***deberia ser ID****/
const buttonVanish = document.getElementById("botonPlay");

buttonVanish.addEventListener("click", () => { /***********/

  Vanish.forEach(Vanish => {

    if(Vanish.classList.contains("vanish-off")){

      Vanish.classList.remove("vanish-off");
      Vanish.classList.add("vanish-on");

    }
    /*else{

      Vanish.classList.remove("vanish-on");
      Vanish.classList.add("vanish-off");

    }*/
  });

});

//FUNCION INICIAL PARA AJUSTAR CONTENEDOR
        const container = document.querySelector('.container-img');
        
        function logContainerDimensions() {
            console.log('Container Width:', container.offsetWidth + 'px');
            console.log('Container Height:', container.offsetHeight + 'px');
        }

        // Log on load
        window.addEventListener('load', logContainerDimensions);

        // Log on resize
        window.addEventListener('resize', logContainerDimensions);

//FUNCION ZOOM-ON-SCROLL
const zoom = document.querySelectorAll('.zoom');
function zoomScroll() {
  const alturaPantalla = window.innerHeight;

  zoom.forEach(el => {
    const distancia = el.getBoundingClientRect().top;

    if (distancia < alturaPantalla - 80) {
      el.classList.add('zoom-on');
    }
    else {
        el.classList.remove('zoom-on');
        el.classList.add('zoom');
      }
  });
}
window.addEventListener('scroll', zoomScroll);

//FUNCION SLIDE-ON-SCROLL
const slide = document.querySelectorAll('.left-slide');
function slideScroll() {
  const alturaPantalla = window.innerHeight;

  slide.forEach(el => {
    const distancia = el.getBoundingClientRect().top;

    if (distancia < alturaPantalla - 50) {
      el.classList.add('left-slide-on');
    }
    else {
        el.classList.remove('left-slide-on')
      }
  });
}
window.addEventListener('scroll', slideScroll);


//REPRODUCTOR DE MUSICA
const audio = document.getElementById('miAudio');
const button = document.getElementById('botonPlay');

button.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        button.innerHTML = '❚❚'; // Cambia a icono de pausa
    } else {
        audio.pause();
        button.innerHTML = '▶'; // Cambia a icono de play
    }
});


//CUENTA REGRESIVA 

const fechaObjetivo = new Date("Oct 31, 2026 16:00:00").getTime();

        const actualizarContador = () => {

            const ahora = new Date().getTime();
            const diferencia = fechaObjetivo - ahora;

            const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

            const horas = Math.floor(
                (diferencia % (1000 * 60 * 60 * 24))
                / (1000 * 60 * 60)
            );

            const minutos = Math.floor(
                (diferencia % (1000 * 60 * 60))
                / (1000 * 60)
            );

            const segundos = Math.floor(
                (diferencia % (1000 * 60))
                / 1000
            );

            document.getElementById("dias").innerHTML = dias;
            document.getElementById("horas").innerHTML = horas;
            document.getElementById("minutos").innerHTML = minutos;
            document.getElementById("segundos").innerHTML = segundos;

            // Cuando termina
            if(diferencia < 0){
                clearInterval(intervalo);

                document.querySelector(".contador").innerHTML = `
                    <h1>¡La cuenta terminó!</h1>
                `;
            }
        };

        actualizarContador();

        const intervalo = setInterval(actualizarContador, 1000);
