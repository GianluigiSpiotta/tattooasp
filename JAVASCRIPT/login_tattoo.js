 function validaForm() {
        var nome = document.getElementById('nome').value;
        var cognome = document.getElementById('cognome').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        if (nome.trim() == '') {
            alert('Inserisci un nome valido.');
            return false;
        }

        if (cognome.trim() == '') {
            alert('Inserisci un cognome valido.');
            return false;
        }

        if (!validaEmail(email)) {
            alert('Inserisci un\'email valida.');
            return false;
        }

        if (password.length < 8) {
            alert('La password deve essere lunga almeno 8 caratteri.');
            return false;
        }

        if (!/[A-Z]/.test(password)) {
            alert('La password deve contenere almeno un carattere maiuscolo.');
            return false;
        }

        if (!/[^a-zA-Z0-9]/.test(password)) {
            alert('La password deve contenere almeno un carattere speciale.');
            return false;
        }

        return true;
    }

    function validaEmail(email) {
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }