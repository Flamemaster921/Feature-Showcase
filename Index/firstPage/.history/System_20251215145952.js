//Submit username
const textarea = document.getElementById("usernameBox");
const button = document.getElementById("submitButton");

button.addEventListener("click", () => {
    const text = document.getElementById("messageBox").value;
    console.log(text);
    textarea.value = textarea.placeholder;
});
