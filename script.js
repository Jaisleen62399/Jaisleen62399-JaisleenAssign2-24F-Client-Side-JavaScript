// script.js

document.getElementById('smoothie-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Get the values from the form fields
    const base = document.getElementById('base').value;
    const fruits = Array.from(document.getElementById('fruits').selectedOptions).map(option => option.value);
    const addIns = Array.from(document.getElementById('add-ins').selectedOptions).map(option => option.value);
    const size = document.getElementById('size').value;
