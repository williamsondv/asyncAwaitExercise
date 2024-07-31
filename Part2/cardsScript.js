let deck_id = "";

async function getDeckID() {
  let res = await axios.get(
    "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
  );
  setDeckID(res);
}

function setDeckID(result) {
  deck_id = result.data.deck_id;
}

document.getElementById("card_button").addEventListener("click", drawACard);

async function drawACard() {
  let result = await axios.get(
    `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
  );

  imgURL = result.data.cards[0].image;
  div = document.getElementById("card_div");
  image = document.createElement("img");
  image.setAttribute("class", "imageCard");
  image.setAttribute("src", `${imgURL}`);
  div.appendChild(image);
}

getDeckID();
