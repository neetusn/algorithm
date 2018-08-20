
function printString(str, callBack){
	setTimeout(() => {
		console.log(str);
		callBack();
	},Math.floor(1000)*3);
}
function printAll(){
	printString("a",() => {
		printString("b", () => {
			printString("c", () => {});
		})
	});
}printAll();
function printStringPrms(str){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(str);
			reject("fasdasdf");
		}, Math.floor(Math.random()*1000)+1);
	});
}printStringPrms("ddd");