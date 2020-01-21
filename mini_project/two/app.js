var btn = document.getElementById("btn");
var tableData = document.getElementById("dataList");

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
    
// testing loop for address object 
  
for (let ii = 0; ii < data[i].length; ii++) {
  console.log(data[i].address.city[ii]);  
}


    htmlString +=
      "<tr><td>" + data[i].fname + "</td><td>" + data[i].lname +"</td><td>" +
      data[i].city +"</td> <td>" +
      data[i].address + "</td> <td>" +
      data[i].zip + "</td></tr>";

    
  } // end of 1st index loop

  tableData.insertAdjacentHTML("beforeend", htmlString);
} // end of renderHtml function
