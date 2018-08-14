// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
	var result = [];
	for(var i=0; i<n;i++){
		result.push([]);
	}
	var cnt=1,startRow=0,startCol=0,endRow=n-1,endCol=n-1;
	while(startCol<=endCol && startRow <= endRow){
		for(var i = startCol;i <= endCol; i++){
			result[startRow][i] = cnt;cnt++;
		}startRow++;
		for(var i = startRow;i <= endRow; i++){
			result[i][endCol] = cnt;cnt++;
		}endCol--;
		for(var i = endCol;i >= startCol; i--){
			result[endRow][i] = cnt;cnt++;
		}endRow--;
		for(var i = endRow;i >= startRow; i--){
			result[i][startCol] = cnt;cnt++;
		}startCol++;
	}return result;

}

module.exports = matrix;



// var arr = [['A','A','K'],['A','S','K'],['A','K','K']];
var arr = [['A','S'],['S','T']];
var row = "", col = "", dia ="", dia2= "", diaRev = "", dia2Rev = "", resObj = {};
for(var i=0,k=arr.length-1;i<arr.length;i++,k--){
	row="", col="";
	for(var j=0;j<arr.length;j++){
		row += arr[i][j];
		col += arr[j][i];		
	}
    dia += arr[i][i];		
	dia2 += arr[i][k];
	row = row.toLowerCase();
	col = col.toLowerCase();
    resObj[row] = resObj[row]+1 || 1;
    resObj[col] = resObj[col]+1 || 1;
}
dia = dia.toLowerCase();
diaRev = dia.split("").reverse().join("");
dia2 = dia2.toLowerCase();
dia2Rev = dia2.split("").reverse().join("");

if(resObj[diaRev]){
	resObj[diaRev] = resObj[diaRev]+1;
}else {
	resObj[dia] = resObj[dia]+1 || 1;
}
if(resObj[dia2Rev]){
	resObj[dia2Rev] = resObj[dia2Rev]+1;
}else {
	resObj[dia2] = resObj[dia2]+1 || 1;
}
resObj;

