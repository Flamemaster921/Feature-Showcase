//Submit username
const textarea = document.getElementById("usernameBox");
const button = document.getElementById("submitButton");

button.addEventListener("click", () => {
    const textarea = document.getElementById("usernameBox");
    console.log(textarea.value);
    textarea.value = "";
    console.log(textarea.value);
});
