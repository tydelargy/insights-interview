import { table } from 'console';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
import { customersByCohort, sortedInvoices } from './customers-by-cohort';
import { invoiceData } from './invoice-data';

// Write a script to calculate the revenue from each cohort for each month.
// The output should be a grid with months across the x axis and cohorts along the y axis

/*
For example:
                                                                
          2020-01, 2020-02,  2020-03, ...
2020-01:   223143,    2142,     9870, ...
2020-02:        0,    1288,     1288, ...
2020-03:        0,       0,    29212, ...
    ...:      ...,     ...       ...  ...
*/

//Want to take sorted by timestamp invoices
//Init a new obj and map array of zeroes to each cohort in cohorts

//For invoice in invoices,
    //Calculate cohort
    //Calculate index for insertion
    //Add ammt to that spot


//Helper function to get months between two dates
function monthsBetween(t1: number, t2: number){
    let dt1 = new Date(t1);
    let dt2 = new Date(t2);
    let years = dt2.getFullYear() - dt1.getFullYear();
    let months = dt2.getMonth() - dt1.getMonth();
    months = (years * 12) + months;
    return months;

}


//Calculate total months existing between first and last invoice, +1 to be inclusive.
let months = 1 + monthsBetween(sortedInvoices[0].timestamp, sortedInvoices[sortedInvoices.length - 1].timestamp);
console.log("TOTAL MONTHS: ", months);




let start  = sortedInvoices[0].timestamp;

interface cohortRev{
    yr: number;
    mo: number;
    rev: number[];
}

let revByCohort = new Array();

//Need to instantiate revByCohort with array of [0] * months

for (const cohort of customersByCohort){
    let co: cohortRev = {yr: cohort.yr, mo: cohort.mo, rev: new Array<number>(months).fill(0)};
    revByCohort.push(co);
}

for (const invoice of sortedInvoices){
    //Will give us the index of the month we will be inserting to.
    let month_index = monthsBetween(start, invoice.timestamp);
    let cohort_index = 0;

    //Need to find the cohort our customer belongs to.
    for(const cohort of customersByCohort){
        //Iterate through users
        for(const user of cohort.users){
            //Adding condition
            if(user == invoice.customer){
                revByCohort[cohort_index].rev[month_index] = invoice.amount + revByCohort[cohort_index].rev[month_index];
            }
        }
        cohort_index = cohort_index + 1;
    }
}

//WORKING!!
// console.log(revByCohort);

printRevByCohort();

// for(const cohort of revByCohort){
//     console.log(cohort.rev.length);
// }

function printRevByCohort(){
    //Printing Header
    let dstart = new Date(start);
    let tmp_yr = dstart.getFullYear();
    //Accounting for 0-11 to 1-12 space
    let tmp_mo = dstart.getMonth() + 1; 
    let line = "";
    // let linespace = 9;
    for (let i = 0; i < months; i++){
        let tmpString = "";
        //If first we need extra padding
        if (i == 0){
            //Adding 8 spaces for starter
            tmpString = tmpString + "        "; 
        }
        //Iterating on month so we want to reset to 1 and add a year
        if (tmp_mo == 13){ 
            tmp_mo = 1;
            tmp_yr = tmp_yr + 1;
        }
        tmpString = tmpString + "  "
        let mo_digit = String(tmp_mo).length;
        if(mo_digit == 1){
            tmpString = tmpString + String(tmp_yr) + "-0" + String(tmp_mo) + ",";
        }
        else{tmpString = tmpString + String(tmp_yr) + "-" + String(tmp_mo) + ",";}

        //Increasing month
        tmp_mo = tmp_mo + 1;
        line = line + tmpString;

    }

    //Printing the header
    console.log(line);

    //Printing Cohorts
    for(const cohort of revByCohort){
        prettyPrint(cohort);
    }
}

// 8 space lead for Header, 9 spaces in col, 2 space starter for date in header.


//Helper function to pretty print a cohort
function prettyPrint(cohort: cohortRev){
    let line = "";
    let linespace = 9;

    //Only print line after all columns added
    for(let i = 0; i < months; i++){
        let tmpString = "";

        //If start of line we need date
        if(i == 0){
            let mo_digit = String(cohort.mo).length;
            if(mo_digit == 1){
                tmpString = tmpString + String(cohort.yr) + "-0" + String(cohort.mo) + ":";
            }
            else{tmpString = tmpString + String(cohort.yr) + "-" + String(cohort.mo) + ":";}
        }

        //Adding padding for digits in amount.
        let amtDigit = String(cohort.rev[i]).length;
        for(let j = 0; j < (linespace - amtDigit); j++){
            tmpString = tmpString + " ";
        }
        tmpString = tmpString + String(cohort.rev[i]) + ",";
        line = line + tmpString;
    }
    console.log(line);

}