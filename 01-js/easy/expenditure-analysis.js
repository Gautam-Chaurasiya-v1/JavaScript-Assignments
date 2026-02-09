/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
    const ans = []
    const temp = {}


    for(const obj of transactions){
       temp[obj.category] = temp[obj.category] || 0
       temp[obj.category] += obj.price
    }

   for(const [key,val] of Object.entries(temp)){
     ans.push({'category' : key , 'totalSpent' : val})
   }

    return ans
}

module.exports = calculateTotalSpentByCategory;