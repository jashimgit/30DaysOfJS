/**
 * 
 *  javascript Object 
 */
let users = [ {
        "fname": "Vickie",
        "lname": "Ragusa",
        "tel": "(703)843-0434",
        "address": "7742 Placerat Ln",
        "city": "The Dalles",
        "state": "NE",
        "zip": 38196
    },
    {
        "fname": "Arlesia",
        "lname": "Clay",
        "tel": "(277)862-0916",
        "address": "46 Vel St",
        "city": "Superior",
        "state": "AR",
        "zip": 82896
    },
    {
        "fname": "Daisy",
        "lname": "Budgell",
        "tel": "(626)218-7396",
        "address": "2857 Placerat Rd",
        "city": "Miami",
        "state": "MA",
        "zip": 45233
    },
    {
        "fname": "Elba",
        "lname": "Givens",
        "tel": "(224)253-3152",
        "address": "8298 Amet St",
        "city": "Ogden",
        "state": "IL",
        "zip": 81420
    },
    {
        "fname": "Girish",
        "lname": "Kohn",
        "tel": "(482)060-0458",
        "address": "6178 Nullam St",
        "city": "Alhambra",
        "state": "KS",
        "zip": 20295
    }
];

let empty = {}; // an empty object
let person = {
    firstName: 'John',
    lastName: 'Doe'
}
// accessing property of an object 
console.log( person.firstName + ' ' + person.lastName );
console.log( person[ 'firstName' ] + ' ' + person[ 'lastName' ] );
// add a new property to an object

person.age = 30;
person.test = 'test';
person;

// delete a property of an object
delete person.test;
person;
console.log( 'test' in person );
console.log( 'age' in person );


// Iterate over property of an object using for...in loop
let website = {
    title: 'Javascritp Tutorial',
    url: 'www.example.com',
    tags: [ 'ES6', 'javascript', 'Node.js' ]
};
// for ... in loop 
for ( const key in website ) {
    console.log( website[ key ] );
}

for ( const key in users ) {
    // console.log( users[ key ].fname );
    // console.log( users[ key ].lname );
    // console.log( users[ key ].tel );
    // console.log( users[ key ].address );
    // console.log( users[ key ].city );
    // console.log( users[ key ].state );
    // console.log( users[ key ].zip );
}
// Methods 
let newPerson = {
    firstName: 'John',
        lastName: 'Doe',
        greet: function () {
            console.log( 'Hello, World!' );
        },
        getFullName: function () {
            return this.firstName + ' ' + this.lastName;
        }
};
console.log(newPerson.getFullName());

