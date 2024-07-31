let fourNumberFacts = [];

async function getNumberURLs() {
  for (let i = 0; i < 4; i++) {
    fourNumberFacts.push(
      await axios.get(`http://numbersapi.com/7/trivia?json`)
    );
  }
  promiseFunction();
}

async function promiseFunction() {
  let resolvedPromise = await Promise.all(fourNumberFacts);
  populateFactList(resolvedPromise);
}

function populateFactList(result) {
  const ul = document.getElementById("results_ul");
  for (let i = 0; i < 4; i++) {
    let li = document.createElement("li");
    li.innerHTML += `${result[i].data.text}`;
    ul.appendChild(li);
  }
}

getNumberURLs();
