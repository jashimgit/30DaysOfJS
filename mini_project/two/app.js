var btn = document.getElementById("btn");
var tableData = document.getElementById("tableData");

btn.addEventListener("click", function() {
  var myRequest = new XMLHttpRequest();
  
  myRequest.open("GET", "http://localhost/javascript/myJson_data.json");
  
  myRequest.onload = function() {
    //   console.log();
    var ourData = JSON.parse(myRequest.responseText);
    renderHtml(ourData);
  };
  
  myRequest.send();
});

function renderHtml(data) {
  var htmlString = "";

  for (let i = 0; i < data.length; i++) {
    htmlString += "<tr>" + "<td>" + data[i].fname + "</td>" + "</tr>";
  } // end of 1st index loop

  console.log(data[1].fname);

  tableData.insertAdjacentHTML("beforeend", htmlString);
} // end of renderHtml function
