const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('.list');

button.addEventListener('click', function() {
    let lineItem = document.createElement('li');
    let deleteBtn = document.createElement('button');
    lineItem.textContent = input.value;
    input.value = '';
    deleteBtn.innerHTML = 'Delete'

    lineItem.appendChild(deleteBtn);
    list.appendChild(lineItem);

    deleteBtn.addEventListener('click', function(){
        list.removeChild(lineItem);
    })

    input.focus();

});


