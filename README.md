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

Answers: The runtime will scale directly with invoices and customers but several concessions have been made to improve average runtime. The first is that we add customers only when their first found, which means that our customer list grows over time, and therefore we do not search through the full list of customers with each invoice. We also break when we have found the customer, so we do not search the current customer list with each invoice either.

2. Output:

2020-01 : [20,80,28,73,10,70,83,96,72,27,89,13,34,65,14,98,84,99,11,44,92,15,21,42,40,23,39,51,30,78]
2020-02 : [82,3,50,37,86,81,45,61,67,100,24,56,59,41,8,32,33]
2020-03 : [93,94,25,19,12,48,4,55,47,90,5,77]
2020-04 : [88,63,57,16,1,66,26,52,64,9,6,97,87]
2020-05 : [22,74,18,95,53,79,85,49,36,38]
2020-06 : [71,75,62,76,17,60,35,46]
2020-07 : [29,58]
2020-08 : [69,68]
2020-09 : [43]
2020-10 : [54,91]
2020-11 : [2,7]
2021-02 : [31]


Answers:


3. Output:

See part-3-output.txt


Answers:

## Submitting

To submit your code, send us a link to your repo.
Once we confirm that we've downloaded your work, please delete the repo you created so future candidates don't accidentally find your solution.

To submit your screen recording, upload the video to YouTube as "Private" in the "Visibility" section and use the "Share Privately" button to share it with elliot@growtopline.com.
If you'd prefer not to upload the video to YouTube, email elliot@growtopline.com and we can figure out an alternative.
