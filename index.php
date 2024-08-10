<!-- index.php -->
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Compartir Archivos</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Compartir archivos</h1>
        <p>Sube tus archivos y comparte enlace temporal: <a href="https://kazu.pe" target="_blank">kazu.pe</a></p>
        <div class="upload-section">
            <div class="drop-zone" id="drop-zone">
                <i class="fas fa-cloud-upload-alt fa-3x"></i>
                <p>Arrastra tus archivos aquí<br>o <a href="#" id="file-selector">Abre el explorador</a></p>
                <input type="file" id="file-input" multiple hidden>
            </div>
            <div id="file-list">
                <p id="no-files-text">No se han subido archivos.</p>
            </div>
        </div>
    </div>
    <script src="scripts.js"></script>
</body>
</html>
