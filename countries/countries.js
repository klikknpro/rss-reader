window.addEventListener("load", loadCountry);

const searchList = ["brazil"];
for (let i = 0; i < searchList.length; i++) {
  const searchLink = `https://restcountries.com/v3.1/name/${searchList[i]}`;
  loadCountry(searchLink);
}

function loadCountry(link) {
  fetch("link")
    .then((r) => r.json())
    .then(showCountry);
}

function showCountry(c) {
  console.log(c);
  const name = c[0].name.official;
  const flag = c[0].flags.png;
  document.getElementById("name").textContent = name;
  document.getElementById("flag").setAttribute("src", flag);
}

/* list more countries
display a flag (w <img>) */
