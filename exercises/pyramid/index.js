// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//n=3, [0,1,2,3,4] , 0=>2 , 1=> 1,2,3 , 2=> 0,1,2,3,4

function pyramid(n) {
	var mid = Math.floor((2*n-1)/2);//2
	for(var row=0;row<n;row++){//3
		var level = '';
		for(var col=0; col<n*2-1; col++){//
			if(mid - row <= col && mid+row >= col){
				level +='#';
			}else level +=' ';
		}console.log(level);
	}
}

module.exports = pyramid;
