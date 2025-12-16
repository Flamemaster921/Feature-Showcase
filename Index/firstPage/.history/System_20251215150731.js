//Submit username
const textarea = document.getElementById("usernameBox");
const button = document.getElementById("submitButton");

button.addEventListener("click", () => {
    const textarea = document.getElementById("usernameBox").value;
    console.log(textarea);
    textarea.value = "";
    console.log(textarea);
});
