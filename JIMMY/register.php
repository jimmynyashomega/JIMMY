<?php

// Connect to the database
$conn = new mysqli("localhost", "root", "", "james");

// Check database connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get data from the form
$fullname = $_POST['fullname'];
$age = $_POST['age'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT);

// Insert data into the database
$sql = "INSERT INTO users (fullname, age, email, phone, password)
        VALUES (?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);

if (!$stmt) {
    die("SQL error: " . $conn->error);
}

$stmt->bind_param("sisss", $fullname, $age, $email, $phone, $password);

// Save the data
if ($stmt->execute()) {
    echo "SAVED SUCCESSFULLY! <a href='index.html'>Go Back</a>";
} else {
    echo "ERROR: " . $stmt->error;
}

// Close the connection
$stmt->close();
$conn->close();

?>