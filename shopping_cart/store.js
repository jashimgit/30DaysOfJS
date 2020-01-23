if ( document.readyState == 'loading' ) {
    document.addEventListener( 'DOMContentLoaded', ready );
} else {
    ready()
}

function ready() {
    var removeCartItemButton = document.getElementsByClassName( 'btn-danger' );

    for ( var i = 0; i < removeCartItemButton.length; i++ ) {
        let button = removeCartItemButton[ i ];
        button.addEventListener( 'click', removeCartItem );
    }

    // 
    var quantityInputs = document.getElementsByClassName( 'cart-quantity-input' );
    for ( var i = 0; i < quantityInputs.length; i++ ) {
        let input = quantityInputs[ i ];
        input.addEventListener( 'change', quantityChanged );
    }

    const addToCartButtons = document.getElementsByClassName( 'shop-item-button' );
    for ( let i = 0; i < addToCartButtons.length; i++ ) {
        const cartButton = addToCartButtons[ i ];
        cartButton.addEventListener( 'click', addToCart );
    }
    // purchase button activities 
    document.getElementsByClassName( 'btn-purchase' )[ 0 ].addEventListener( 'click', purchaseClicked );


} // end  


function purchaseClicked() {
    alert( 'Thanks for buying' );
    var cItems = document.getElementsByClassName( 'cart-items' )[ 0 ];
    while ( cItems.hasChildNodes() ) {
        cItems.removeChild( cItems.firstChild );
    }
    updateCartTotal();
}

function addToCart( event ) {
    const button = event.target;
    const shopItem = button.parentElement.parentElement;
    var title = shopItem.getElementsByClassName( 'shop-item-title' )[ 0 ].innerText;
    var price = shopItem.getElementsByClassName( 'shop-item-price' )[ 0 ].innerText;
    var imageSrc = shopItem.getElementsByClassName( 'shop-item-image' )[ 0 ].src;

    addItemToCart( title, price, imageSrc );
    updateCartTotal();
}

function addItemToCart( title, price, image ) {
    let cartRow = document.createElement( 'div' );
    cartRow.classList.add( 'cart-row' );
    let cartItems = document.getElementsByClassName( 'cart-items' )[ 0 ];
    var cartItemName = document.getElementsByClassName( 'cart-item-title' );
    for ( let i = 0; i < cartItemName.length; i++ ) {
        if ( cartItemName[ i ].innerText == title ) {
            alert( 'Opp! Item already added !' );
            return;
        }
    }
    // create row in add to cart section 
    let cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${image }" width="100" height="100">
            <span class="cart-item-title"> ${title}</span>
        </div>
            <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div> `;
    cartRow.innerHTML = cartRowContents
    cartItems.append( cartRow );

    // call removeCartItem to remove after adding new items to the cart
    cartRow.getElementsByClassName( 'btn-danger' )[ 0 ].addEventListener( 'click', removeCartItem );
    // change quantity with button and make sure minimum quantity 1
    cartRow.getElementsByClassName( 'cart-quantity-input' )[ 0 ].addEventListener( 'change', quantityChanged );
}

// change cart quantity with button 
// and verify to minimum quantity is 1

function quantityChanged( event ) {
    var input = event.target;
    if ( isNaN( input.value ) || input.value <= 0 ) {
        input.value = 1;
    }
    updateCartTotal();
}

function removeCartItem() {
    let buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
}




// Update total cart price 
function updateCartTotal() {
    let cartItemContainer = document.getElementsByClassName( 'cart-items' )[ 0 ];
    let cartRows = cartItemContainer.getElementsByClassName( 'cart-row' );
    let total = 0;
    for ( let i = 0; i < cartRows.length; i++ ) {
        const cartRow = cartRows[ i ];
        const priceElement = cartRow.getElementsByClassName( 'cart-price' )[ 0 ];
        const quantityElement = cartRow.getElementsByClassName( 'cart-quantity-input' )[ 0 ];
        // console.log(priceElement, quantityElement);

        let price = parseFloat( priceElement.innerText.replace( '$', '' ) );
        let quantity = quantityElement.value;
        total = total + ( price * quantity );
    }
    total = Math.round( total * 100 ) / 100
    document.getElementsByClassName( 'cart-total-price ' )[ 0 ].innerText = '$' + total;
}