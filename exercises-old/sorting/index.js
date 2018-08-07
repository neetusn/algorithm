// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort
// to store like twitter linked list
// to retrieve hash table

function bubbleSort(arr) {
//n^2 worst time complexity every time make sure find the highest one with i iteration bubbled one and put it in the last and j-1
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < (arr.length-i-1); j++){
            if(arr[j] > arr[j+1]){
                var lesser = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = lesser;
            }
        }
    }
    return arr;
}

function selectionSort(arr) {
    // proove me wrong with indexOfMin and swap with indexOfMin 
// i=0,j=i+1,indexOfMin = 0
    for(let i = 0; i < arr.length; i++){
        let indexOfMin = i;
        for(let j = i+1; j < arr.length; j++){
            if(arr[indexOfMin] > arr[j]){
                indexOfMin = j;
            }
        }
        if(indexOfMin !== i){
            let lesser = arr[indexOfMin];
            arr[indexOfMin] = arr[i];
            arr[i] = lesser;
        }
    }
    return arr;
}

function mergeSort(arr) {    
    // nlogn - worst time complexity
    // have seaparate left and right sorted array to one sorted array
    if(arr.length === 1){
        return arr;
    }
    const center = Math.floor(arr.length/2);
    const left = arr.slice(0, center);
    const right = arr.slice(center);
    return merge(mergeSort(left),mergeSort(right));
}

function merge(left, right) {
    const results = [];
    while(left.length && right.length){
        if(left[0] < right[0]){
            results.push(left.shift());
        }else {
            results.push(right.shift());
        }
    }    
    return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort };

function quickSort(arr){
    var p = 0, r = arr.length-1;
    if(p<r){
        q = partition(arr, p, r);
        quickSort(arr, p, q-1);
        quickSort(arr, q+1, r);
    }
    // smaller input faster compare to merge
    // though divide and conquer
}
function partition(arr, p, r){
    var x = arr[r];
    var i = p-1;
    // i=-1, j=0, pivote = a[0] , r=a.lentgh-1
    for(var j = p; j< r-1;j++){
        if(arr[j] < x){
            i++;
            var min = arr[j];
            arr[j] = arr[i];
            arr[i] = min;  
        }
    }
    var min = arr[i+1];
    arr[i+1] = arr[r];
    arr[r] = min;
    return i+1;
}