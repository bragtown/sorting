module.exports = function(){
    Array.prototype.heap_sort = function(compFn){
        let arr = this;
        if(compFn == undefined){
            
            compFn = function(cur,large){
                let opt1 = typeof cur != 'string' ? cur.toString() : cur;
                let opt2 = typeof large != 'string' ? large.toString() : large;
                return opt1 > opt2;
            }

        }
        let heapify = function(length, i){
            let largest = i;
            let left = 2*i + 1
            let right = 2*i + 2

            if(left < length && compFn(arr[left], arr[largest])){
                largest = left;
            }

            if(right < length && compFn(arr[right], arr[largest])){
                largest = right;
            }
            
            if(largest != i){
                let temp = arr[i]
                arr[i] = arr[largest]
                arr[largest] = temp;
                heapify(length, largest)
            }
        }
        let size = arr.length;
        //construct the heap
        for(let i = Math.floor(size/2) -1; i >= 0; i--){
            heapify(size, i);
        }
        for(let i = size-1; i >= 0; i--){
            let temp = arr[i];
            arr[i] = arr[0];
            arr[0] = temp;

            heapify(i, 0)
        }
        console.log(arr)
    }
}