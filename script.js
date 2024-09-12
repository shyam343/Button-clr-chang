const button = document.getElementById('colorButton');
button.addEventListener('click', () => {
    // Change the button color
    const currentColor = button.style.backgroundColor;
    button.style.backgroundColor = currentColor === 'blue' ? 'green' : 'blue';
    
    // Display a greeting message based on the current time
    const now = new Date();
    const hour = now.getHours();
    let greeting;

    if (hour < 12) {
        greeting = "Good Morning!";
    } else if (hour < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    alert(greeting);
});