const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

noBtn.addEventListener("click", () => {
  let size = parseInt(getComputedStyle(yesBtn).fontSize);
  yesBtn.style.fontSize = size + 6 + "px";
});

yesBtn.addEventListener("click", () => {
  window.location.href = "yippee.html";
});
