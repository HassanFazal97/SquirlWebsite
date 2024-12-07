document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    try {
        const response = await fetch('/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        });

        const result = await response.json();
        if (response.ok) {
            alert('Message sent successfully!');
        } else {
            alert(`Error: ${result.error}`);
        }
    } catch (error) {
        alert('Something went wrong. Please try again later.');
    }
});
