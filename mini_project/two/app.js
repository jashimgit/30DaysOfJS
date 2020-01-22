var btn = document.getElementById( "btn" );
var tableData = document.getElementById( "dataList" );



// Add event to our button 
// and process functionality 
btn.addEventListener( "click", function () {
  var myRequest = new XMLHttpRequest();
  myRequest.open( "GET", "http://localhost/javascript/myJson_data.json" );
  myRequest.onload = function () {
    //   console.log();
    var ourData = JSON.parse( myRequest.responseText );
    renderHtml( ourData );
     
  };

 
  myRequest.send();
} );

function renderHtml( data ) {
  var htmlString = "";

  for ( let i = 0; i < data.length; i++ ) {
    htmlString += '<tr>';
    htmlString += '<td>' + data[ i ].fname + '</td>';
    htmlString += '<td>' + data[ i ].lname + '</td>';
    htmlString += '<td>' + data[ i ].address.streetAddress + ', ' + data[ i ].address.city + ' ,' + data[ i ].address.state + '</td>';
    htmlString += '<td>' + data[ i ].address.zip + '</td>';
    htmlString += '</tr>';



  } // end of 1st index loop

  tableData.insertAdjacentHTML( "beforeend", htmlString );
} // end of renderHtml 


// hide button when all data received
