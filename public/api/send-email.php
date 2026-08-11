<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Solo aceptar POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['error' => 'Método no permitido']);
  exit;
}

// Leer datos del body
$input = json_decode(file_get_contents('php://input'), true);

$name = trim($input['name'] ?? '');
$company = trim($input['company'] ?? '');
$email = trim($input['email'] ?? '');
$phone = trim($input['phone'] ?? '');
$message = trim($input['message'] ?? '');
$website = trim($input['website'] ?? '');

// Honeypot
if (!empty($website)) {
  echo json_encode(['success' => true]);
  exit;
}

// Validar campos
if (empty($name) || empty($company) || empty($email) || empty($phone) || empty($message)) {
  http_response_code(400);
  echo json_encode(['error' => 'Todos los campos son obligatorios.']);
  exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode(['error' => 'Email inválido.']);
  exit;
}

// WhatsApp obligatorio con formato válido
$phoneDigits = preg_replace('/[^\d+]/', '', $phone);
if (!preg_match('/^\+?\d{8,15}$/', $phoneDigits)) {
  http_response_code(400);
  echo json_encode(['error' => 'Número de WhatsApp inválido.']);
  exit;
}

// Configuración SMTP
$smtp_host = 'smtp.hostinger.com';
$smtp_port = 587;
$smtp_user = 'consultas@garolainoxidable.com.ar';
$smtp_pass = '7rj$9&z>S';

// Email config
$from = 'consultas@garolainoxidable.com.ar';
$from_name = 'Garola Inoxidable';
$to = 'garolainoxidable@gmail.com';
$reply_to = $email;
$subject = 'Nueva consulta - Garola Inoxidable';

// Template HTML
$phoneHtml = '';
if (!empty($phone)) {
  $phoneLink = preg_replace('/\D/', '', $phone);
  $phoneHtml = '
            <p style="margin:0 0 4px 0; color:#94a3b8; font-size:11px; text-transform:uppercase; letter-spacing:1px;">WhatsApp</p>
            <p style="margin:0 0 20px 0;">
              <a href="https://wa.me/' . htmlspecialchars($phoneLink) . '" style="color:#DC2828; font-size:16px; font-weight:bold; text-decoration:none;">' . htmlspecialchars($phone) . '</a>
            </p>';
}
$htmlBody = '
<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"></head>
<body style="margin:0; padding:0; background-color:#14171A; font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#14171A; padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background-color:#1a1f24; border:1px solid #334155;">
        <tr>
          <td style="background-color:#DC2828; padding:24px 32px;">
            <p style="margin:0; color:#ffffff; font-size:20px; font-weight:bold; letter-spacing:2px; text-transform:uppercase;">GAROLA INOXIDABLE</p>
            <p style="margin:8px 0 0 0; color:#fecaca; font-size:12px; letter-spacing:1px; text-transform:uppercase;">Nueva consulta del sitio web</p>
          </td>
        </tr>
        <tr>
          <td style="padding:32px;">
            <p style="margin:0 0 4px 0; color:#94a3b8; font-size:11px; text-transform:uppercase; letter-spacing:1px;">Nombre</p>
            <p style="margin:0 0 20px 0; color:#ffffff; font-size:16px; font-weight:bold;">' . htmlspecialchars($name) . '</p>
            <p style="margin:0 0 4px 0; color:#94a3b8; font-size:11px; text-transform:uppercase; letter-spacing:1px;">Empresa</p>
            <p style="margin:0 0 20px 0; color:#ffffff; font-size:16px; font-weight:bold;">' . htmlspecialchars($company) . '</p>
            ' . $phoneHtml . '
            <p style="margin:0 0 4px 0; color:#94a3b8; font-size:11px; text-transform:uppercase; letter-spacing:1px;">Email</p>
            <p style="margin:0 0 20px 0;">
              <a href="mailto:' . htmlspecialchars($email) . '" style="color:#DC2828; font-size:16px; font-weight:bold; text-decoration:none;">' . htmlspecialchars($email) . '</a>
            </p>
            <hr style="border:none; border-top:1px solid #334155; margin:20px 0;">
            <p style="margin:0 0 4px 0; color:#94a3b8; font-size:11px; text-transform:uppercase; letter-spacing:1px;">Mensaje</p>
            <p style="margin:0; color:#e2e8f0; font-size:15px; line-height:1.7;">' . nl2br(htmlspecialchars($message)) . '</p>
          </td>
        </tr>
        <tr>
          <td style="background-color:#0f172a; padding:16px 32px; text-align:center;">
            <p style="margin:0; color:#64748b; font-size:11px; letter-spacing:1px; text-transform:uppercase;">garolainoxidable.com.ar</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>';

