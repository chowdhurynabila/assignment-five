const kbd = document.getElementsByClassName("kbd");

let totalOrder = 0;

for (const el of kbd) {
  el.addEventListener("click", (el) => {
    totalOrder += 1;
    setInnerText("totalSeat", totalOrder);
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    h3.innerText = el.target.innerText;
    const p = document.createElement("p");
    p.innerText = "Economoy";
    const span = document.createElement("span");
    const price = (span.innerText = 550);

    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(span);
    const orderdiv = document.getElementById("order");
    orderdiv.appendChild(div);
    const seatLeft = document.getElementById("seatLeft");
    const seatLeftValue = parseInt(seatLeft.innerText);
    const totalSeatLeft = seatLeftValue - 1;
    seatLeft.innerText = totalSeatLeft;

    const totalPrice = document.getElementById("totalPrice");
    const totalPriceValue = parseInt(totalPrice.innerText);
    const totalePriceTotal = (totalPrice.innerText = totalPriceValue + price);

    const applyBtn = document.getElementById("applyBtn");
    applyBtn.addEventListener("click", () => {
      const search = document.getElementById("inputField");
      const searchValue = search.value;

      if (searchValue === "NEW15") {
        const grandTotal = document.getElementById("grandTotal");
        const grandTotalValueConverted = parseInt(grandTotal);
        const totalGrand = (totalePriceTotal * 15) / 100;
        const total = totalePriceTotal - totalGrand;
        grandTotal.innerText = total;
      }
      if (searchValue === "Couple20") {
        const grandTotal = document.getElementById("grandTotal");
        const grandTotalValueConverted = parseInt(grandTotal);
        const totalGrand = (totalePriceTotal * 20) / 100;
        const total = totalePriceTotal - totalGrand;
        grandTotal.innerText = total;
      } else {
        alert("please enter correct code");
        return;
      }
    });
  });
}

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}
// function setbgColor(id) {
//   const bgColor = document.getElementById(id);
//   bgColor.classList.add("bg-green-500");
//   bgColor.classList.add("text-white");
// }

function next() {
  const mainbody = document.getElementById("mainbody");
  const popup = document.getElementById("popup");
  mainbody.classList.add("hidden");
  popup.classList.remove("hide");
}
function continuebtn() {
  location.reload();
}
