document.getElementById("myBtn").onclick = disPlayDate;

function disPlayDate() {
  document.getElementById("demo").innerHTML = Date();
}

var para = document.createElement("p");
var node = document.createTextNode("This is third paragraph");
para.appendChild(node);

var elem = document.getElementById("div1");
elem.appendChild(para);

// openNewWindow() function to open a new window

function openNewWindow() {
  var text = "";
  window.open();
  setTimeout(function closeWindow() {
    window.close();
    setTimeout(() => {
      alert("success");
    }, 5000);
  }, 5000);
}
// show clock
var myVar = setInterval(timer, 1000);

function timer() {
  var d = new Date();
  document.getElementById("clock").innerHTML =
    "Today's Date is: " +
    d.toLocaleDateString() +
    "<br> and time is : " +
    d.toLocaleTimeString();
}
