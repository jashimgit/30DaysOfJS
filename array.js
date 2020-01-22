/**
 * 
 * 
 * link: https: //www.javascripttutorial.net/javascript-multidimensional-activities/
 * 
 * 
 */

 var activities = [
                    [ 'Work', 9 ],
                    [ 'Eat', 2 ],
                    [ 'Commute', 2 ],
                    [ 'Play Game', 2 ],
                    [ 'Sleep', 7 ]
                ];

 // access activities array
 console.log( activities[ 0 ] );
 console.log( activities[ 0 ] );
 console.log( activities[ 0 ] );
 console.log( activities[ 0 ] );
 console.log( activities[ 0 ] );
 // access element of array 2d array

 console.log( activities[ 0 ][ 0 ] );
 console.log( activities[ 0 ][ 1 ] );
 console.log( activities[ 3 ][ 0 ] );
 console.log( activities[ 3 ][ 1 ] );
 
 // add elements to 2d Array

activities.push(['study', 20]);
console.log(activities);
console.log(activities.length);

// calculates percentage of the hours spent on each activity
// and append the percentage to the inner array

for (let i = 0; i < activities.length; i++) {
     // calculate percentage
     const percentage =  ((activities[i][1] / 24) * 100).toFixed();
     console.log(percentage);
     
     activities[i][2] = percentage + '%';   
}
console.log(activities.join('\n'));

// Iterating multidimensional array

// loop the outer array

var arr = '';
for ( var i = 0; i < activities.length; i++ ) {
    // get the size of the inner array
    var innerArrayLength = activities[ i ].length;
    // loop the inner array
    for ( var j = 0; j < innerArrayLength; j++ ) {
        // console.log( '[' + i + ',' + j + '] = ' + activities[ i ][ j ] );
       arr = '[' + i + ',' + j + '] = ' + activities[ i ][ j ];
       console.log(arr);
       
    }
}
