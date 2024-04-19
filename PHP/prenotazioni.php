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

    $nome = $_POST['nome'] ;
    $cognome = $_POST['cognome'] ;
    $numTel = $_POST['numTel'] ;
    $email = $_POST['email'] ;
    $tipoTatuaggio = $_POST['tipoTatuaggio'] ;
    $dimensioneTatuaggio = $_POST['dimensioneTatuaggio'] ;
    $descrizione = $_POST['descrizione'] ;
    $sede = $_POST['sede'] ;
    

    // inserisco i dati nella tabella
    $query="INSERT INTO prenotazione (idPrenotazione,nome,cognome,numTel,email,tipoTatuaggio,dimensioneTatuaggio,descrizione,sede) 
    VALUES('NULL','$nome','$cognome','$numTel','$email','$tipoTatuaggio','$dimensioneTatuaggio','$descrizione','$sede')";



    $result = mysqli_query($conn,$query);
					
    if ($result > 0) {
        // Accesso autorizzato
        echo "prenotazione effettuata correttamente";

/*
        $id=$last_id = mysqli_insert_id($conn);

        $sql="INSERT INTO effettua(utente,prenotazione)
            VALUES ('$email',$id);";
        $result=mysqli_query($conn,$sql);

*/

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
