// Smooth Scroll (Optional: Modern browsers already support CSS-based smooth scrolling)
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const form = document.getElementById('contactForm');
const responseMessage = document.getElementById('responseMessage');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value,
    };

    try {
        const response = await fetch('http://localhost:3000/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            responseMessage.textContent = 'Message sent successfully!';
            form.reset();
        } else {
            responseMessage.textContent = 'Failed to send message.';
        }
    } catch (error) {
        responseMessage.textContent = 'An error occurred. Please try again.';
        console.error(error);
    }
});
