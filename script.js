class Smoothie {
    constructor(base, fruits, addIns, size) {
        this.base = base;
        this.fruits = fruits;
        this.addIns = addIns;
        this.size = size;
    }

    generateOrderSummary() {
        return `
            <h2>Your Smoothie Order</h2>
            <ul>
                <li><strong>Base:</strong> ${this.base}</li>
                <li><strong>Fruits:</strong> ${this.fruits.join(', ')}</li>
                <li><strong>Add-ins:</strong> ${this.addIns.join(', ')}</li>
                <li><strong>Size:</strong> ${this.size}</li>
            </ul>
        `;
    }

    // Example of additional functionality: calculate price based on size and add-ins
    calculatePrice() {
        let price = 5; // Base price for a smoothie
        if (this.size === 'Medium') price += 2;
        if (this.size === 'Large') price += 3;
        price += this.addIns.length * 1.5; // $1.50 per add-in
        return price;
    }
}

// script.js

document.getElementById('smoothie-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Get the values from the form fields
    const base = document.getElementById('base').value;
    const fruits = Array.from(document.getElementById('fruits').selectedOptions).map(option => option.value);
    const addIns = Array.from(document.getElementById('add-ins').selectedOptions).map(option => option.value);
    const size = document.getElementById('size').value;
    // Create a new Smoothie object
    const smoothieOrder = new Smoothie(base, fruits, addIns, size);

 // Generate the order summary
    const orderSummary = `
        <h2>Your Smoothie Order</h2>
        <ul>
            <li><strong>Base:</strong> ${base}</li>
            <li><strong>Fruits:</strong> ${fruits.join(', ')}</li>
            <li><strong>Add-ins:</strong> ${addIns.join(', ')}</li>
            <li><strong>Size:</strong> ${size}</li>
            <li><strong>Price:</strong> $${smoothieOrder.calculatePrice().toFixed(2)}</li> <!-- Display price -->
        </ul>
    `;

    // Display the order summary
    const summaryContainer = document.getElementById('order-summary');
    summaryContainer.innerHTML = orderSummary;
    summaryContainer.style.display = 'block';
});