// Enviar por SMTP
$result = sendSmtpEmail($smtp_host, $smtp_port, $smtp_user, $smtp_pass, $from, $from_name, $to, $reply_to, $name, $subject, $htmlBody);

if ($result['success']) {
  echo json_encode(['success' => true, 'message' => 'Consulta enviada correctamente.']);
} else {
  http_response_code(500);
  echo json_encode(['error' => 'Error al enviar: ' . $result['error']]);
}

// Función SMTP nativa
function sendSmtpEmail($host, $port, $user, $pass, $from, $fromName, $to, $replyTo, $replyName, $subject, $htmlBody)
{
  try {
    // Conectar por TCP
    $socket = fsockopen('tcp://' . $host, $port, $errno, $errstr, 30);
    if (!$socket) {
      return ['success' => false, 'error' => "No se pudo conectar: $errstr ($errno)"];
    }

    // Leer saludo
    $response = fgets($socket, 4096);
    if (substr($response, 0, 3) !== '220') {
      fclose($socket);
      return ['success' => false, 'error' => 'Saludo SMTP fallido: ' . $response];
    }

    // EHLO
    fwrite($socket, "EHLO garolainoxidable.com.ar\r\n");
    // Leer toda la respuesta multi-línea de EHLO
    do {
      $response = fgets($socket, 4096);
    } while (substr($response, 3, 1) !== ' ');

    // STARTTLS
    fwrite($socket, "STARTTLS\r\n");
    $response = fgets($socket, 4096);
    if (substr($response, 0, 3) !== '220') {
      fclose($socket);
      return ['success' => false, 'error' => 'STARTTLS fallido: ' . $response];
    }

    // Activar TLS
    stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLSv1_2_CLIENT);

    // EHLO de nuevo después de TLS
    fwrite($socket, "EHLO garolainoxidable.com.ar\r\n");
    do {
      $response = fgets($socket, 4096);
    } while (substr($response, 3, 1) !== ' ');

    // AUTH LOGIN
    fwrite($socket, "AUTH LOGIN\r\n");
    $response = fgets($socket, 4096);

    // Usuario (base64)
    fwrite($socket, base64_encode($user) . "\r\n");
    $response = fgets($socket, 4096);

    // Contraseña (base64)
    fwrite($socket, base64_encode($pass) . "\r\n");
    $response = fgets($socket, 4096);
    if (substr($response, 0, 3) !== '235') {
      fclose($socket);
      return ['success' => false, 'error' => 'Autenticación fallida: ' . $response];
    }

    // MAIL FROM
    fwrite($socket, "MAIL FROM:<$from>\r\n");
    $response = fgets($socket, 4096);

    // RCPT TO
    fwrite($socket, "RCPT TO:<$to>\r\n");
    $response = fgets($socket, 4096);

    // DATA
    fwrite($socket, "DATA\r\n");
    $response = fgets($socket, 4096);

    // Boundary para multipart
    $boundary = md5(uniqid(time()));

    // Headers del email
    $headers = "From: $fromName <$from>\r\n";
    $headers .= "Reply-To: $replyName <$replyTo>\r\n";
    $headers .= "To: $to\r\n";
    $headers .= "Subject: =?UTF-8?B?" . base64_encode($subject) . "?=\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: multipart/alternative; boundary=\"$boundary\"\r\n";
    $headers .= "Date: " . date('r') . "\r\n";
    $headers .= "Message-ID: <" . uniqid() . "@garolainoxidable.com.ar>\r\n";

    // Cuerpo del email
    $body = "--$boundary\r\n";
    $body .= "Content-Type: text/html; charset=UTF-8\r\n";
    $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
    $body .= chunk_split(base64_encode($htmlBody)) . "\r\n";
    $body .= "--$boundary--\r\n";

    // Enviar contenido
    fwrite($socket, $headers . "\r\n" . $body . "\r\n.\r\n");
    $response = fgets($socket, 4096);
    if (substr($response, 0, 3) !== '250') {
      fclose($socket);
      return ['success' => false, 'error' => 'Envío fallido: ' . $response];
    }

    // QUIT
    fwrite($socket, "QUIT\r\n");
    fclose($socket);

    return ['success' => true, 'error' => null];
  } catch (Exception $e) {
    return ['success' => false, 'error' => $e->getMessage()];
  }
}
