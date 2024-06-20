const closeAlert = document.getElementById("ok");
const buyBtn = document.querySelectorAll(".buy");

for (var i = 0; i < buyBtn.length; i++) {
  const buyButtons = buyBtn[i];
  buyButtons.addEventListener("click", () => {
    let alertBox = document.getElementById("box-alert");
    setTimeout(function () {
      alertBox.style.display = "flex";
    }, 1000);
  });
}
closeAlert.addEventListener("click", function () {
  let alertBox = document.getElementById("box-alert");
  alertBox.style.display = "none";
});
