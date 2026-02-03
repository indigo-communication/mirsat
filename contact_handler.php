<?php
/**
 * Contact Form Handler for Mirsat Organisation
 * Email: admin@mirsat.org
 */

// Security headers
header('Content-Type: application/json');
header('X-Content-Type-Options: nosniff');

// Enable error reporting for debugging (disable in production)
// error_reporting(E_ALL);
// ini_set('display_errors', 1);

// Configuration
$to_email = "admin@mirsat.org";
$site_name = "Mirsat Organisation";

// Check if request is POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method not allowed"]);
    exit;
}

// Get POST data
$name = isset($_POST['name']) ? trim($_POST['name']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$subject = isset($_POST['subject']) ? trim($_POST['subject']) : 'Contact Form Submission';
$message = isset($_POST['message']) ? trim($_POST['message']) : '';

// Validation
$errors = [];

if (empty($name)) {
    $errors[] = "Name is required";
}

if (empty($email)) {
    $errors[] = "Email is required";
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = "Invalid email format";
}

if (empty($message)) {
    $errors[] = "Message is required";
}

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => implode(", ", $errors)]);
    exit;
}

// Build email content
$email_subject = "[$site_name] $subject";
$email_body = "You have received a new message from the contact form.\n\n";
$email_body .= "Name: $name\n";
$email_body .= "Email: $email\n";
$email_body .= "Subject: $subject\n\n";
$email_body .= "Message:\n$message\n";

// Email headers
$headers = "From: $site_name <$to_email>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send email
if (mail($to_email, $email_subject, $email_body, $headers)) {
    http_response_code(200);
    echo json_encode([
        "success" => true,
        "message" => "Thank you for your message. We will get back to you soon!"
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "Failed to send email. Please try again later."
    ]);
}
?>
