document.addEventListener('DOMContentLoaded', () => {
    const dropZone = document.getElementById('drop-zone');
    const fileInput = document.getElementById('file-input');
    const fileList = document.getElementById('file-list');
    const fileSelector = document.getElementById('file-selector');
    const noFilesText = document.getElementById('no-files-text');

    let uploadedFiles = []; // Arreglo para almacenar los archivos subidos

    fileSelector.addEventListener('click', (e) => {
        e.preventDefault();
        fileInput.click();
    });

    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('drag-over');
    });

    dropZone.addEventListener('dragleave', () => {
        dropZone.classList.remove('drag-over');
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('drag-over');
        const files = e.dataTransfer.files;
        handleFiles(files);
    });

    fileInput.addEventListener('change', () => {
        const files = fileInput.files;
        handleFiles(files);
    });

    function handleFiles(files) {
        noFilesText.style.display = 'none'; // Ocultar el texto "No se han subido archivos"

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            uploadedFiles.push(file); // Agregar cada archivo al arreglo
        }

        updateFileList();
    }

    function updateFileList() {
        fileList.innerHTML = ''; // Limpiar la lista actual

        if (uploadedFiles.length === 0) {
            noFilesText.style.display = 'block'; // Mostrar el texto si no hay archivos
            return;
        } else {
            noFilesText.style.display = 'none'; // Asegurarse de ocultar el mensaje si hay archivos
        }

        uploadedFiles.forEach((file, index) => {
            let fileName = file.name.replace(/\s+/g, '_'); // Reemplazar espacios por guiones bajos
            const fileSize = (file.size / 1024).toFixed(2); // Tamaño en KB

            const listItem = document.createElement('div');
            listItem.classList.add('file-item');

            const fileInfo = document.createElement('div');
            fileInfo.classList.add('file-info');

            fileInfo.innerHTML = `${fileName} (${fileSize} KB)`;

            const downloadLink = document.createElement('a');
            downloadLink.classList.add('file-link');
            downloadLink.href = URL.createObjectURL(file);
            downloadLink.download = fileName;
            downloadLink.textContent = fileName; // El texto del enlace es el nombre del archivo

            const deleteButton = document.createElement('button');
            deleteButton.classList.add('delete-btn');
            deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
            deleteButton.onclick = () => {
                uploadedFiles.splice(index, 1); // Eliminar el archivo del arreglo
                updateFileList(); // Actualizar la lista
            };

            listItem.appendChild(downloadLink);
            listItem.appendChild(fileInfo);
            listItem.appendChild(deleteButton);
            fileList.appendChild(listItem);
        });
    }

    updateFileList(); // Mostrar el texto inicial si no hay archivos
});
