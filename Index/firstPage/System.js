//Submit username
const textarea = document.getElementById("usernameBox");
const button = document.getElementById("submitButton");
const nameDisplay = document.getElementById("nameDisplay");

button.addEventListener("click", () => {
    const textarea = document.getElementById("usernameBox");
    if (textarea.value !== "") {   
    nameDisplay.textContent = "Hello Welcome " + textarea.value;
    textarea.value = "";
    }
});
