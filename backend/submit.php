<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require 'db.php';

$data = json_decode(file_get_contents("php://input"), true);

$name = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');
$phone = trim($data['phone'] ?? '');
$message = trim($data['message'] ?? '');
$form_type = trim($data['form_type'] ?? 'consultation');

$emailVal = !empty($email) ? $email : null;
$phoneVal = !empty($phone) ? $phone : null;
$messageVal = !empty($message) ? $message : null;

// validation
$errors = [];
if (empty($name)) $errors[] = "Имя не должно быть пустым.";

if (!empty($email) && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["success" => false, "message" => "Некорректный email."]);
    exit;
}

if (!empty($phone) && !preg_match('/^\+?\d{10,15}$/', preg_replace('/[\s()-]/', '', $phone))) {
    $errors[] = "Некорректный телефон.";
}

if (!empty($errors)) {
    echo json_encode(["success" => false, "message" => implode(" ", $errors)]);
    exit;
}

// checking 5 minutes cooldown
if ($form_type === 'consultation' && !empty($phone)) {
    // for consult form
    $stmt = $conn->prepare("
        SELECT id FROM requests 
        WHERE phone = ? AND form_type = 'consultation'
          AND created_at >= NOW() - INTERVAL 5 MINUTE
    ");
    $stmt->bind_param("s", $phone);
} else {
    // for others
    $stmt = $conn->prepare("
        SELECT id FROM requests 
        WHERE name = ? AND form_type = ?
          AND created_at >= NOW() - INTERVAL 5 MINUTE
    ");
    $stmt->bind_param("ss", $name, $form_type);
}

$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows > 0) {
    echo json_encode([
        "success" => false,
        "message" => "Вы уже отправляли заявку в последние 5 минут."
    ]);
    $stmt->close();
    $conn->close();
    exit;
}
$stmt->close();

// insert db
$stmt = $conn->prepare("
    INSERT INTO requests (name, email, phone, message, form_type)
    VALUES (?, ?, ?, ?, ?)
");
$stmt->bind_param(
    "sssss",
    $name,
    $emailVal,
    $phoneVal,
    $messageVal,
    $form_type
);

$result = $stmt->execute();

if ($result) {
    echo json_encode(["success" => true, "message" => "Заявка успешно отправлена!"]);
} else {
    echo json_encode(["success" => false, "message" => "Ошибка базы данных: " . $conn->error]);
}

$stmt->close();
$conn->close();
?>