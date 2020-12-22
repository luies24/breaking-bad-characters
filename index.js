const main = document.querySelector("main");

fetch("https://breakingbadapi.com/api/characters")
  .then((response) => response.json())
  .then((characters) =>
    characters.forEach((character) => {
      const card = document.createElement("div");
      const name = document.createElement("h2");
      const image = document.createElement("img");

      card.id = `character-${character.char_id}`;
      card.className = "card";
      card.href = `/character.html?id=${character.char_id}`;
      name.textContent = character.name;
      image.src = character.img;

      main.appendChild(card);
      card.append(name, image);
    })
  );
