<html>
<body>
<?php

$servername = "localhost";
$username = base64_decode("bWl0Y2hlbGxfY2Jldnk=");
$password = base64_decode("emlPM0M2STg5VDYx=");
$dbname = base64_decode("bWl0Y2hlbGxfY2hlZWt5ZmVlZGJhY2s=");


function get_client_ip() {
    $ipaddress = '';
    if (getenv('HTTP_CLIENT_IP'))
        $ipaddress = getenv('HTTP_CLIENT_IP');
    else if(getenv('HTTP_X_FORWARDED_FOR'))
        $ipaddress = getenv('HTTP_X_FORWARDED_FOR');
    else if(getenv('HTTP_X_FORWARDED'))
        $ipaddress = getenv('HTTP_X_FORWARDED');
    else if(getenv('HTTP_FORWARDED_FOR'))
        $ipaddress = getenv('HTTP_FORWARDED_FOR');
    else if(getenv('HTTP_FORWARDED'))
       $ipaddress = getenv('HTTP_FORWARDED');
    else if(getenv('REMOTE_ADDR'))
        $ipaddress = getenv('REMOTE_ADDR');
    else
        $ipaddress = 'UNKNOWN';
    return $ipaddress;
}

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// incomming Varibles
$age = mysqli_real_escape_string($conn, isset($_POST['age']) ? $_POST['age'] : '0');
$gender = mysqli_real_escape_string($conn, $_POST["gender"]);
$drink = mysqli_real_escape_string($conn, $_POST["drink"]);
$score = mysqli_real_escape_string($conn, $_POST["score"]);
$coupon = mysqli_real_escape_string($conn, $_POST["coupon"]);
$useragent = mysqli_real_escape_string($conn, $_POST["useragent"]);
$device = mysqli_real_escape_string($conn, $_POST["device"]);
$ip = get_client_ip();
date_default_timezone_set("Australia/Brisbane");
$now = date('Y-m-d H:i:s');
// Check connection
if ($conn->connect_error) {
   die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO tblResponses (tblResponses_datetime, tblResponses_drink, tblResponses_rating, tblResponses_couponused, tblResponses_age, tblResponses_gender, tblResponses_useragent, tblResponses_device, tblResponses_ip)
VALUES ('$now','$drink','$score','$coupon','$age','$gender','$useragent','$device','$ip')";

if ($conn->query($sql) === TRUE) {
   echo "New record created successfully";
} else {
   echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
--INFO--
Date: <?php echo $now; ?><br>
Drink: <?php echo $drink; ?><br>
Score: <?php echo $score; ?><br>
Coupon: <?php echo $coupon; ?><br>
Age: <?php echo $age; ?><br>
Gender: <?php echo $gender; ?><br>
Useragent: <?php echo $useragent; ?><br>
Device: <?php echo $device; ?><br>
IP: <?php echo $ip; ?><br>
</body>
</html>
