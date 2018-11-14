
function addString(previous, current, callback){
    setTimeout(
      () => {
        callback((previous + ' ' + current))
      }, 
      Math.floor(Math.random() * 100) + 1
    );
  }
  function addAll(){
    addString('', 'A', result => {
      addString(result, 'B', result => {
        addString(result, 'C', result => {
         console.log(result) // Prints out " A B C"
        })
      })
    })
  }
  addAll();

//   *********
function addStringPromise(previous, current){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(previous, ' ', current);
        }, 1000);
    });
}
function addAllPromise(){
    var t = addStringPromise('', "a");console.log(t);
}
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

function addStringPromise(previous, current){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(previous+' '+current);
        }, 1000);
    });
}
function addAllPromise(){
   	addStringPromise('', "a").then('',(res)=>addStringPromise(res,'b')).then('',res => console.log(res));
}addAllPromise();
async function addAllPromise2(){
	var t='';
	t = await addStringPromise('','a1');
	t = await addStringPromise(t,'b2');
	t = await addStringPromise(t,'c3');console.log(t);
}//addAllPromise2();

function loadScript(src){
	return new Promise(function(resolve, reject){
		var scrpt = document.createElement('script');
		scrpt.src = src;
		scrpt.onload = () => resolve(scrpt);
		scrpt.onerror = () => resolve(new Error('scropt load error'+src));
		document.head.append(scrpt);
	});
}
var prm = loadScript('https://google.com');
prm.then(
val => console.log(val.src),
error => console.log(error)
);


(async function loop(){
	for(var i=0;i<10;i++){
		await new Promise((resolve,reject)=>{
			setTimeout(()=>{
				console.log(i);
				resolve();
			},1000);
		});
	}
})();
(function loop(i){
	if(i<10){
		new Promise((resolve,reject)=>{
			setTimeout(()=>{
				console.log(i);resolve(i);
			},1000);
		}).then((res)=>{loop(res+1);});
	}	
})(0);
