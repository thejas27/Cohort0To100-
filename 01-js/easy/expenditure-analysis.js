/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let category;
  let amount;
  let array = new Array();
  let result = {
    category,
    amount
  }
  for(let i = 0; i < transactions.length ; i++ )
  {
    for(let j = 0; j < transactions.length; j++)
    {
      if(transactions[i].category == array[j].result.category)
      {
        array[j].result.amount += transactions[i].amount ;
      }
      else
      {
        array[j] = result;
        array[j].result.category = transactions[i].category;
        array[j].result.amount = transactions[i].amount;
      }
    }
  }
  return [ "category: " + result.category +  "totalspent: " + result.amount];
}

module.exports = calculateTotalSpentByCategory;
