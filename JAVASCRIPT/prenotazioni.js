function validaForm() {
    var nome = document.getElementById('nome').value;
    var cognome = document.getElementById('Cognome').value;
    var tipoTatuaggio = document.getElementById("tipoTatuaggio").value.toLowerCase();
    var sede = document.getElementById("sede").value.toLowerCase();
    var telefono = document.getElementById("telefono").value;
    var email = document.getElementById("email").value;

    if (nome.trim() == '') {
        alert('Inserisci un nome valido.');
        return false;
    }

    if (cognome.trim() == '') {
        alert('Inserisci un cognome valido.');
        return false;
    }

    // Controlla se il tipo di tatuaggio è valido
    if (tipoTatuaggio !== "colorato" && tipoTatuaggio !== "bianco e nero") {
        alert("Inserisci un tipo di tatuaggio valido: colorato o bianco e nero.");
        return false;
    }

    // Controlla se la sede è valida
    if (sede !== "livorno" && sede !== "pisa" && sede !== "siena") {
        alert("Inserisci una sede valida: Livorno, Pisa o Siena.");
        return false;
    }

    // Controlla se il numero di telefono è valido
    if (!(/^\d+$/.test(telefono)) && telefono.length < 11 && telefono.length > 9) {
        alert("Inserisci un numero di telefono valido.");
        return false;
    }

    // Controlla se l'email è valida
    var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!emailPattern.test(email)) {
        alert("Inserisci un indirizzo email valido.");
        return false;
    }

    // Se tutti i controlli passano, restituisci true per inviare il modulo
    return true;
}
