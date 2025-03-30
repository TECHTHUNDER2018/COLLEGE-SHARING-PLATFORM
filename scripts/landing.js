// Select the dark mode button
// const darkModeButton = document.getElementById('darkModeButton');

// Check for saved dark mode preference
// if (localStorage.getItem('darkMode') === 'enabled') {
//     document.body.classList.add('dark-mode');
//     darkModeButton.textContent = 'Disable Dark Mode';
// }

// Add an event listener to toggle dark mode
// darkModeButton.addEventListener('click', () => {
//     if (document.body.classList.contains('dark-mode')) {
//         document.body.classList.remove('dark-mode');
//         darkModeButton.textContent = 'Enable Dark Mode';
//         localStorage.setItem('darkMode', 'disabled');
//     } else {
//         document.body.classList.add('dark-mode');
//         darkModeButton.textContent = 'Disable Dark Mode';
//         localStorage.setItem('darkMode', 'enabled');
//     }
// });




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