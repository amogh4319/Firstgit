document.addEventListener('DOMContentLoaded', () => {
    // Retrieve the form and item list elements
    const form = document.getElementById('myForm');
    const itemList = document.getElementById('itemList');
  
    // Load items from local storage on page load
    loadItemsFromLocalStorage();
  
    // Add event listener to the form submit event
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent form submission
  
      // Get the input values
      const amountInput = document.getElementById('amt');
      const descriptionInput = document.getElementById('description');
      const categorySelect = document.getElementById('category');
  
      const amount = amountInput.value;
      const description = descriptionInput.value;
      const category = categorySelect.value;
  
      // Create a new item object
      const item = {
        amount,
        description,
        category
      };
  
      // Add the item to the item list
      addItemToList(item);
  
      // Save the updated items to local storage
      saveItemsToLocalStorage();
  
      // Reset the form fields
      form.reset();
      amountInput.focus();
    });
  
    // Function to add an item to the item list
    function addItemToList(item) {
      // Create a new list item element
      const listItem = document.createElement('li');
      listItem.className = 'list-group-item';
  
      // Create a div to hold the item details
      const itemDetails = document.createElement('div');
  
      // Create a span for the item amount
      const amountSpan = document.createElement('span');
      amountSpan.textContent = item.amount+'-';
  
      // Create a span for the item description
      const descriptionSpan = document.createElement('span');
      descriptionSpan.textContent = item.description+'-';
  
      // Create a span for the item category
      const categorySpan = document.createElement('span');
      categorySpan.textContent = item.category;
  
      // Append the item details to the div
      itemDetails.appendChild(amountSpan);
      itemDetails.appendChild(descriptionSpan);
      itemDetails.appendChild(categorySpan);
  
      // Create delete button
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.className = 'delete-btn';
      deleteButton.addEventListener('click', () => {
        // Remove the item from the list
        listItem.remove();
  
        // Save the updated items to local storage
        saveItemsToLocalStorage();
      });
  
      // Create edit button
      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.className = 'edit-btn';
      editButton.addEventListener('click', () => {
        // Prompt user for new description
        const newDescription = prompt('Enter the corrected description:');
  
        // Update the description span
        descriptionSpan.textContent = newDescription;
  
        // Update the item object
        item.description = newDescription;
  
        // Save the updated items to local storage
        saveItemsToLocalStorage();
      });
  
      // Append the item details and buttons to the list item
      listItem.appendChild(itemDetails);
      listItem.appendChild(deleteButton);
      listItem.appendChild(editButton);
  
      // Append the list item to the item list
      itemList.appendChild(listItem);
    }
  
    // Function to save items to local storage
    function saveItemsToLocalStorage() {
      const items = Array.from(itemList.children).map((listItem) => {
        const amountSpan = listItem.querySelector('span:first-child');
        const descriptionSpan = listItem.querySelector('span:nth-child(2)');
        const categorySpan = listItem.querySelector('span:nth-child(3)');
  
        return {
          amount: amountSpan.textContent,
          description: descriptionSpan.textContent,
          category: categorySpan.textContent
        };
      });
  
      localStorage.setItem('items', JSON.stringify(items));
    }
  
    // Function to load items from local storage
    function loadItemsFromLocalStorage() {
      const items = JSON.parse(localStorage.getItem('items'));
  
      if (items) {
        items.forEach((item) => {
          addItemToList(item);
        });
      }
    }
  });
  