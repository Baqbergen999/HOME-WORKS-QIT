let attempts = 5;

while (attempts > 0) {
    let password = prompt("Enter password:");

    if (password == "amjilt_the_best") {
        alert("Welcome!");
        break;
    } else {
        attempts--;
        alert("Pleaze enter true password, you have " + attempts + " attempts!");
    }
}
if (attempts == 0) {
    alert("Too many attepts!");
}