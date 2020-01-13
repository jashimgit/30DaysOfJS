// let fruits = [ 'Apple', 'Banana' ];


// // Add an element to end of an array

// let newLenght = fruits.push( 'Orange', 'test' );

// document.getElementById( 'pop' ).innerHTML = fruits;
// console.log( fruits );

// let pushItem = fruits.pop( 'test' );
// document.getElementById( 'push' ).innerHTML = pushItem;
// console.log( pushItem );
// console.log( fruits );
// Removes items from an index position
let vegetables = [ 'Cabbage', 'Turnip', 'Radish', 'Carrot', 'Tomato', 'pumpkin' ];
document.getElementById( 'demo' ).innerHTML = vegetables;

vegetables.splice( 1, 0, 'Brocli' );
document.getElementById( 'demo1' ).innerHTML = vegetables;
// console.log( vegetables );

vegetables.splice( -5, 1, 'Ginger' );
document.getElementById( 'demo2' ).innerHTML = vegetables;

vegetables.splice( -4, 1 );
// print vegetables now
document.getElementById( 'demo3' ).innerHTML = vegetables;

// console.log( vegetables );
vegetables.pop()
// console.log( vegetables );
vegetables.shift();
// console.log( vegetables );
// access an item from an array say 'carrot'
console.log( vegetables[ 2 ] );
// console.log( vegetables[ vegetables.length - 4 ] );
document.getElementById( 'demo4' ).innerHTML = vegetables[ 2 ];
// console.log( vegetables );
// console.log( vegetables.indexOf( 'carrot' ) );
console.log(vegetables.sort());

value = [];
for (let x = 0; x < 10; x++) {
    value.push([
        2 ** x, 2 * x ** 2
    ])
    
}

console.table(value);