const myForm = document.getElementById("myForm");
const messageArea = document.getElementById("message");
const resultDiv = document.getElementById("result");

myForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const message = messageArea.value;

    submitMessage(message)
    .then((message) => {
            result.innerText = message;
    });
});