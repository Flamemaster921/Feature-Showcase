//Submit username
const textarea = document.getElementById("usernameBox");
const button = document.getElementById("submitButton");
const nameDisplay = document.getElementById("nameDisplay");

button.addEventListener("click", () => {
    const textarea = document.getElementById("usernameBox");
    nameDisplay.valu = textarea.value;
    console.log(textarea.value);
    textarea.value = "";
});
