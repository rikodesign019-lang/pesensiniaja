function filterSelection(category) {
  let items = document.getElementsByClassName("filter-item");
  if (category === "all") category = "";
  for (let i = 0; i < items.length; i++) {
    items[i].style.display = items[i].className.indexOf(category) > -1 ? "block" : "none";
  }
}
filterSelection("all");

function searchByCode() {
  let input = document.getElementById("searchBox").value.toLowerCase();
  let items = document.getElementsByClassName("filter-item");
  for (let i = 0; i < items.length; i++) {
    let code = items[i].querySelector("h3").innerText.toLowerCase();
    items[i].style.display = code.indexOf(input) > -1 ? "block" : "none";
  }
}
