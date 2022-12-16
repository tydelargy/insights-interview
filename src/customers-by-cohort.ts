import { invoiceData } from './invoice-data';

// Write a script to group each customer into their "cohort"
// A customer's cohort is the month they paid their first non-zero invoice.

// The output should look like [cohort]: [customer ids]
// It should be sorted vertically by date (ascending) left to right by customer ID (ascending)
// For example:
// 2020-01: [1, 18, 29]
// 2020-02: [5, 22, 89]
// ...
