// Practice
// Let's try to write a function called each which accepts two parameters: an array and a callback function. The each function should loop over the array passed to it and run the callback function on each element in it.
// this function should accept 2 parameters, put them in!
function each(array, fn){
    for (var i = 0; i < array.length; i++) {
    	fn(array[i])
    }
}


each([1,2,3,4], function(val){
    console.log(val);
});

each([1,2,3,4], function(val){
    console.log(val*2);
});

// Exercises
// Write a function called map which accepts two parameters:
// an array and a callback. The map function should return a 
// new array with the result of each value being passed to 
// the callback function. Here's an example:

function map(array, fn){
	var newArr = []
	for (var i = 0; i < array.length; i++) {
    	newArr.push(fn(array[i]))
    }
    return newArr
}

map([1,2,3,4], function(val){
    return val * 2;
}); // [2,4,6,8]

// Write a function called reject which accepts two
// parameters an array and a callback. The function should return 
// a new array with all of the values that do not return true 
// to the callback. Here are two examples:

function reject(array, fn){
	var newArr = []
	for (var i = 0; i < array.length; i++) {
    	if (!fn(array[i])) {
    		newArr.push(array[i])
    	}
    }
    return newArr
}

reject([1,2,3,4], function(val){
    return val > 2;
}); // [1,2]

reject([2,3,4,5], function(val){
    return val % 2 === 0;
}); // [3,5]



