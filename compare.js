
insertion_sort = require('./insertion_sort.js')
bubble_sort = require('./bubble_sort')
selection_sort = require('./selection_sort')
merge_sort = require('./merge_sort')

console.log(merge_sort)

insertion_sort()
bubble_sort()
selection_sort()
merge_sort()

let arrayA = [[],[],[]]
let arrayB = [[],[],[]]
let arrayC = [[],[],[]]


let resetArrays = function(){
    for(let i = 0; i < 10; i++){
        arrayA[0][i] = Math.floor(Math.random() * 1000)
    }
    for(let i = 0; i < 100; i++){
        arrayA[1][i] = Math.floor(Math.random() * 1000)
    }
    for(let i = 0; i < 1000; i++){
        arrayA[2][i] = Math.floor(Math.random() * 1000)
    }

    arrayB[0] = arrayA[0].map(x=>x);
    arrayB[1] = arrayA[1].map(x=>x);
    arrayB[2] = arrayA[2].map(x=>x);
    
    arrayC[0] = arrayA[0].map(x=>x);
    arrayC[1] = arrayA[1].map(x=>x);
    arrayC[2] = arrayA[2].map(x=>x);
    
}
let compareSorts = function(sort1, sort2, sort3){
    if(sort1){
        console.time(sort1 + "10")
        arrayA[0][sort1]()
        console.timeEnd(sort1 + "10")
        console.time(sort1 + "100")
        arrayA[1][sort1]()
        console.timeEnd(sort1 + "100")
        console.time(sort1 + "1000")
        arrayA[2][sort1]()
        console.timeEnd(sort1 + "1000")
    }
    
    if(sort2){
        console.time(sort2 + "10")
        arrayB[0][sort2]()
        console.timeEnd(sort2 + "10")
        console.time(sort2 + "100")
        arrayB[1][sort2]()
        console.timeEnd(sort2 + "100")
        console.time(sort2 + "1000")
        arrayB[2][sort2]()
        console.timeEnd(sort2 + "1000")
    }
    if(sort3){
        console.time(sort3 + "10")
        arrayC[0][sort3]()
        console.timeEnd(sort3 + "10")
        console.time(sort3 + "100")
        arrayC[1][sort3]()
        console.timeEnd(sort3 + "100")
        console.time(sort3 + "1000")
        arrayC[2][sort3]()
        console.timeEnd(sort3 + "1000")
    }
    resetArrays()
    
}
resetArrays();
compareSorts('bubble_sort', 'insertion_sort', 'merge_sort')
