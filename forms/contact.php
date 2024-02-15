<?php
/**
 * This script uses environment variables to safely configure email sending settings,
 * protecting sensitive information like SMTP credentials.
 */

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$mail = new PHPMailer(true);

try {
    // SMTP server settings
    $mail->isSMTP();
    $mail->Host       = $_ENV['SMTP_HOST'];
    $mail->SMTPAuth   = true;
    $mail->Username   = $_ENV['SMTP_USER'];
    $mail->Password   = $_ENV['SMTP_PASS'];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = $_ENV['SMTP_PORT'];

    // Sender and recipient settings
    $mail->setFrom($_POST['email'], $_POST['name']); // Ensure to sanitize these inputs
    $mail->addAddress($_ENV['RECEIVING_EMAIL_ADDRESS']); // Ensure this is a valid email address

    // Email content
    $mail->isHTML(true); // Set email format to HTML
    $mail->Subject = $_POST['subject']; // Ensure to sanitize this input
    $mail->Body    = $_POST['message']; // Ensure to sanitize this input

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>
