
// https://www.notion.so/QUESTIONS-FOR-JS-WEEKEND-2f4b50bf87c981c9ba1dccb3797078fb?source=copy_link

// 1

/* 
 for...of loop   - is the modern way to iterate over the values of iterable objects like Array, String, Map, Set, and more.

 The for...in loop iterates over the enumerable properties (keys) of an object. 

Array.prototype.forEach()

*/

/*
let inp = { food: [10, 20, 30], travel: [5, 15], bills: [40, 60] }
let out = {} 

for (let prop in inp ){
    sum = 0
    for (let ele of inp[prop]){
        sum += ele
    }
    out[prop] = sum
}

console.log(out)
*/


// 2 

/* Method   - 	When to use
in operator	 -  Use when you want to check if the property exists anywhere in the object or its prototype chain.

Object.hasOwn()	   -  Recommended for checking if a property is a direct (non-inherited) property of the object.

object.hasOwnProperty()	 -  Similar to Object.hasOwn(), but with potential pitfalls in edge cases (e.g., null-prototype objects).

Object.keys().includes().-	A viable alternative for checking direct properties, though less performant than Object.hasOwn() for simple checks.

Avoid checking against undefined (e.g., if (obj.key !== undefined)), because a key can exist with an actual value of undefined. The in operator and Object.hasOwn() handle this correctly. 

let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"]

let out = {}

for(let ele of fruits){
    if(ele in out){
        out[ele] += 1
    }else{
        out[ele] = 1
    }
}

console.log(out)
*/


//3 

/*
const inp = { a: "x", b: "y", c: "z" }

const out = {}

for (const ele in inp){
    out[inp[ele]] = ele
}

console.log(out)
*/

// 4 

/*
const inp = { a: 10, b: 50, c: 20 }
let ans = ""
let largestNum = 0

for(const key in inp){
    let num = inp[key]
    if(largestNum < num ){
        ans = key
        largestNum = num
    }
}

console.log(ans)
*/

// 5 

/*

spread Operator : 
1. Creating a New Array (Merging or Copying) 
2. Passing Array Elements as Function Arguments
3. Converting Iterables to Arrays
4. Array Destructuring (as Rest Syntax)



const inp = { fruits: ["apple", "banana"], veggies: ["carrot", "pea"] }

const out = []

for(const key in inp){
    out.push(...inp[key])
}

console.log(out)
*/

// 6

/*
const inp = [
  { name: "A", city: "Delhi" },
  { name: "B", city: "Mumbai" },
  { name: "C", city: "Delhi" }
]


const out = {}

for(const ele of inp){
    if(ele.city in out){
        out[ele.city].push(ele.name)
    }else{
        out[ele.city] = [ele.name]
    }
}

console.log(out)
*/

// 7

/*
const inp = { a: 20, b: 60, c: 40, d: 90 }
const out = {}

for(const key in inp){
    if(inp[key] > 50)out[key] = inp[key]
}

console.log(out)
*/

// 8 

/*
const inp = { A: [80, 90], B: [70, 75, 85] }

let ans = ""
let ansSum = 0

for(const [key,val] of Object.entries(inp)){
    console.log(key,val)
    let sum = val.reduce((acc,n) => {
        return acc+n
    },0)
    sum = (sum/val.length)
    if(sum>ansSum){
        ans = key
        ansSum = sum
    }
}

console.log(ans)
*/

// 9 

/*
// nums.find(n => n === 3)     // 3
// nums.includes(4)            // true

const inp = { x: [1,2,3], y: [2,3,4], z: [4,5] }
const ans = []

for(const val of Object.values(inp)){
    console.log(val)

    val.reduce((acc,n) => {
  
        if(!acc.includes(n))acc.push(n)
        return acc
    },ans)
}

console.log(ans)
*/

// 10

/*
const inp = { name: "Rahul", age: 23, city: "Noida" }
const filter = ["name","city"]

const ans = {}

for(const fil of filter){
    ans[fil] = inp[fil]
}

console.log(ans)
*/

// 11 ( same as 8)

// 12 

/*
const inp = { a: 3, b: 1, c: 2 }
const ans = Object.entries(inp)

ans.sort((a,b) => a[1]-b[1])

console.log(ans)
*/

// 13

/*
const inp = { a: 1, b: 2, c: 3 }
const ans = Object.keys(inp).length

console.log(ans)
*/

// 14

/*
const inp = { name: "alice", city: "delhi" }

function capitalize(str){
  return str[0].toUpperCase() + str.slice(1)
}

for(const [key,val] of Object.entries(inp)){
    inp[key] = capitalize(val)
}

console.log(inp)
*/

// 15

/*
const inp = { name: "Alice", age: 25 }
let ans = ""

for(const [key,val] of Object.entries(inp)){
    ans += key
    ans += "="
    ans += val
    ans += "&"
}

ans = ans.slice(0,-1)

console.log(ans)
*/

/*
const inp = { name: "Alice", age: 25 }
const ans = new URLSearchParams(inp).toString()

console.log(ans)
*/

// 16

/*
const inp = [1,2,3,4,5,6]

const ans = inp.reduce((acc,n) => {
    
    acc.even = acc.even || 0
    acc.odd = acc.odd || 0

    if(n%2)acc["odd"] += 1
    else acc["even"] += 1
    
    return acc
},{})

console.log(ans)
*/

// 17 

/*
const x = { a: 1, b: 2, c: 3 },y = { b: 4, c: 5, d: 6 }
const ans = []
for(const key of Object.keys(x)){
    if(key in y){
       ans.push(key)
    }
}

console.log(ans);
*/

// 18

/*
const inp = [{ id: 1, name: "A" }, { id: 2, name: "B" }]


const out = inp.reduce((acc,ele)=>{
  acc[ele.id] =  ele
  return acc
},{})

console.log(out)
*/

// 19

/*
const inp = { a: 1, b: "hello", c: 3 }

// typeof NaN === "number" // true 😬

for(const val of Object.values(inp)){
    // if(typeof val !== "number"){
    //     console.log("False")
    //     break
    // }
    if(!Number.isFinite(val)){
        console.log("False")
        break
    }
}
    */