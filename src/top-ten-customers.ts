import { invoiceData } from './invoice-data';
// import { custARR_quickSort } from './quicksort';

// Write a script to find the ten customers who have spent the most overall
// The output should be sorted by the amount spent and include the customer ID.
// For example:
// 77: 123433
// 32: 22421
// 17: 2234
// 98: 18421
// ...



//Creating interface for annual customer revenue
interface customer_ARR{
    customer: number;
    rev: number;
}


let customerRev = new Array();
//Lazy Double Loop?
//Should give us all the sums for customers

for (const invoice of invoiceData){
    let found: boolean = false;
    for (const customer of customerRev){
        //If we have found the customer
        if(invoice.customer == customer.customer){
            customer.rev = invoice.amount + customer.rev;
            found = true;
            break;
        }
    }
    //If the customer did not exist
    if (!found){
        //Inserting into customer_rev
        let newCust: customer_ARR = { customer: invoice.customer, rev: invoice.amount};
        customerRev.push(newCust);
    }
}


//Cretaing a sorted array of 
let sorted = custARR_quickSort(customerRev, 0, customerRev.length - 1);
// console.log(sorted.slice(0, 10));


//Providing 3 Digits for Customer ID
let linespace = 3;
//Pretty printing of top 10 customers.
for (let i = 0; i < 10; i++){
    let line = "";
    //Pad line with linespace difference.
    for (let j = 0; j < (linespace - sorted[i].customer.toString().length); j++){
        line = line + " ";
    }
    //Add customer data to line
    line = line + sorted[i].customer.toString() + ": " + sorted[i].rev.toString();
    //Print line
    console.log(line);
}





//QUICKSORT IMPLEMENTATION
/**
 * Split array and swap values
 *
 * @param {Array<customer_ARR>} array
 * @param {number} [left=0]
 * @param {number} [right=array.length - 1]
 * @returns {number}
 */
function custARR_partition(array: Array<customer_ARR>, left: number = 0, right: number = array.length - 1) {
    const pivot = array[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;
  
    while (i <= j) {
      //We are sorting high--->low so we swap > and <
      while (array[i].rev > pivot.rev) {
        i++;
      }
  
      while (array[j].rev < pivot.rev) {
        j--;
      }
  
      if (i <= j) {
        [array[i], array[j]] = [array[j], array[i]];
        i++;
        j--;
      }
    }
  
    return i;
  }

  /**
 * Quicksort implementation
 *
 * @param {Array<customer_ARR>} array
 * @param {number} [left=0]
 * @param {number} [right=array.length - 1]
 * @returns {Array<customer_ARR>}
 */
export function custARR_quickSort(array: Array<customer_ARR>, left: number = 0, right: number = array.length - 1) {
    let index;
  
    if (array.length > 1) {
      index = custARR_partition(array, left, right);
  
      if (left < index - 1) {
        custARR_quickSort(array, left, index - 1);
      }
  
      if (index < right) {
        custARR_quickSort(array, index, right);
      }
    }
  
    return array;
  }