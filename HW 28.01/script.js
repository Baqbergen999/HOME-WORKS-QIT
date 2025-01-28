const textInput = document.getElementById("textInput");
const saveBtn = document.getElementById("saveBtn");
const clearBtn = document.getElementById("clearBtn");

if (localStorage.getItem("savedText")) {
  textInput.value = localStorage.getItem("savedText");
}

saveBtn.addEventListener("click", function () {
  localStorage.setItem("savedText", textInput.value);
  alert("Мәтін сақталды!");
});

clearBtn.addEventListener("click", function () {
  textInput.value = "";
  localStorage.removeItem("savedText");
  alert("Мәтін тазаланды!");
});
