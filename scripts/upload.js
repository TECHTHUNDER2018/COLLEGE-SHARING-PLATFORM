document.addEventListener('DOMContentLoaded', function() {
    const uploadForm = document.getElementById('uploadForm');
    const previewButton = document.getElementById('previewButton');
    const previewSection = document.getElementById('previewSection');
    const fileInput = document.getElementById('file');
    const preview = document.querySelector('.preview-content');

    // Preview Button Click Handler
    previewButton.addEventListener('click', function() {
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const college = document.getElementById('college').value;
        const semester = document.getElementById('semester').value;
        const subject = document.getElementById('subject').value;
        const resourceType = document.getElementById('resourceType').value;

        // Show preview section
        previewSection.classList.add('active');
        
        // Update preview content
        preview.innerHTML = `
            <h4>${title}</h4>
            <p><strong>Description:</strong> ${description}</p>
            <p><strong>College:</strong> ${college}</p>
            <p><strong>Semester:</strong> ${semester}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Type:</strong> ${resourceType}</p>
            <p><strong>File:</strong> ${fileInput.files[0]?.name || 'No file selected'}</p>
        `;
    });

    // Form Submit Handler
    uploadForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Add your form submission logic here
        // You can use FormData to handle file uploads
        const formData = new FormData(uploadForm);
        
        // Show success message
        alert('Resource uploaded successfully!');
        uploadForm.reset();
        previewSection.classList.remove('active');
    });

    // File Input Change Handler
    fileInput.addEventListener('change', function() {
        const fileInfo = document.querySelector('.file-info');
        const file = fileInput.files[0];
        
        if (file) {
            // Check file size (10MB limit)
            if (file.size > 10 * 1024 * 1024) {
                alert('File size exceeds 10MB limit');
                fileInput.value = '';
                return;
            }
            
            // Update file info text
            fileInfo.textContent = `Selected file: ${file.name} (${(file.size / 1024 / 1024).toFixed(2)}MB)`;
        }
    });
});