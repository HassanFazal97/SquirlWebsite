const teamContainer = document.querySelector('.team-container');

let isDown = false; // Track if the mouse is pressed
let startX; // Store the initial X position of the mouse
let scrollLeft; // Store the initial scroll position

teamContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    teamContainer.classList.add('active'); // Add a visual cue (optional)
    startX = e.pageX - teamContainer.offsetLeft; // Get initial mouse position
    scrollLeft = teamContainer.scrollLeft; // Get initial scroll position
    teamContainer.style.cursor = 'grabbing'; // Change cursor while dragging
});

teamContainer.addEventListener('mouseleave', () => {
    isDown = false;
    teamContainer.style.cursor = 'grab';
});

teamContainer.addEventListener('mouseup', () => {
    isDown = false;
    teamContainer.style.cursor = 'grab';
});

teamContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return; // Exit if not dragging
    e.preventDefault(); // Prevent default behavior like text selection
    const x = e.pageX - teamContainer.offsetLeft; // Get current mouse position
    const walk = (x - startX) * 2; // Multiply for faster scrolling
    teamContainer.scrollLeft = scrollLeft - walk; // Adjust scroll position
});
