function loadDoc() {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     (document.getElementById(
        "demo"
      ).innerHTML = this.responseText);
      
    }
  };

  xhttp.open("get", "https://jsonplaceholder.typicode.com/users", true);
  xhttp.send();
}