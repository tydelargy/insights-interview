import { invoiceData } from './invoice-data';

// Write a script to group each customer into their "cohort"
// A customer's cohort is the month they paid their first non-zero invoice.

// The output should look like [cohort]: [customer ids]
// It should be sorted vertically by date (ascending) left to right by customer ID (ascending)
// For example:
// 2020-01: [1, 18, 29]
// 2020-02: [5, 22, 89]
// ...


//Interface for a cohort
export interface cohort{
    yr: number;
    mo: number;
    users: number[];
}

//Making empty array of cohorts
let cohorts = Array();


//Sorting so that we can always take first invoice, and don't need to double check.
export let sortedInvoices = timestamp_quickSort(invoiceData, 0, invoiceData.length - 1);

//For quickly checking if we've already added a user to a cohort.
let users = Array();

for (const invoice of sortedInvoices){
    //Create date object for using get year/mo methods.
    const dt = new Date(invoice.timestamp);

    //See if we already added the current user.
    let added = users.includes(invoice.customer);

    //Skip rest of body if added
    if(!added){
        //Add user to a cohort.
        for(const co of cohorts){
            if(invoice.amount != 0 && dt.getFullYear() == co.yr && dt.getMonth() == co.mo - 1){
                //Add user to their cohort.
                co.users.push(invoice.customer);
                //For already added check
                users.push(invoice.customer);
                added = true;
            }
        }
        
        //Add new cohort if we didn't add the user.
        if(!added && invoice.amount != 0){
            let newCo: cohort = {yr: dt.getFullYear(), mo: dt.getMonth() + 1, users: [invoice.customer]};
            cohorts.push(newCo);

            //For already added check
            users.push(invoice.customer);
        }
    }
}

//Loop through all cohorts and print them as desired.
for(let cohort of cohorts){
    let digit = cohort.mo.toString().length;
    //Adding a leading zero to the month if needed.
    if(digit == 1){
        console.log(cohort.yr.toString() + "-0" + cohort.mo.toString(), ": [" + cohort.users.toString() + "]");
    }   
    else{console.log(cohort.yr.toString() + "-" + cohort.mo.toString(), ": [" + cohort.users.toString() + "]");}
}

export let customersByCohort = cohorts;



//QUICKSORT IMPLEMENTATION
/**
 * Split array and swap values
 *
 * @param {Array<any>} array
 * @param {number} [left=0]
 * @param {number} [right=array.length - 1]
 * @returns {number}
 */
function timestamp_partition(array: Array<any>, left: number = 0, right: number = array.length - 1) {
    const pivot = array[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;
  
    while (i <= j) {
      while (array[i].timestamp < pivot.timestamp) {
        i++;
      }
  
      while (array[j].timestamp > pivot.timestamp) {
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
 * @param {Array<any>} array
 * @param {number} [left=0]
 * @param {number} [right=array.length - 1]
 * @returns {Array<any>}
 */
export function timestamp_quickSort(array: Array<any>, left: number = 0, right: number = array.length - 1) {
    let index;
  
    if (array.length > 1) {
      index = timestamp_partition(array, left, right);
  
      if (left < index - 1) {
        timestamp_quickSort(array, left, index - 1);
      }
  
      if (index < right) {
        timestamp_quickSort(array, index, right);
      }
    }
  
    return array;
  }