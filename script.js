const groceryForm = document.getElementById('grocery-form');
const itemInput = document.getElementById('item');
const itemList = document.getElementById('item-list');

groceryForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const itemName = itemInput.value.trim();
    
    if (itemName !== '') {
        addItem(itemName);
        itemInput.value = '';
    }
});

function addItem(itemName) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span class="mr-2">${itemName}</span>
        <button class="bg-red-500 hover:bg-red-600 text-white font-semibold px-2 py-1 rounded">Delete</button>
    `;

    li.className = 'flex items-center justify-between mb-2';

    itemList.appendChild(li);

    // Add event listener to the delete button
    const deleteButton = li.querySelector('button');
    deleteButton.addEventListener('click', function () {
        itemList.removeChild(li);
    });
}
