

function handleSubmit(event) { 
event.preventDefault.();
}

const backButton = document.getElementById('backButton');
backButton.addEventListener('click, goBack')

const itemForm = document.getElementById('itemForm');
showListButton.addEventListener('submit', handleSubmit);

const showListButton = document.getElementById('showListButton');
showListButton.addEventListener('click', showItemList)

function updateItemList() {
    const itemList = document.getElementById('itemList');
    itemList.innerHTML = '';
  
function showItemList() {
    const itemForm = document.getElementById( 'itemForm');
    const itemList = document.getElementById( 'itemList');
    const backButton = document.getElementById( 'backButton');

itemForm.style.display = 'block';
}

updateItemList();

}

function goBack() {

    const itemList = document.getElementById( 'itemList');
    const itemForm = document.getElementById('itemForm');
    const backButton = document.getElementById('backButton');
  
}
