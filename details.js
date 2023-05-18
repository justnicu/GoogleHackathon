var urlParams = new URLSearchParams(window.location.search);
var key = urlParams.get("key");
var list = JSON.parse(decodeURIComponent(urlParams.get("list")));
var keyTitle = document.getElementById("keyTitle");
var listContainer = document.getElementById("listContainer");

console.log(list.length);
keyTitle.textContent = key;

for (let i = 0;i<list.length;i++) {
    const cardElement = document.createElement("div");
    cardElement.classList.add("col-md-12", "key");

    const cardBodyElement = document.createElement("div");
    cardBodyElement.classList.add("card","mt-3");

    const cardTitleElement = document.createElement("h4");
    cardTitleElement.classList.add("card-title","text-center");
    cardTitleElement.textContent = list[i];

    cardBodyElement.appendChild(cardTitleElement);

    cardElement.appendChild(cardBodyElement);
    listContainer.appendChild(cardElement);
  }
  const cardButtonElement = document.createElement("button");
  cardButtonElement.classList.add("btn", "btn-danger", "w-100");
  cardButtonElement.textContent = "Ofera spre inchiriere";
  listContainer.appendChild(cardButtonElement);


// list.forEach(function (item) {
//     var listItem = document.createElement("li");
//     listItem.textContent = item;
//     listContainer.appendChild(listItem);
// });
