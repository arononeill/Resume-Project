<?php
	// Check for empty fields
    $name = $_POST['name'];
	$userEmail = $_POST['email'];
	$userEnquiry = $_POST['enquiry'];
	$userPhone = $_POST['phone'];
	$userMessage = $_POST['message'];

	$to 			= "arononeill98@gmail.com";
	$subject 		= "Website email enquiry";
	$body 			= "Information Submitted:";
	$headers = "From: noreply@myaddress.com\n";

	$body .= "\r\n Name: " . $name;
	$body .= "\r\n Email: " . $userEmail;
	$body .= "\r\n Enquiry: " . $userEnquiry;

	if ($userPhone != "") {
		$body .= "\r\n Phone No: " . $userPhone;
	}

	$body .= "\r\n Message: " . $userMessage;

	@mail($to, $subject, $body, $headers);
?>