// script.js

document.getElementById('smoothie-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Get the values from the form fields
    const base = document.getElementById('base').value;
    const fruits = Array.from(document.getElementById('fruits').selectedOptions).map(option => option.value);
    const addIns = Array.from(document.getElementById('add-ins').selectedOptions).map(option => option.value);
    const size = document.getElementById('size').value;
 // Generate the order summary
    const orderSummary = `
        <h2>Your Smoothie Order</h2>
        <ul>
            <li><strong>Base:</strong> ${base}</li>
            <li><strong>Fruits:</strong> ${fruits.join(', ')}</li>
            <li><strong>Add-ins:</strong> ${addIns.join(', ')}</li>
            <li><strong>Size:</strong> ${size}</li>
        </ul>
    `;

    // Display the order summary
    const summaryContainer = document.getElementById('order-summary');
    summaryContainer.innerHTML = orderSummary;
    summaryContainer.style.display = 'block';
});
