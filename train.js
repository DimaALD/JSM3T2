let arr = [{name : 'Dima',surname : 'Aldoshin'},{name : "Oleg", surname : 'Medved'}]
let arr2 = {name:'Dima'}

let x = arr.filter(elem=>{
    let res = true
    for(key in arr2){
        if(elem[key] !== arr2[key])
        res = false
    }
    return res
})
console.log(x)