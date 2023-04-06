function iniciar(){
    var jugador1 = document.getElementById("jugador1").value;
    var jugador2 = document.getElementById("jugador2").value;
    localStorage.setItem("player1",jugador1);
    localStorage.setItem("player2",jugador2);
    window.location = "adivinanza.html";

}