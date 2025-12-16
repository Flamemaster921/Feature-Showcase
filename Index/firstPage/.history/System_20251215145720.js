//Submit username
const textarea = document.getElementById("usernameBox");
const button = document.getElementById("submitButton");

button.addEventListener("click", () => {
    const text = document.getElementById("usernameBox").value;
    console.log(text);
});
