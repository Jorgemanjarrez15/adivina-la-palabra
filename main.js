const $btnGenerar = document.querySelector(".btn-generar");
const $contenedor = document.querySelector(".cajas-container");
const $btnComprobar = document.querySelector(".btn-comprobar");
const $descripcionPalabra = document.querySelector(".descripcion")

const palabras = [
  {
    palabra: "AGUA",
    descripcion: "Es una sustancia que se compone por dos átomos de hidrógeno y un átomo de oxígeno y se puede encontrar en estado sólido, gaseoso y líquido"
  },
  {
    palabra: "CODIGO",
    descripcion: "Es el conjunto de instrucciones que un desarrollador ordena ejecutar a un computador"
  },
  {
    palabra: "FUNCION",
    descripcion: "Bloques de codigo reutilizables que pueden o no recibir y devover valores"
  },
  {
    palabra: "ARRAY",
    descripcion: "son un tipo de variable que permiten tener más de un elemento, (o valor en su interior), a los que se pueden acceder mediante un índice"
  },
  {
    palabra: "OBJETO",
    descripcion: "Se trata de un ente abstracto usado en programación que permite separar los diferentes componentes de un programa, simplificando así su elaboración, depuración y posteriores mejoras"
  }
];
let arrValoresCaja = [];
let palabraUnida = null;
let palabraAAdivinar = null;

$btnGenerar.addEventListener("click", () => {
  // numero random
  const numero = Math.floor(Math.random() * palabras.length);
  // guarda en arrValoresCaja
  palabraAAdivinar = palabras[numero].palabra;
  $descripcionPalabra.innerHTML = palabras[numero].descripcion;
  // crear fila (div) e insertarle inputs
  for(let i = 1; i <= 3; i++) {
    const $fila = document.createElement("div");
    $fila.classList.add("fila"+i);
    $fila.innerHTML = `<input type="text" class="caja${i}" maxlength=1 />`.repeat(palabraAAdivinar.length)
    $contenedor.appendChild($fila);
    $btnGenerar.classList.add("disabled");
  }
});

let contador = 1;
let caracterCaja = null;
$btnComprobar.addEventListener("click", () => {
  // recorrer inputs segun la clase por eso un contador
  // al dar el primer click recorrera la cajas de la primera linea
  // al dar el segundo click recorrera la cajas de la segunda linea
  // y así sucesivamente
  const $cajas = document.querySelectorAll(`.caja${contador}`);
  $cajas.forEach(caja => {
    caracterCaja = caja.value;
    arrValoresCaja.push(caracterCaja);
    palabraUnida = arrValoresCaja.join("");

  })

  if(caracterCaja === ""){
    alert("Escibe algo")
  }
  else if(palabraUnida.toUpperCase() == palabraAAdivinar) {
    alert("Has ganado");
    location.reload();
  }
  // decimos en que linea ha perdido
  else{
    if(contador === 1) {
      alert("Has perdido en la primera linea");
      $cajas.forEach(caja => {
        caja.disabled=true;
      })
      contador++;
    }
    else if(contador === 2) {
      alert("Has perdido en la segunda linea");
      $cajas.forEach(caja => {
        caja.disabled=true;
      })
      contador++;
    }
    else{
      alert("Has perdido ya no tienes mas lineas");
      location.reload();
    }
    arrValoresCaja = [];
  }
})

