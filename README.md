# Testing JavaScript with Jasmine

## Table of Contents

- [How to run this project](#How to run this project)
- [Features and Tests](#Features and what the tests are checking for)
- [Contributing](#contributing)

## How to run this project

This project is running in Jasmine Env.

You can download and unzip the zipped archive 'udacity p4 test feedload from jim' firstly
You can run it locally on your computer as the following steps:
    1. Navigate into the present unzipped directory.
    2. Click on the index.html file to open it your browser.
    3. The project will load and the tests will run automatically.
    4. Scroll to the bottom of the page to see the test results.


## Features and what the tests are checking for

All the testing code was written in feedreader.js

The first testing code for 'RSS Feeds' is to except 'allFeeds' should be defined, and not empty.
Meanwhile I wrote 'URLs of the allFeeds are defined' and 'Names of the allFeeds are defined' to test that loops through each feed in the allFeeds object and ensures it has a URL/Name defined  and that the URL/Name is not empty.

For the second testing part, to write a new test suite named "The menu" with 'is hidden by default' and  'change visibility while the menu icon is clicked' that ensures the menu element is hidden by default     and the menu changes visibility when the menu icon is clicked

'Initial Entries' testing part is wrote to ensure that there is at least a single .entry element within the .feed container when the loadFeed function is called and completes its work

'New Feed Selection' testing part is wrote to ensure the content actually changes

## Contribution
It is much appreciated to provide the starter code by "hbkwong". 
Github: [https://github.com/udacity/frontend-nanodegree-feedreader]
I basically finish this testing code based on the starter code
