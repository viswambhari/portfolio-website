$(document).ready(function () {
  $("#autoWidth").lightSlider({
    autoWidth: true,
    loop: true,
    onSliderLoad: function () {
      $("#autoWidth").removeClass("cS-hidden");
    },
  });
});

let themeDots = document.getElementsByClassName("theme-dot");
for (i = 0; i < themeDots.length; i++) {
  themeDots[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    console.log(`${mode} option clicked`);
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode == "light") {
    document.getElementById("theme-style").href = "css/style.css";
  } else if (mode == "blue") {
    document.getElementById("theme-style").href = "css/blue.css";
  } else if (mode == "green") {
    document.getElementById("theme-style").href = "css/green.css";
  } else if (mode == "purple") {
    document.getElementById("theme-style").href = "css/purple.css";
  }
}
