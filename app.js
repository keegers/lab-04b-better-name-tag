const submit = document.getElementById('name-submit');
const nameChange = document.getElementById('name');

submit.addEventListener('click', function() {
    const newName = document.getElementById('name-input');
    console.log(newName);
    if(newName.value === "") {
        newName.placeholder = 'Type some stuff!';
    } else {
        nameChange.textContent = newName.value;
    }
});
