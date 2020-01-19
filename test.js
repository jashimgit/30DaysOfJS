function kmtomiles( km ) {
    return Number( km * 0.621372 ).toPrecision( 6 );
}

kmtomiles( 2 );

// find index (part 1)
// create function that finds the index of a given item
// search([1,5,4], 5 ) -> 1 

// var arr = [ 1, 3, 4, 6, 8, 9 ];

function search( arr, item ) {

    for ( i = 0; i < arr.lenght; i++ ) {
        if ( arr[ i ] === item ) {
            console.log( arr[ i ] );
        } else {
            console.log( '-1' );
        }
    }
}
console.log(search([1,3,5,6,8], 3));
// console.log(arr.length);