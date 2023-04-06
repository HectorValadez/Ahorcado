var nombre_j1 = localStorage.getItem("player1")
var nombre_j2 = localStorage.getItem("player2")
var puntos_j1 = 0;
var puntos_j2 = 0;
var te_toca_preguntar = nombre_j1
var te_toca_responder = nombre_j2
document.getElementById("nombre_j1").innerHTML = nombre_j1 + ": ";
document.getElementById("nombre_j2").innerHTML = nombre_j2 + ": ";
document.getElementById("puntos_j1").innerHTML = puntos_j1 + " puntos";
document.getElementById("puntos_j2").innerHTML = puntos_j2 + " puntos";
document.getElementById("te_toca_preguntar").innerHTML = te_toca_preguntar + " te toca preguntar";

function enviar() {
    palabra = document.getElementById("palabra").value;
    var segunda = palabra.charAt(1);
    var penultima = palabra.charAt(palabra.length - 2);
    var mitad = palabra.charAt(Math.round(palabra.length / 2));
    var palabra_escondida = palabra.replace(segunda, "_");
    palabra_escondida = palabra_escondida.replace(penultima, "_");
    palabra_escondida = palabra_escondida.replace(mitad, "_");
    console.log(palabra_escondida)
    document.getElementById("descubre").innerHTML = '<h3 id="te_toca_responder">'+te_toca_responder+' te toca responder</h3><h4 id="descubrir_palabra">' + palabra_escondida + '</h4><br><input type="text" id="respuesta" placeholder="escribe lo que tu piensas"><button class="btn btn-success" onclick="comprobar()">comprobar palabra</button><br>'
    document.getElementById("palabra").value = ""
    document.getElementById("esconder").style.display="none"

}
function comprobar() {
    respuesta = document.getElementById("respuesta").value;
    if (te_toca_responder == nombre_j1) {
        if (palabra.toLowerCase() == respuesta.toLowerCase()){
            puntos_j1++;
        }else{
            puntos_j2++;
        }
        te_toca_preguntar = nombre_j1
        te_toca_responder = nombre_j2
    } else {
        if (palabra.toLowerCase() == respuesta.toLowerCase()){
            puntos_j2++;
        }else{
            puntos_j1++;
        }
        te_toca_preguntar = nombre_j2
        te_toca_responder = nombre_j1

    }
    document.getElementById("puntos_j1").innerHTML = puntos_j1 + " puntos";
    document.getElementById("puntos_j2").innerHTML = puntos_j2 + " puntos";
    document.getElementById("te_toca_preguntar").innerHTML = te_toca_preguntar + " te toca preguntar";
    document.getElementById("te_toca_responder").innerHTML = te_toca_responder + " te toca responder";
    document.getElementById("descubre").innerHTML=""
    document.getElementById("esconder").style.display="block"
    
}