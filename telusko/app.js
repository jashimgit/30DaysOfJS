function clickMe() {
    var str = document.getElementById( 'name' ).value;
    alert( str );
}

function rdbtn1() {
    var rd1 = document.getElementById( 'rd1' );
    var rd2 = document.getElementById( 'rd2' );
    var rd3 = document.getElementById( 'rd3' );
    if ( rd1.checked == true ) {
        alert( rd1.value );
    } else if ( rd2.checked == true ) {
        alert( rd2.value );
    } else if ( rd3.checked == true ) {
        alert( rd3.value );
    } else {
        alert( 'nothing selected' );
    }
}
// get data from select box from multiple option
function selectBox() {
    var select = document.getElementById( 'selectbox' );
    alert( select.options[ select.selectedIndex ].value );
}
