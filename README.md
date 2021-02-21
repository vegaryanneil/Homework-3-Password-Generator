# Homework-3-Password-Generator

## HTML

I heavily edited the index.html file. I renamed several classes, and ID.
I added a slider and input box to adjust the number of characters for the password. It is a miminum of 8 and a maximum of 128.
I added three different checkboxes to distinguish when to include uppercase, numbers, and symbols.

## CSS

The style.css file was minimally changed. I had to add in and style the new three buttons.
I minimized some of the styling codes. I expanded the input box that holds the code so that when it maxed out at 128 characters it would fit all the code.

## JS

The script.js file was heavily re-done. I started from scratch because it was easier for me to think through the entire process. There was a lot of online searching to solve this problem. I found out you can use code points from an ASCII Table to generate the letters, number, and symbols.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
![ASCII-TABLE](assets/asciitable.gif)

I also utilized the following resource to help me finalize the javascript code.
https://www.studytonight.com/post/building-a-password-generator-with-javascript
