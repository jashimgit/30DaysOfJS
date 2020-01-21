/**
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

*/

var data = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    }
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618"
      }
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains"
    }
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590-4157",
      geo: {
        lat: "-68.6102",
        lng: "-47.0653"
      }
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
      name: "Romaguera-Jacobson",
      catchPhrase: "Face to face bifurcated interface",
      bs: "e-enable strategic applications"
    }
  }
];

// outter loop 
for (let i = 0; i < data.length; i++) {
  console.log(data[i].id);
  console.log(data[i].address.city);

  console.log(
    'Id is : '+ data[i].id + ' ' +
    'Name is : ' + data[i].name + ' '+
    'User name is : ' + data[i].email + ' '+
    'Address is : ' + data[i].address.city + ', '+ data[i].address.street +', and Zip code is : ' + data[i].address.zipcode   
    
    
    )
}

var arr = [
  [1, 2],
  [3, 4],
  [5, 6]
];

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  console.log(element);
// inner loop 
for( var j=0; j<arr[i].length; j++){
  console.log(arr[i][j]);
}


  
}
