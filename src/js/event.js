
// function mostrar(valor) {
//     let campos = document.getElementsByClassName("card");
//     for (let k = 0; k < campos.length; k++) {
//         campos[k].style.display = "";
//     }
//     document.getElementsByClassName("eventos-" + valor).style.display = "none";
// }

// let btn = document.querySelector('#olho');
// btn.addEventListener('click', function () {
//   let input = document.querySelector('#password');
//   if (input.getAttribute('type') == 'password') {
//     input.setAttribute('type', 'text');
//   } else {
//     input.setAttribute('type', 'password');
//   }
// });

function mostrar(valor) {
    if (valor == "") {
        document.getElementsByClassName("eventos-1").style.display = "show";
        document.getElementsByClassName("eventos-2").style.display = "show";
        document.getElementsByClassName("eventos-3").style.display = "show";
        document.getElementsByClassName("eventos-4").style.display = "show";
    }
    else if (valor == 1) {
        document.getElementsByClassName("eventos-1").style.display = "none";
        document.getElementsByClassName("eventos-2").style.display = "none";
        document.getElementsByClassName("eventos-3").style.display = "none";
        document.getElementsByClassName("eventos-4").style.display = "none";
    }
}