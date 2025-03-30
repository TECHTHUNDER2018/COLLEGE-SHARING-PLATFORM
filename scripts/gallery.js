// Dark Mode Toggle
const darkModeButton = document.getElementById('darkModeButton');
const body = document.body;

// Toggle Dark Mode
darkModeButton.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    if (currentTheme === 'light') {
        body.setAttribute('data-theme', 'dark');
        darkModeButton.textContent = '☀️'; // Change icon to sun
    } else {
        body.setAttribute('data-theme', 'light');
        darkModeButton.textContent = '🌙'; // Change icon to moon
    }
});


document.addEventListener('DOMContentLoaded', function() {
    // Like Button Functionality
    const likeButton = document.getElementById('likeButton');
    const likeCount = document.getElementById('likeCount');
    let isLiked = false;
    let likes = 0;

    likeButton.addEventListener('click', function() {
        if (!isLiked) {
            likes++;
            likeButton.classList.add('liked');
            likeButton.style.backgroundColor = '#005bb5';
        } else {
            likes--;
            likeButton.classList.remove('liked');
            likeButton.style.backgroundColor = '#0078d7';
        }
        isLiked = !isLiked;
        likeCount.textContent = likes;
    });

    // Comment Functionality
    const commentButton = document.getElementById('commentButton');
    const commentsSection = document.getElementById('commentsSection');
    const commentInput = document.getElementById('commentInput');
    const submitComment = document.getElementById('submitComment');
    const commentsList = document.getElementById('commentsList');

    commentButton.addEventListener('click', function() {
        commentsSection.style.display = 
            commentsSection.style.display === 'none' ? 'block' : 'none';
    });

    submitComment.addEventListener('click', function() {
        const commentText = commentInput.value.trim();
        if (commentText) {
            const commentElement = document.createElement('div');
            commentElement.className = 'comment';
            commentElement.innerHTML = `
                <img src="images/default-avatar.jpg" alt="User" class="comment-avatar">
                <div class="comment-content">
                    <p class="comment-author">Anonymous User</p>
                    <p class="comment-text">${commentText}</p>
                    <p class="comment-time">Just now</p>
                </div>
            `;
            commentsList.prepend(commentElement);
            commentInput.value = '';
        }
    });

    // Download Button Functionality
    const downloadButton = document.getElementById('downloadButton');
    const viewCount = document.getElementById('viewCount');
    let views = parseInt(viewCount.textContent);

    downloadButton.addEventListener('click', function() {
        // Increment view count
        views++;
        viewCount.textContent = views;

        // Create download link
        const link = document.createElement('a');
        link.href = 'resources/QUANTUM PHYSICS .pdf';
        link.download = 'QUANTUM_PHYSICS.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});