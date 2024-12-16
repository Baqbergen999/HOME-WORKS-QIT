const inputField = document.getElementById("name");
const outputSpan = document.getElementById("output");

inputField.addEventListener("input", function() {
    outputSpan.textContent = inputField.value;
});

function alertMessage() {
    alert("Енгізілген мәлімет: " + inputField.value);
}
