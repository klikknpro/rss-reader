window.addEventListener("load", loadCountry);

function loadCountry() {
  fetch("https://restcountries.com/v3.1/name/peru")
    .then((r) => r.json())
    .then(showCountry);
}

function showCountry(c) {
  console.log(c);
  const name = c[0].name.official;
  document.getElementById("name").textContent = name;
}
