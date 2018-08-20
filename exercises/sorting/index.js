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
    function bubbleSortRec(arr, n){
        if(n === 1){
            return;
        }
        for(var i = 0; i<n-1;i++){
            if(arr[i] >arr[i+1]){
                var tmp = arr[i+1];
                arr[i+1] = arr[i];
                arr[i] = tmp;
            }
        }bubbleSortRec(arr, n-1);
    }var arr = [3,5,1,2,7,8,9];
    bubbleSortRec(arr,arr.length);arr;
    
    // **********insertion sort
    function insertionSort(arr, n){
        for(var i=1;i<n;i++){
            var key = arr[i];
            var j = i-1;
            while(j>=0 && arr[j]>key){
                arr[j+1] = arr[j];
                j = j-1;
            } arr[j+1] = key;
        }
    }var arr = [3,1,2,4,5,10,87,4,2];
    insertionSort(arr, 9);arr;
    
    // **************
    
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
    
    function quickSort(arr, left, right){
        if(left < right){
            var partitionIndex = partition(arr, left, right);
            quickSort(arr, left, partitionIndex-1);
            quickSort(arr, partitionIndex+1, right);
        }
        return arr;
    }
    function partition(arr, left, right){
        var pivotValue = arr[right];
        var i = left-1;
        for(var j = left; j< right;j++){
            if(arr[j] < pivotValue){
                i= i+1;
                var min = arr[j];
                arr[j] = arr[i];
                arr[i] = min;  
            }
        }
        var temp = arr[i+1];
        arr[i+1] = arr[right];
        arr[right] = temp;
        return i+1;
    }quickSort([9,2,3,5,7], 0, 4);
    
    // *******practice
    function bubbleSort(){}
    function bubbleSortRec(){}
    function selectionSort(){}
    function insertionSort(){}
    function mergeSort(){}
    function quickSort(){}
    function bubbleSort(arr){
        for(var i=0;i<arr.length;i++){
            for(var j=i;j<arr.length-i-1;j++){
                if(arr[j]>arr[j+1]){
                    var tmp = arr[j+1];
                    arr[j+i]= arr[j];
                    arr[j]=tmp;
                }
            }
        }
    }
    function bubbleSortRec(arr, n){
        if(n===1){
            return;
        }
        for(var i = 0;i < n;i++){
            if(arr[i]>arr[i+1]){
                var tmp = arr[i];
                arr[i]=arr[i+1];
                arr[i+1]=tmp;
            }
        }bubbleSortRec(arr, n-1);
    }
    function insertionSort(arr){
        for(var i=1;i<arr.length;i++){
            var j=i-1;var k =arr[i];
            while(j>=0 && arr[j]>k){
                arr[j+1] = a[j];
                j--;
            }arr[j+1]=k;
        }
    }function selectionSort(arr){
        for(var i=0;i<arr.length;i++){
            var indexOfMin = i;
            for(var j=i+1;i<arguments.length;i++){
                if(arr[indexOfMin] > arr[j]){
                    indexOfMin = j;
                }
            }
            if(indexOfMin != i){
                var tm = arr[indexOfMin];
                arr[indexOfMin] = arr[i];
                arr[i] = tm;
            }
        }
    }
    function mergeSort(arr){
        if(arr.length === 1){
            return arr;
        }
        var center = Math.floor(arr.length/2);
        var left = arr.slice(0, center);
        var right = arr.slice(center);
        merge(mergeSort(left), mergeSort(right));
    }
    function merge(left, right){
        var results = [];
        while(left.length && right.length){
        if(left[0]<right[0]){
            results.push(left.shift());
        }else results.push(righ.shift());
    }
        results.push(...results, ...left, ...right);
    }
    function quickSort(arr, left, right){
        
    }
    function partition(){
    
    }