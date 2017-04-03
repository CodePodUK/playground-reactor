# Overview

This repo is just as its name suggests - a sandbox for react.js components.

It's also an opportunity to practice our github workflow.

As an initial overview, I suggest contributors do the following:

0) clone the repo and run it on your local machine (see #setup below for details)
1) decide on an improvement to make, feature or component to add
2) make a new branch exclusively aimed at your change 
3) get the feature working and submit a pull request

# Content

There are literally *no prescribed functions* for this "project".

It exists purely as a structural exercise.

My initial components take typed user input and display inconsequential data analyses. Feel free to build on that, or add whatever else you see fit - pictures of cats, embedded widgets, random data from APIs - **I dont care!**

# Form

This is what it's all about. We should discuss all issues and PRs in terms of their formal correctness. Does it fit the react modular paradigm? Does it respect the (as yet unformulated) group style criteria and best practice?

The point is that this gives us an an opportunity to discuss such issues in the abstract and converge around a consistent approach.

The point is not that the product is good, but that it's method of production is.

I won't waffle on more, you get the idea.

# setup

After cloning the repo, you'll have to install the npm packages.  To do this, type ```npm i``` while in the correct repos directory in the terminal.

Once you have done this, you can begin developing by typing ```npm start```.  This will start webpack dev server which will watch for changes you make and serve an up to date version of the app.

If you wish to build a static version of the website (for test deployment), type ```npm run build``` in the terminal.

Note, the original starter kit for this repository was sourced from [codecademy](https://www.codecademy.com/articles/react-setup-).  You can follow these instructions to set up your own blank project or use the popular CLI, create-react-app.

# testing

This repo uses Jest + Enzyme as its unit testing suite.  This choice was made because these testing tools are powerful, easy to use, well documented and popular (meaning lots of community support and tutorials).  However, anything you learn using these tools should be easily transferable to other testing frameworks with minor changes.

To run tests, find the root directory of this repo in your terminal application.  If this is your first time testing, type ```npm i``` to ensure you have all required dependencies installed.  You can then use the following commands to run different types of test:

* ```npm run test``` - this runs a one-off test of the whole testing suite;
* ```npm run test-watch``` - this runs the testing suite in watch mode.  It will watch for saves you make to components that are being tested and re-run the tests relating to those components immediately after saving.  This is useful to have running in the background if you are using TDD for immediate feedback on your changes.
* ```npm run test-coverage``` - this produces a coverage report.  It will look at your tests and calculate how much of your codebase is covered by the tests you have written.  It will also give you useful feedback on the lines of code that aren't touched by your tests (so you can fill these gaps).

To create a test, simply place a file next to the component you are testing with the following name: ```<component name>.spec.js```.  Jest will automatically find all files following this naming convention.  

An example (incomplete) test has been provided at ```app/components/App.spec.js```.  Over time, we aim to build a testing utility library so that common tests and tasks within tests do not have to be tpyed out every time a new test is created.
