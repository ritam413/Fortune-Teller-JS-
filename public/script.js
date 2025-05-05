document.addEventListener('DOMContentLoaded', () => {
    console.log('HTML fully loaded and parsed.');

    const confirmButton = document.getElementById('confirm')

    confirmButton.addEventListener('click',function(){
    const input = document.getElementById('Input_Number')
    console.log('Input field:', input.value);

    // Send the input to the server using a POST request
    fetch('/fortuneteller', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',  // Ensure it's JSON
        },
        body: JSON.stringify({ input: input.value })  // Send the input value as JSON, NOT the DOM element
    })
    .then(response => response.json())
    .then(data => {
        console.log('Server response:', data);
        // Display the response message inside the div with class 'output'
        const outputDiv = document.querySelector('.Output');  // Get the div with class 'output'
        if (outputDiv) {
            outputDiv.textContent = data.message;  // Set the response message as the text content
        }})
    .catch(error => {
        console.error('Error:', error);
    });
    input.value = '' // Clear the input field after clicking the button
    });
});