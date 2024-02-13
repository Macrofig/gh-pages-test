(() => {
  document.querySelector("button#boop").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("button#boop").classList.toggle("beep");
    if (document.querySelector("button#boop").classList.contains("beep")) {
      document.querySelector("button#boop").innerHTML = "BOOP";
    } else {
      document.querySelector("button#boop").innerHTML = "BEEP";
    }
  });
})();
