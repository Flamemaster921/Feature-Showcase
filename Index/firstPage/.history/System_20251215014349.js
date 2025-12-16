const textarea = document.getElementById("usernameBox");
const button = document.getElementById("submitButton");

button.addEventListener("click", () => {
    textarea.value = "";
});
