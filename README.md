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

###  65: 30846
###  21: 29686
### 100: 28979
### 64: 26915
### 41: 26807
### 99: 26778
### 47: 26326
### 72: 24977
### 98: 24595
### 73: 24422

Answers:

2. Output:

**2020-01 : [20,80,28,73,10,70,83,96,72,27,89,13,34,65,14,98,84,99,11,44,92,15,21,42,40,23,39,51,30,78]
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
2021-02 : [31]**


Answers:

3. Output:

>          2020-01,  2020-02,  2020-03,  2020-04,  2020-05,  2020-06,  2020-07,  2020-08,  2020-09,  2020-10,  2020-11,  2020-12,  2021-01,  2021-02,  2021-03,  2021-04,  2021-05,  2021-06,  2021-07,  2021-08,  2021-09,  2021-10,  2021-11,  2021-12,  2022-01,  2022-02,  2022-03,  2022-04,  2022-05,  2022-06,  2022-07,  2022-08,  2022-09,  2022-10,  2022-11,  2022-12,
2020-01:    50100,    14299,    16225,    26052,    19599,    11810,    17445,    13638,    12017,    13070,    12937,    11984,    17916,    13013,    11048,    11662,    22799,    13339,    18320,    18581,    14662,    18579,    19921,    15751,    13461,    13986,    17059,    13616,    14594,     9188,    16554,    14546,    22829,    22654,    15167,     4882,
2020-02:        0,    31149,    10013,     4522,     3215,     5735,     3877,     6307,    15256,     5950,     5504,     8861,     8510,     7206,    12929,     9933,     7279,     4861,    11418,     6724,    18475,     7772,     4625,    10961,    12134,     6396,    15866,     9480,    12503,     3576,     4845,     7328,     5862,    12533,     8010,     3812,
2020-03:        0,        0,    24190,        0,     4974,     8545,     4731,     8372,     2841,     5846,     6246,     1756,     1007,     1328,     2928,     9392,     5037,     9378,     4121,    10891,     1580,     4535,     5954,     3062,     1080,     8205,     8145,     5254,     6403,     9348,     5433,     3039,     4443,     1526,     2984,     3281,
2020-04:        0,        0,        0,    18900,     4921,        0,     4965,     8789,     1590,     7237,     9226,    10338,     2735,    10423,     4335,     5364,     2821,     7591,     2441,     3410,     6904,     5897,     6687,     6558,     9158,     5904,     4945,     7202,     6733,     7242,     8924,    12559,     8630,     2577,    10871,     1597,
2020-05:        0,        0,        0,        0,    19012,     6074,     4457,     5082,     5781,     6138,     2026,     4041,     4532,     1430,     7661,     4735,     4679,        0,     6809,     8307,     3100,     5346,     1211,     1935,     4406,     4933,     1215,     2992,     1357,     7850,     7231,     3151,     5231,     3202,     4017,     3014,
2020-06:        0,        0,        0,        0,        0,    13484,     7532,     2887,     6210,     2728,     3001,     4816,     7119,     1610,     5367,     7566,     1403,     5738,     2842,        0,        0,     2518,     3732,     7936,     1396,     1687,     1041,     6024,     2987,     1496,     1901,     1883,        0,     3561,     1284,     1305,
2020-07:        0,        0,        0,        0,        0,        0,     3541,     1690,        0,     3178,        0,        0,     2851,     1946,     1321,        0,        0,     1663,        0,        0,        0,     1027,        0,        0,        0,        0,        0,        0,        0,     1345,        0,        0,        0,     1536,     1957,        0,
2020-08:        0,        0,        0,        0,        0,        0,        0,     4057,        0,        0,     2621,     1420,     2316,     4388,     1724,        0,     5413,        0,        0,        0,     1987,        0,        0,        0,     3274,     1441,        0,        0,        0,        0,     3253,        0,        0,        0,     1535,     2538,
2020-09:        0,        0,        0,        0,        0,        0,        0,        0,     2350,        0,        0,     1602,        0,     1756,        0,        0,        0,        0,        0,        0,        0,        0,        0,        0,        0,        0,     1437,        0,        0,        0,        0,        0,        0,     1199,        0,        0,
2020-10:        0,        0,        0,        0,        0,        0,        0,        0,        0,     3002,     1266,        0,     1302,        0,        0,        0,        0,     1743,        0,        0,     2471,        0,        0,     1799,        0,        0,        0,        0,        0,        0,        0,     3716,        0,        0,        0,     1467,
2020-11:        0,        0,        0,        0,        0,        0,        0,        0,        0,        0,     2516,     1895,        0,        0,     1978,     1551,        0,     1028,     3641,        0,        0,        0,        0,     1989,        0,     1441,        0,     1345,     1519,     4977,        0,     1026,        0,        0,     2550,     1083,
2021-02:        0,        0,        0,        0,        0,        0,        0,        0,        0,        0,        0,        0,        0,     1913,        0,        0,        0,     1512,        0,        0,        0,        0,     1040,        0,        0,     1111,        0,        0,        0,        0,        0,     1936,        0,        0,        0,        0,


Answers:

## Submitting

To submit your code, send us a link to your repo.
Once we confirm that we've downloaded your work, please delete the repo you created so future candidates don't accidentally find your solution.

To submit your screen recording, upload the video to YouTube as "Private" in the "Visibility" section and use the "Share Privately" button to share it with elliot@growtopline.com.
If you'd prefer not to upload the video to YouTube, email elliot@growtopline.com and we can figure out an alternative.
