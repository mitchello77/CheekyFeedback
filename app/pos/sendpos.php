<html>
<body>
<?php

$servername = "localhost";
$username = base64_decode("bWl0Y2hlbGxfY2Jldnk=");
$password = base64_decode("emlPM0M2STg5VDYx=");
$dbname = base64_decode("bWl0Y2hlbGxfY2hlZWt5ZmVlZGJhY2s=");


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// incomming Varibles
$drink = mysqli_real_escape_string($conn, $_POST["drink"]);
$marketday = mysqli_real_escape_string($conn, $_POST["marketday"]);

// Check connection
if ($conn->connect_error) {
   die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO tblSales (tblSales_marketday, tblSales_drinkname)
VALUES ('$marketday','$drink')";

if ($conn->query($sql) === TRUE) {
   echo "New record created successfully";
} else {
   echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
--INFO--
Market Day: <?php echo $marketday; ?><br>
Drink: <?php echo $drink; ?><br>
</body>
</html>
