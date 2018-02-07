module.exports = function(){
    Array.prototype.merge_sort = function(compFn){
        let arr = this;
        if(compFn == undefined){
            compFn = function(first,second){
                let opt1 = typeof first != 'string' ? first.toString() : first;
                let opt2 = typeof second != 'string' ? second.toString() : second;
                return opt1 <= opt2;
            }
        }

        let TopDownSplitMerge = function(B, iBegin, iEnd, A){
            
            if( (iEnd - iBegin) < 2) return;
            else{
                let iMiddle = Math.floor( (iEnd + iBegin) / 2);
                
                // console.log('splitting', iBegin, iMiddle,iEnd)
                
                TopDownSplitMerge(A, iBegin, iMiddle, B);
                TopDownSplitMerge(A, iMiddle, iEnd, B);
                TopDownMerge(B, iBegin, iMiddle, iEnd, A);
            }
        }

        let TopDownMerge = function(A, iBegin, iMiddle, iEnd, B){
            let i = iBegin, j = iMiddle
            // console.log("merging", iBegin, iMiddle, iEnd);

            for (let k = iBegin; k < iEnd; k++){
                if (i < iMiddle && (j >= iEnd || compFn(A[i], A[j]) ) ){
                    B[k] = A[i];
                    i++;
                }
                else {
                    B[k] = A[j];
                    j++;
                }
            }
        }

        
        //copy the array
        let Barr = arr.map(x=>x);
        TopDownSplitMerge(Barr, 0, arr.length, arr)
        return this;
    }
}