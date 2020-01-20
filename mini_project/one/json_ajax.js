// page counter
var pageCounter = 1;

var btn = document.getElementById("btn");
var animalContainer = document.getElementById("animal-info");

btn.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();
  // var url = "";
  ourRequest.open(
    "get",
    "https://learnwebcode.github.io/json-example/animals-" +
      pageCounter +
      ".json"
  );

  ourRequest.onload = function() {
    //   console.log(ourRequest.responseText);
    var ourData = JSON.parse(ourRequest.responseText);
    renderHtml(ourData);
  };

  ourRequest.send();
  pageCounter++;
  if (pageCounter > 3) {
    btn.classList.add("hide-me");
  }
});
/**
 *  this function called within onload method
 * @param {*} data
 */
function renderHtml(data) {
  var htmlString = "";

  // get 1st index data from url
  // through loop

  for (let i = 0; i < data.length; i++) {
    htmlString +=
      "<p>" + data[i].name + " is a " + data[i].species + " that like to eat ";

    // get 2nd index data from url
    // through loop

    for (let ii = 0; ii < data[i].foods.likes.length; ii++) {
      if (ii == 0) {
        htmlString += data[i].foods.likes[ii];
      } else {
        htmlString += " and " + data[i].foods.likes[ii];
      }
    }

    htmlString += " and dislikes ";
    // get 3rd index data from url
    // through loop

    for (let ii = 0; ii < data[i].foods.dislikes.length; ii++) {
      if (ii == 0) {
        htmlString += data[i].foods.dislikes[ii];
      } else {
        htmlString += " and " + data[i].foods.dislikes[ii];
      }
    }
  }
  animalContainer.insertAdjacentHTML("beforeend", htmlString);
}
