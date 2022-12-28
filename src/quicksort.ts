
import { customer_ARR } from "./top-ten-customers";

//FOR TOP CUSTOMERS
/**
 * Split array and swap values
 *
 * @param {Array<customer_ARR>} array
 * @param {number} [left=0]
 * @param {number} [right=array.length - 1]
 * @returns {number}
 */
export function custARR_partition(array: Array<customer_ARR>, left: number = 0, right: number = array.length - 1) {
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



///FOR TIMESTAMP
//QUICKSORT IMPLEMENTATION
/**
 * Split array and swap values
 *
 * @param {Array<any>} array
 * @param {number} [left=0]
 * @param {number} [right=array.length - 1]
 * @returns {number}
 */
export function timestamp_partition(array: Array<any>, left: number = 0, right: number = array.length - 1) {
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


///FOR GENERAL ARRAYS
/**
 * Split array and swap values
 *
 * @param {Array<any>} array
 * @param {number} [left=0]
 * @param {number} [right=array.length - 1]
 * @returns {number}
 */
export function gen_partition(array: Array<any>, left: number = 0, right: number = array.length - 1) {
  const pivot = array[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;

  while (i <= j) {
    while (array[i] < pivot) {
      i++;
    }

    while (array[j] > pivot) {
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
export function gen_quickSort(array: Array<any>, left: number = 0, right: number = array.length - 1) {
  let index;

  if (array.length > 1) {
    index = gen_partition(array, left, right);

    if (left < index - 1) {
      gen_quickSort(array, left, index - 1);
    }

    if (index < right) {
      gen_quickSort(array, index, right);
    }
  }

  return array;
}