// 1

/*
const inp = [
  { user: "A", amount: 100 },
  { user: "B", amount: 200 },
  { user: "A", amount: 50 }
]

const out = inp.reduce((acc,ele)=>{

    // console.log(ele,acc)
     acc[ele.user] = acc[ele.user] || 0
     acc[ele.user] += ele.amount

     return acc
},{})

console.log(out)
*/

//2 

/*
const inp = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
]

const out = inp.reduce((acc,ele)=>{
    
    acc[ele.id] = ele.name
    return acc
},{})
*/

// 3

/*
const inp = { a: 0, b: null, c: "hello", d: undefined, e: 5 }

const out = {}

for(const [key,val] of Object.entries(inp)){

    if(val){
        out[key] = val
    }
}
*/

// 4 

/*
roles={ admin:["read","write"], user:["write"], staff: ["write"]}
checkRole="user",
action="write"

if(roles[checkRole].includes(action))console.log("True")
else console.log("False")
*/

// 5 

/*
const inp = [
  { id: 1, category: "electronics", price: 100 },
  { id: 2, category: "clothes", price: 50 },
  { id: 3, category: "electronics", price: 200 }
]

const out = inp.reduce((acc,ele)=>{
    acc[ele.category] = acc[ele.category] || 0
    acc[ele.category] += ele.price
    return acc
},{})
*/

// 6

/*
const out = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 1, name: "A" }
]

const tracker = {}
// console.log(Object.entries(out))
for(const [id,ele] of Object.entries(out)){
    if(tracker[ele.id]){
        out.splice(id,1)
    }else{
        tracker[ele.id] = 1
    }
}
*/

// 7 

/*
const inp = { a: 1, b: 2, c: 3, d: 4 }, size=2

const temp = Object.entries(inp)
let inter = []
const out = []

for(let i=0;i<temp.length;i++){
    
    if(!(i%size) && i!=0){
        out.push(inter)
        inter = []
    }
    inter.push(temp[i])
}
out.push(inter)
*/

// 8 

/*
const inp = { a: "apple", b: "banana", c: "kiwi" }
let out = ""

for(const val of Object.values(inp)){
    if(val.length > out.length)out = val
}
*/

// 9 

/*
const inp = {
  en: { hello: "Hello", bye: "Goodbye" },
  fr: { hello: "Bonjour", bye: "Au revoir" },
  es: { hello: "Hola" }
}

const out = {}

for (const [lang , trans] of Object.entries(inp)){
    for (const [key,val] of Object.entries(trans)){
        out[key] = out[key] || {}
        out[key][lang] = val
    }
}
*/


// 10

/*
const inp = [
  { id: 1, category: "fruit" },
  { id: 2, category: "veggie" },
  { id: 3, category: "fruit" }
]

const out = inp.reduce((acc,ele) => {
   
    acc[ele.category] = acc[ele.category] || []
    acc[ele.category].push(ele.id)

   return acc
},{})
*/

// 11 

/*
const inp = { a: { x: 1, y: 2 } },  inp2 = { a: { x: 1, y: 2 } }
let flag = true

for (const [key,val] of Object.entries(inp)){
    if(!(key in inp2)){
    console.log(false)
    flag = false
    break
    }
    for(const [k,v] of Object.entries(val)){
       if(!(k in inp2[key])){
       console.log(false)
       flag = false
    break
       }
       else if(!(v === inp2[key][k])){
       console.log(false)
       flag = false
    break
       }
    }
}

if(flag)console.log(true)
*/

// 12

/*
const inp = { a: [1, [2, [3]]], b: [4, [5]] }

function depth(arr){
    let level = 0
    for(const ele of arr){
        if(Array.isArray(ele)){
           level = Math.max(depth(ele),level)
        }
    }
    return level + 1
}


for(const ele in inp){
    let deep = depth(inp[ele])
    console.log(deep)
    inp[ele] = inp[ele].flat(deep-1);
}

console.log(inp)
*/

// 13 

/*
const inp = { fruits: ["apple","apple","banana"], drinks: ["apple","tea"] }
let count = 0
let ans = ""
const out = Object.values(inp).reduce((acc,ele) => {
    
    for(const word of ele){
        acc[word] = acc[word] || 0
        acc[word] += 1

        if(acc[word] > count){
            ans = word
            count = acc[word]
        }
    }

    return acc
},{})
*/

// 14 

/*
const inp = { a: [1,2,3,4], b: [2,3,4], c: [3,4,5] }
const inp1 = Object.values(inp)
const out = []

for(const ele of inp1[0]){
    let flag = true;
    for(let i=1;i<inp1.length;i++){
        if(!(inp1[i].includes(ele))){
            flag = false
            break
        }
    }
   if(flag) out.push(ele)
}
*/

// 15 

/*
const inp ={ a: { x: 1, y: 2 } }
const inp1  ={ a: { y: 3, z: 4 } }

function isObject(val){
    return typeof val === 'object' && val != null && !Array.isArray(val)
}

function merge(objA,objB){
    
    for(const ele in objA){
        if(!(ele in objB)){
             objB[ele] = objA[ele]
        }
        else{
            if(isObject(objA[ele])) merge(objA[ele],objB[ele])
        }
    }

}

merge(inp,inp1)

console.log(inp,inp1)
*/

// 16 

/*
const inp ={ user: { profile: { name: "Alice", age: 25 } } }

function isObject(val){
    return typeof val === 'object' && val != null && !Array.isArray(val)
}

const out = {}

function objectDestructre(obj){
     for(const ele in obj){
        if(isObject(obj[ele])){
            objectDestructre(obj[ele])
        }
        else{
            out[ele] = obj[ele]
        }
     }
}

objectDestructre(inp)
*/

// 17

/*
const inp ={ a: 10, b: 50, c: 30, d: 40 }, N=2
const out = Object.entries(inp)

out.sort((a,b) => b[1]-a[1])
*/



// 18 

/*
const inp =[
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Alice", age: 22 }
]

inp.sort( function (a,b){

    let nameA = a.name
    let nameB = b.name
    let ageA = a.age
    let ageB = b.age

    if(nameA<nameB)return -1
    else if(nameA > nameB)return 1
    else {
        if(ageA < ageB)return -1
        else return 1
    }
})

console.log(inp)
*/


// 19

/*
const expected = ["a","b","c"]
const actual = ["b","c","d"]
const out = {}

for(const ele of expected){
    if(!(actual.includes(ele))){
        out.missing = out.missing || []
        out.missing.push(ele)
    }
}


for(const ele of actual){
    if(!(expected.includes(ele))){
        out.extra = out.extra || []
        out.extra.push(ele)
    }
}
    */

// 20 

/*
const inp = { a: 10, b: 20 } , inp1 = { a: 5, c: 15 }


for(const [key,val] of Object.entries(inp)){
   if(!(key in inp1)){
    inp1[key] = val
   }
}

console.log(inp1)
*/

// console.log(out)


