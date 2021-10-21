window.addEventListener("load", loadCountry);

function loadCountry() {
  const search = "brazil";
  fetch(`https://restcountries.com/v3.1/name/${search}`)
    .then((r) => r.json())
    .then(showCountry);
}

function showCountry(c) {
  console.log(c);
  const name = c[0].name.official;
  const flag = c[0].flags.png;
  document.getElementById("flag").setAttribute("src", flag);
  document.getElementById("name").textContent = name;
}

/* list more countries
display a flag (w <img>) */
