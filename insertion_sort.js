//insertion sort 
module.exports = function(){ 

    Array.prototype.insertion_sort = function(compFn){
        let arr = this;
    // let insertion_sort = function(arr, compFn){
        
        //override the compare function if none has been given
        if(compFn == undefined){
            compFn  = function(top,next){     
                let opt1 = typeof top != 'string' ? top.toString() : top;
                let opt2 = typeof next != 'string' ? next.toString() : next;
                return opt1 < opt2;
            }
        }

        //ascent the array
        for(let i = 1; i < arr.length; i++){
        let temp = arr[i]; 
        let j = i-1;

        //descent the array until smaller number is found
        while(j >= 0 && compFn(temp, arr[j])){
            //move the current item to the next item, or previously examined item
            arr[j + 1] = arr[j];
            j--;
        }
        //assign the top to the appropriate place in the array
        arr[j+1] = temp
        }
        //return the array
        return arr;
    }


}
