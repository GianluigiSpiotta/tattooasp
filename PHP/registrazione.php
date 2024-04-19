<?php
// Connessione al database
$servername = "localhost";
$username = "tattooasp";
$password = "";
$dbname = "my_tattoshop";

$conn = mysqli_connect($servername, $username, $password, $dbname);


if(!$conn){
   echo "Errore nella connessione!";
}

    $email = $_POST['email'];
    $pw = $_POST['password'];
    $nome = $_POST['nome'];
    $cognome = $_POST['cognome'];
    

    $pw_MD5=md5($pw);

	$query="INSERT INTO utente (email,nome,cognome,password)
		VALUES('$email','$nome','$cognome','$pw_MD5')";
		
	$result = mysqli_query($conn,$query);
					
    if ($result > 0) {
        // Accesso autorizzato
        echo "Registrazione effettuata correttamente";
    } else {
        // Utente e/o password errati
        echo "Registrazione fallita";
    }
	
	if(!$result){
		echo "Errore";
	}

    header("Location: ../index.html");

$conn->close();
?>