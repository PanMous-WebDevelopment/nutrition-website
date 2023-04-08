<?php

    define('DB_SERVER', 'localhost');
	define('DB_USERNAME', 'root');
	define('DB_PASSWORD', '');
	define('DB_DATABASE', 'diet');
	
    function getDB() 
	{
		$dbhost=DB_SERVER;
		$dbuser=DB_USERNAME;
		$dbpass=DB_PASSWORD;
		$dbname=DB_DATABASE;
		$dbConnection = new PDO("mysql:host=$dbhost;dbname=$dbname;charset=utf8", $dbuser, $dbpass);	
		$dbConnection->exec("set names 'utf8';");
		$dbConnection->exec("SET CHARACTER SET 'utf8';"); 
		$dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		return $dbConnection;
	}
	
	$fname = $_POST['username'];
    $fpass = $_POST['pass'];
    $fnm = $_POST['nm'];
    $femail = $_POST['email'];

	$sql = "INSERT INTO users (username, password, name, email) VALUES (:username, :pass, :nm, :email)";
    
	try {
        $dbCon = getDB();
        $stmt = $dbCon->prepare($sql);  
        $stmt->bindParam("username", $fname);
		$stmt->bindParam("pass", $fpass);
		$stmt->bindParam("nm", $fnm);
		$stmt->bindParam("email", $femail);
        $stmt->execute();
        //$order_delivered = $stmt->fetchObject();  
        $dbCon = null;
        //echo json_encode($order_delivered);
    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}'; 
    }

?>