
module.exports = function(){ 
    
    Array.prototype.selection_sort = function(compFn){
        let arr = this;

        if(compFn == undefined){
            compFn  = function(cur,last){     
                let opt1 = typeof cur != 'string' ? cur.toString() : cur;
                let opt2 = typeof last != 'string' ? last.toString() : last;
                return opt1 < opt2;
            }
        }
        //loop through the array one element at a time. We can stop one element short of the list
        for(let i = 0; i < arr.length - 1; i++){

            //assume the smallest element is the current element
            let min = i;
            //start going through the unsorted portion of the list and find the smallest
            for(let j = i+1; j < arr.length; j++){
                
                if(compFn(arr[j], arr[min])){
                    min = j;
                }
            }
            if(min != i){
                let temp = arr[i];
                arr[i] = arr[min];
                arr[min] = temp;
            }
        }
        return arr;
    }
}
