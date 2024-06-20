const buyButton = document.getElementById("buy");
const closeAlert = document.getElementById("ok");
const buyBtn = document.getElementsByClassName("buy");

// for (var i = 0; i < buyButton; i++) {
//   const buyButtons = buyButton[i];
//   buyButtons.addEventListener("click", () => {
//     console.log("hai: " + i);
//   });
// }

buyButton.addEventListener("click", function () {
  console.log("haii");
});

for (let i = 0; i < buyBtn; i++) {
  const buyButtons = buyBtn[i];
  buyButtons.addEventListener("click", function () {
    console.log("sukses: " + i);
  });
}

closeAlert.addEventListener("click", function () {
  let alertBox = document.getElementById("box-alert");
  alertBox.style.display = "none";
});
