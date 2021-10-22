function loadPage() {
  const searchButton = document.createElement("button");
  searchButton.id = "search";
  searchButton.innerHTML = "SEARCH";
  document.querySelector("body .container").appendChild(searchButton);

  const searchBar = document.createElement("input");
  searchBar.type = "text";
  searchBar.id = "searchBar";
  document.querySelector("body .container").appendChild(searchBar);

  searchBar.defaultValue = "hungary";
  searchButton.addEventListener("click", loadCountry(searchBar.defaultValue));
}

function loadCountry(searchValue) {
  searchValue = document.getElementById("searchBar").value;
  fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
    .then((r) => r.json())
    .then(showCountry);
}

function showCountry(c) {
  // console.log(c);
  const container = document.querySelector("body .container");
  const country = document.createElement("h1");
  country.id = "country";
  container.appendChild(country);
  const name = c[0].name.official;
  country.innerHTML = name;

  const flag = c[0].flags.png;
  const image = document.createElement("img");
  image.src = flag;
  image.id = "flag";
  container.insertBefore(image, country);
}

window.addEventListener("load", loadPage);

/* list more countries
display a flag (w <img>) */
