var bin = [];
var num =12;
for(;num;num >>= 1){
	bin.unshift(num & 1);
}bin.join('');
