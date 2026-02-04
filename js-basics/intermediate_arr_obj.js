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



console.log(out)


