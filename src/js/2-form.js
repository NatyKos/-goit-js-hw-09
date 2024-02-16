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

// збереження даних в локальне сховище + виведення в консоль
form.addEventListener('input', (event) => {
    event.preventDefault;
    const data = readFormData(event.currentTarget);
    const jsonData = JSON.stringify(data);
    localStorage.setItem(storageKey, jsonData);
    console.log(data);
})

// при наявності даних в локальному сховищі виведення даних одразу в формі
const rowData = localStorage.getItem(storageKey);
if (rowData) {
    const isData = JSON.parse(rowData);
    form.email.value = isData.email;
    form.message.value = isData.message
}

// очищення сховища і форми при натисканні кнопки
form.addEventListener('submit', (event) => {
    event.preventDefault();
    localStorage.removeItem(storageKey);
    form.reset();
}
    )
