# Topline integration interview project

Thanks for taking the time to interview! We really appreciate it, and we hope to see the best of your work.

## Rules

Please do this interview project on your own, without the help of anyone else.
With that being said, you are more than welcome to use the internet.
Google and Stack Overflow are invaluable tools in our daily lives, and we wouldn't expect you to do your best work without them.

We'd really like to see every part of your development process, so please _record your screen while you work_.

In addition to writing the code required by the instructions, write down your answers to the questions in the instructions directly in this README file.
Most of the questions are open ended, and you don't need to make your code handle the questions below each prompt, but please make sure your code works before moving on to the next question.
Clear writing and expressing your ideas is just as valuable as writing great code.

## Getting started

Make a fork of this repo on your own GitHub account and then clone it down to your personal computer.

- Read through the files in the `/src` directory.
- Install dependencies for the project with `yarn install`.
- Run `yarn part-0` to run the `/src/min-max-mean-invoice.ts` script.
  Read over the script to get a sense of how we're importing the data from a file.
  We're cutting some corners to make things easier for this interview.
  Use this script as a rough guide when writing your own scripts.

## Instructions

1. Implement the `top-ten-customers.ts` script. Use `yarn part-1` to run the script, and paste your output and the answers to the questions below.

- How does your solution scale with the number of invoices? How about the number of customers?

2. Implement the `customers-by-cohort.ts` script. Use `yarn part-2` to run the script, and paste your output and the answers to the questions below.

- How does your solution scale with the number of invoices? How about the number of customers?
- Does your solution depend on whether the invoice data is sorted?

3. Implement the `revenue-by-cohort.ts` script. Use `yarn part-3` to run the script, and paste your output and the answers to the questions below.

- How does your solution scale with the number of invoices? How about the number of customers?
- Does your solution depend on whether the invoice data is sorted?

## Tips

- All of the questions have a desired output format that can require a lot of string mangling.
  If you're stuck on the formatting part, move on to the next question and get back to formatting later.
- Git is your friend. Commit often and use descriptive commit messages. Push your work to GitHub so you don't lose it.
- Get it working and then make it look good. Don't get lost in the perfect solution before you have a working solution.
- Write down your responses to all the questions in the prompt before moving on to the next prompt.
- Include more comments than you would in normal code. This will help us understand your thought process.
- Take breaks when you need them.
- You don't have to finish all of the prompts. We prefer thorough, well thought out responses over a complete solution without written responses.

## Responses

Please write your responses to the questions in the instructions here. Please indicate any tradeoffs you made.

1. Output:

 65: 30846
 21: 29686
100: 28979
 64: 26915
 41: 26807
 99: 26778
 47: 26326
 72: 24977
 98: 24595
 73: 24422

Answers: The runtime will scale directly with invoices and will scale with customers but several concessions have been made to improve average runtime. The first is that we add customers only when their first found, which means that our customer list grows over time, and therefore we do not search through the full list of customers with each invoice. We also break when we have found the customer, so we do not search the current customer list with each invoice either. When sorting the customer list, a quicksort algorithm was used so that the sorting process is (Nlog(N)) for number of customers.

2. Output:

2020-01 : [10,11,13,14,15,20,21,23,27,28,30,34,39,40,42,44,51,65,70,72,73,78,80,83,84,89,92,96,98,99]
2020-02 : [3,8,24,32,33,37,41,45,50,56,59,61,67,81,82,86,100]
2020-03 : [4,5,12,19,25,47,48,55,77,90,93,94]
2020-04 : [1,6,9,16,26,52,57,63,64,66,87,88,97]
2020-05 : [18,22,36,38,49,53,74,79,85,95]
2020-06 : [17,35,46,60,62,71,75,76]
2020-07 : [29,58]
2020-08 : [68,69]
2020-09 : [43]
2020-10 : [54,91]
2020-11 : [2,7]
2021-02 : [31]


Answers: The runtime will scale with invoices and customers. Once again we make several concessions to ignore unnecessary searches when we have found the correct existing cohort or if the user has already been added. This minimizes searching in both domains. The solution is dependent on a sorted list of invoices, which we accomplish with a quicksort of O(Nlog(N)) for the number of invoices. While this is an extra step, it allows us to avoid unnecessary operations. It would be necessary to go through every cohort and user to verify that we have not already inserted it and if we did, whether it is the proper cohort and not preempted by the current invoice. We must therefore do many more insertion and deletion operations for unnecessary users in incorrect cohorts which is costly. Our runtime would still scale with invoices, customers, and the number of cohorts, but it becomes N^2 for the number of cohorts. This is because we need to search for the current cohort of the invoice, as well as through all existing cohorts that may contain the user. We also can not afford to break from our cohort and user search since we need to verify the user does not exist in any of the cohorts. This will seriously affect the average runtime. Additionally, with this method we then also have to sort the cohorts with a quicksort, to provide the desired output and though this is a much smaller operation than sorting the invoices, the tradeoff for not being able to lazily insert into cohorts is needing to loop through cohorts twice. Theoretically, in practival application, we could also reduce the load for sorting invoices by doing a binary insertion for new invoices and for new customers. We would also be able to directly insert the customer into their cohort by searching through their invoices, not the entire invoice list. 

3. Output:

See part-3-output.txt -- Not cleanly formatted in markdown to demonstrate printing function/


Answers: Our solution scales directly with the number of invoices and customers. This is because we need to find the cohort for each user. There are no easy break cases in which we can avoid sections of our search except in the case of a 0 invoice, since we need to add every invoice, and must find the cohort to which the user belongs. Our solution does not directly depend on sorted invoice data. It functions agnostic to how the invoices are sorted except for one key feature, we must know the timestamp of an invoice for the first month of calculation. This could be hard-set, but we use the first index of a sorted invoice to create a starting timestamp, and then a months between function to calculate the length of an array representing the revenue by month for a cohort and the index at which to add the current invoice to. Provided this is accounted for, we can operate agnostic to a sorted invoice list. The current program operates off the unsorted list, but uses the sorted list to grab the earliest timestamp and therefore first month of calculation. The sorted list could be used in the program, and would not change the output, however, to fully demonstrate this capability the unsorted list is substituted in. Since the sorted list was already calculated this does not add to the time complexity of this program. 

## Submitting

To submit your code, send us a link to your repo.
Once we confirm that we've downloaded your work, please delete the repo you created so future candidates don't accidentally find your solution.

To submit your screen recording, upload the video to YouTube as "Private" in the "Visibility" section and use the "Share Privately" button to share it with elliot@growtopline.com.
If you'd prefer not to upload the video to YouTube, email elliot@growtopline.com and we can figure out an alternative.
