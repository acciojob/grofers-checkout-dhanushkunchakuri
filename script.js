const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

getSumBtn.addEventListener("click", getSum);

function getSum() {
  const prices = document.querySelectorAll(".price");

  let sum = 0;
  prices.forEach(cell => {
    sum += Number(cell.textContent);
  });

  const totalRow = document.createElement("tr");
  const totalCell = document.createElement("td");

  totalCell.colSpan = 2;
  totalCell.textContent = "Total: Rs " + sum;
  totalRow.appendChild(totalCell);

  document.getElementById("ans").appendChild(totalRow);

  getSumBtn.disabled = true;
}
