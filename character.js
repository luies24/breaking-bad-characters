const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get("id");

fetch(`https://breakingbadapi.com/api/characters/${id}`)
  .then((response) => response.json())
  .then((characters) => console.log(character[0]));
