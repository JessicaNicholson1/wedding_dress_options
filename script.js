document.getElementById('dressForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    let name = document.getElementById('name').value;
    let dress = document.getElementById('dress').value;
    
    // Create a new list item
    let listItem = document.createElement('li');
    listItem.textContent = `${name} intends to wear: ${dress}`;
    
    // Append the new dress to the list
    document.getElementById('dressList').appendChild(listItem);
    
    // Clear form fields
    document.getElementById('dressForm').reset();
});
