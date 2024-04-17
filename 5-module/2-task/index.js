function toggleText() {
  const onClick = document.querySelector(".toggle-text-button");
  const textH = document.getElementById("text");
  onClick.addEventListener("click", () => {
    if (textH.hidden == true) {
      textH.hidden = false;
    } else textH.hidden = true;
  });
}
