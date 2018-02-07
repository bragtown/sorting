module.exports = function(){
    Array.prototype.bubble_sort = function(compFn){
        let arr = this;
        //override the comparison function if none was provided
        if(compFn == undefined){
            compFn = function(cur,next){
                let opt1 = typeof cur != 'string' ? cur.toString() : cur;
                let opt2 = typeof next != 'string' ? next.toString() : next;
                return opt1 > opt2;
            }
        }
        //loop through every element starting at 0
        for(let i = 0; i < arr.length; i++){
            //loop through every element starting at i. Things below i are already in order
            for(let j = i; j < arr.length; j++){
                if(compFn(arr[i], arr[j])){
                    //swap
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        return arr;

    }
}