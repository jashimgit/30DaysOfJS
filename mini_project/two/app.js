var btn = document.getElementById("btn");
<<<<<<< HEAD
var tableData = document.getElementById("dataList");

btn.addEventListener("click", function() {
  var myRequest = new XMLHttpRequest();

  myRequest.open("GET", "http://localhost/javascript/myJson_data.json");

=======
var tableData = document.getElementById("tableData");

btn.addEventListener("click", function() {
  var myRequest = new XMLHttpRequest();
  
  myRequest.open("GET", "http://localhost/javascript/myJson_data.json");
  
>>>>>>> e4c537ed4798e255ea7e49e20d57b51fa64018df
  myRequest.onload = function() {
    //   console.log();
    var ourData = JSON.parse(myRequest.responseText);
    renderHtml(ourData);
  };
<<<<<<< HEAD

=======
  
>>>>>>> e4c537ed4798e255ea7e49e20d57b51fa64018df
  myRequest.send();
});

function renderHtml(data) {
  var htmlString = "";

  for (let i = 0; i < data.length; i++) {
<<<<<<< HEAD
    
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

=======
    htmlString += "<tr>" + "<td>" + data[i].fname + "</td>" + "</tr>";
  } // end of 1st index loop

  console.log(data[1].fname);

>>>>>>> e4c537ed4798e255ea7e49e20d57b51fa64018df
  tableData.insertAdjacentHTML("beforeend", htmlString);
} // end of renderHtml function
