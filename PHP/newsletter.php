<?php
// Definizione delle credenziali di accesso al database
$servername = "localhost"; // Indirizzo del server MySQL
$username = "tattooasp"; // Nome utente del database
$password = ""; // Password del database
$db_name = "my_tattoshop"; // Nome del database

// Connessione al database
$conn = mysqli_connect($servername, $username, $password, $db_name); // Creazione di un oggetto di connessione MySQL

// Verifica della connessione
if(!$conn){
    echo "Errore nella connessione!";
 }

// Verifica del metodo della richiesta HTTP (POST)


    $email = $_POST['email'] ;

    

    // inserisco i dati nella tabella
    $query="INSERT INTO newsletter (idNewsletter,email) 
    VALUES('NULL','$email')";



    $result = mysqli_query($conn,$query);
					
    if ($result > 0) {
        // Accesso autorizzato
        echo "prenotazione effettuata correttamente";

    } else {
        // Utente e/o password errati
        echo "prenotazione fallita";
    }
	
	if(!$result){
		echo "Errore";
	}

    header("Location: ../index.html");

    // Chiude la dichiarazione
    $conn->close();
?>
