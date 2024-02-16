const storageKey = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

// функція для читання даних, введених в таблиці
function readFormData() {
const email = form.email.value;
const message = form.message.value;
    return {
        email,
        message
    }
}

// збереження даних в локальне сховище 
form.addEventListener('input', (event) => {
    event.preventDefault;
    const data = readFormData(event.currentTarget);
    const jsonData = JSON.stringify(data);
    localStorage.setItem(storageKey, jsonData);
})

// при наявності даних в локальному сховищі виведення даних одразу в форму
const rowData = localStorage.getItem(storageKey);
if (rowData) {
    const isData = JSON.parse(rowData);
    form.email.value = isData.email;
    form.message.value = isData.message
}

// очищення сховища і форми при натисканні кнопки + виведення даних в консоль
form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(readFormData(form));
    localStorage.removeItem(storageKey);
    form.reset();
}
    )
