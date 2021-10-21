function loadCountry() {
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  document.body.appendChild(input);

  const enterBut = document.createElement("button");
  document.body.appendChild(enterBut);
  enterBut.addEventListener("click", getServerData(input.value));
}

function getServerData(inputVal) {
  fetch(`https://restcountries.com/v3.1/name/${inputVal}`)
    .then((r) => r.json())
    .then(showCountry);
}

// document.body.appendChild(input);

function showCountry(c) {
  console.log(c);
  const country = document.createElement("h1");
  country.setAttribute("id", "country");
  document.body.appendChild(country);
  const name = c[0].name.official;
  country.innerHTML = name;

  const flag = c[0].flags.png;
  const image = document.createElement("img");
  image.setAttribute("src", flag);
  image.setAttribute("id", "flag");
  document.body.appendChild(image);
}

window.addEventListener("load", loadCountry);

/* list more countries
display a flag (w <img>)

for ciklus a showCountry-ban

1 fetch only

*/
