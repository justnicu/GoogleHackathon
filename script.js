var dateFisier = new Array();
var dictionar = {}; 
var firmaCurenta = "";
var listaArome = new Array();

fetch('date.txt')
  .then(response => response.text())
  .then(text => {
    const lines = text.split('\n');
    lines.forEach(line => {
      line = line.replace(/\r/g, '');
      dateFisier.push(line)
    });

    let i = 0, j =  0;
    for (i = 0; i < dateFisier.length; i++){
      if(dateFisier[i][0] != "#"){
        listaArome = new Array();
        for(j=i+1;j < dateFisier.length && dateFisier[j][0] == "#";j = j + 1){
          let aroma = dateFisier[j];
          aroma = aroma.slice(1);
          listaArome.push(aroma);
        }

        dictionar[dateFisier[i]] = listaArome;
        i = j-1;
      }
    }

    console.log(dictionar);

    var keysContainer = document.getElementById("keysContainer");
    for (var key in dictionar) {
      const cardElement = document.createElement("div");
      cardElement.classList.add("col-md-4", "key");

      const cardBodyElement = document.createElement("div");
      cardBodyElement.classList.add("card","mt-3");

      const cardTitleElement = document.createElement("h5");
      cardTitleElement.classList.add("card-title","text-center");
      cardTitleElement.textContent = key;

      const cardImageElement = document.createElement("img");
      cardImageElement.classList.add("card-img-top");
      cardImageElement.src = `images/${key}.jpg`;

      const cardButtonElement = document.createElement("button");
      cardButtonElement.classList.add("btn", "btn-primary", "w-100");
      cardButtonElement.textContent = "Afla informatii echipament";

      cardButtonElement.addEventListener("click", function (event) {
          const input = cardElement.textContent;
          const index = input.indexOf("Afla informatii echipament");
          var clickedKey = "";
          if (index !== -1) {
            clickedKey = input.slice(0, index) + input.slice(index + "Afla informatii echipament".length);
            console.log(clickedKey);
          } else {
            console.log(clickedKey); // No change
          }
          window.location.href = "details.html?key=" +
                                  encodeURIComponent(clickedKey) + 
                                  "&list=" + 
                                  encodeURIComponent(JSON.stringify(dictionar[clickedKey]));
      });

      cardImageElement.addEventListener("click", (event) => {
        event.stopPropagation();
    });
      cardBodyElement.appendChild(cardImageElement);
      cardBodyElement.appendChild(cardTitleElement);
      cardBodyElement.appendChild(cardButtonElement);

      cardElement.appendChild(cardBodyElement);
      keysContainer.appendChild(cardElement);
    }
  });
