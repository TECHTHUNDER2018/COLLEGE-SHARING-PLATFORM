document.addEventListener('DOMContentLoaded', function() {
    // College Filtering
    const collegeType = document.getElementById('collegeType');
    const collegeLocation = document.getElementById('collegeLocation');
    const collegeCards = document.querySelectorAll('.college-card');

    function filterColleges() {
        const typeValue = collegeType.value;
        const locationValue = collegeLocation.value;

        collegeCards.forEach(card => {
            const type = card.dataset.type;
            card.style.display = 
                (typeValue === '' || type === typeValue) ? 'block' : 'none';
        });
    }

    collegeType.addEventListener('change', filterColleges);
    collegeLocation.addEventListener('change', filterColleges);

    // Follow Button
    const followButton = document.getElementById('followButton');
    let isFollowing = false;

    followButton.addEventListener('click', function() {
        isFollowing = !isFollowing;
        followButton.textContent = isFollowing ? 'Following' : 'Follow';
        followButton.style.backgroundColor = 
            isFollowing ? '#28a745' : '#0078d7';
    });

    // Dark Mode (copy from landing.js)
    // Dark Mode Toggle
const darkModeButton = document.getElementById('darkModeButton');
const body = document.body;

// Toggle Dark Mode
darkModeButton.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    if (currentTheme === 'light') {
        body.setAttribute('data-theme', 'dark');
        darkModeButton.textContent = 'Disable Dark Mode';
    } else {
        body.setAttribute('data-theme', 'light');
        darkModeButton.textContent = 'Enable Dark Mode';
    }
});
});