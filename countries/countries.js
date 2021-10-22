const searchButton = document.createElement("button");
searchButton.id = "search";
searchButton.innerHTML = "SEARCH";
document.querySelector("body .container").appendChild(searchButton);

const searchBar = document.createElement("input");
searchBar.type = "text";
searchBar.id = "searchBar";
document.querySelector("body .container").appendChild(searchBar);

// searchBar.defaultValue = "hungary";
const searchValue = searchBar.value;
searchButton.addEventListener("click", loadCountry());

debugger;

function loadCountry(s) {
  if (s) {
    fetch(`https://restcountries.com/v3.1/name/${s}`)
      .then((r) => r.json())
      .then(showCountry);
  } else {
    alert("Enter a country!");
  }
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

// window.addEventListener("load", loadPage);
