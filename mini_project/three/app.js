var enterButton = document.getElementById( 'enter' );
var input = document.getElementById( 'userInput' );
var ul = document.querySelector( 'ul' );
var item = document.getElementsByTagName( 'li' );



function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement( 'li' ); // create an "li" element
    li.appendChild( document.createTextNode( input.value ) ); // add input value to li element
    ul.appendChild( li ); // adds li to ul
    input.value = ''; // reset text input field


    // create crossout button
    function crossOut() {
        li.classList.toggle( 'done' );
    }

    li.addEventListener( 'click', crossOut );

    // add delete button

    var dBtn = document.createElement( 'button' );
    dBtn.appendChild( document.createTextNode( 'X' ) );
    li.appendChild( dBtn );
    dBtn.addEventListener( 'click', deleteListItem );

    function deleteListItem() {
        li.classList.add( 'delete' );
    }
}

// add item after pressing Enter key 

function addListAfterKeypress() {
    if ( inputLength() > 0 && event.which === 13 ) {
        createListElement();

    }
}


function addListAfterClick() {
    if ( inputLength() > 0 ) {
        createListElement();
    }
}

enterButton.addEventListener( 'click', addListAfterClick );
input.addEventListener( 'keypress', addListAfterKeypress );