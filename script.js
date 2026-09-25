let count = 0;

const countText = document.getElementById("count");

document.getElementById("increase").addEventListener("click", function () {
  count = count + 1;
  countText.textContent = count;
});

document.getElementById("decrease").addEventListener("click", function () {
  count = count - 1;
  countText.textContent = count;
});

document.getElementById("reset").addEventListener("click", function () {
  count = 0;
  countText.textContent = count;
});
