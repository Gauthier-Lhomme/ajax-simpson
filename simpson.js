// This function loads pokemon data from the Pokemon API
function fecthSimpsonJson() {
  // Feel free to download this HTML and edit it, to use another Pokemon ID
  const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
  axios
    .get(url)
    .then(function (response) {
      return response.data; // response.data instead of response.json() with fetch
    })
    .then(function (quote) {
      console.log("data decoded from JSON:", quote);

      const button = document.querySelector("button");

      button.addEventListener("click", (event) => {
        {
          location.reload();
        }
      });

      // Build a block of HTML
      const quoteHtml = `
          <p><strong>${quote[0].quote}</strong></p>
          <p>${quote[0].character}<p>
          <img src="${quote[0].image}"/>
        `;
      document.querySelector("#quote").innerHTML = quoteHtml;
    });
}

fecthSimpsonJson();
